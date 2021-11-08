import {
  connect,
  LocalAudioTrack,
  LocalVideoTrack,
} from "twilio-video";

// const audioConstraints = {
//   video: false,
//   audio: true,
// };

const videoConstraints = {
  audio: true,
  video: {
    width: 640,
    height: 480,
  },
};

const connectToRoom = async (
  token: string,
  roomId: string,
  setRoom: any,
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

      setRoom(room);
    })
    .catch((err) => {
      console.log(err);
    });
};

const toExport = {
  connectToRoom,
};

export default toExport;
