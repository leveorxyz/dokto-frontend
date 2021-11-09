import {
  connect,
  LocalAudioTrack,
  LocalVideoTrack,
  Room as RoomType,
} from "twilio-video";

const videoConstraints = {
  audio: true,
  video: {
    width: 640,
    height: 320,
  },
};

const connectToRoom = async (
  token: string,
  roomId: string,
  setRooms: React.Dispatch<React.SetStateAction<RoomType[] | null>>,
) => {
  // const onlyWithAudio = store.getState().connectOnlyWithAudio;
  const constraints = videoConstraints;

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(async (stream) => {
      // create data track for messages
      const audioTrack = new LocalAudioTrack(stream.getAudioTracks()[0]);
      const videoTrack = new LocalVideoTrack(stream.getVideoTracks()[0]);
      const tracks = [audioTrack, videoTrack];

      const room = await connect(token, {
        name: roomId,
        tracks,
      });

      setRooms((prev) => (prev ? [room, ...prev] : [room]));
    })
    .catch((err) => {
      console.log(err);
    });
};

const toExport = {
  connectToRoom,
};

export default toExport;
