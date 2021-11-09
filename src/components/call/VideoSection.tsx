import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { Room as RoomType } from "twilio-video";

import { twilioTokenAtom } from "./atoms";
import Videos from "./Videos";
import TwilioUtils from "./utils/TwilioUtils";

const VideoSection = () => {
  const [rooms, setRooms] = useState<RoomType[] | null>(null);
  const { token, roomNames } = useRecoilValue(twilioTokenAtom);

  useEffect(() => {
    roomNames?.forEach((roomName) => {
      TwilioUtils.connectToRoom(token, roomName, setRooms);
    });
  }, [token, rooms, roomNames]);

  return (
    <>
      {rooms?.map((room) => <Videos key={room.sid} room={room} />)}
    </>
  );
};

export default VideoSection;
