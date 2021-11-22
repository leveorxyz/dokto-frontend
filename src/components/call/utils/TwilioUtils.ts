import {
  connect,
  createLocalTracks,
  Room as RoomType,
} from "twilio-video";

const connectToRoom = async (
  token: string,
  roomId: string,
  trackDisabled = false,
): Promise<RoomType> => {
  try {
    const tracks = trackDisabled ? [] : await createLocalTracks();
    const room = await connect(token, {
      name: roomId,
      tracks,
    });
    return Promise.resolve(room);
  } catch (error) {
    const room = await connect(token, {
      name: roomId,
    });
    return Promise.resolve(room);
  }
};

const toExport = {
  connectToRoom,
};

export default toExport;
