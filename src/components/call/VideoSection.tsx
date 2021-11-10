import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { Room as RoomType } from "twilio-video";

import { twilioTokenAtom } from "./atoms";
import Videos from "./Videos";
import TwilioUtils from "./utils/TwilioUtils";
import LoadingPage from "../common/fallback/LoadingPage";

const VideoSection = () => {
  const [room, setRoom] = useState<RoomType | null>(null);
  const { token, roomName } = useRecoilValue(twilioTokenAtom);

  useEffect(() => {
    if (token && roomName) {
      TwilioUtils.connectToRoom(token, roomName).then((currentRoom) => {
        setRoom(currentRoom);
      });
    }
  }, [token, roomName]);

  if (!room) {
    return <LoadingPage />;
  }

  return (
    <>
      <Videos key={room.sid} room={room} />
    </>
  );
};

export default VideoSection;
