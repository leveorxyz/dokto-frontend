import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { twilioTokenAtom } from "./atoms";
import Videos from "./Videos";
import TwilioUtils from "./utils/TwilioUtils";

const VideoSection = () => {
  const [room, setRoom] = useState(null);
  const { token, room: roomId } = useRecoilValue(twilioTokenAtom);

  useEffect(() => {
    TwilioUtils.connectToRoom(token, roomId, setRoom);
  }, [token, roomId]);

  return (
    <div>
      {room && <Videos room={room} />}
    </div>
  );
};

export default VideoSection;
