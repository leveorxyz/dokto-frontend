import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { Room as RoomType } from "twilio-video";
import { twilioTokenAtom } from "./atoms";
import authAtom from "../../atoms/auth.atom";
import Videos from "./Videos";
import TwilioUtils from "./utils/TwilioUtils";
import LoadingPage from "../common/fallback/LoadingPage";

const Room = () => {
  const [room, setRoom] = useState<RoomType | null>(null);
  // eslint-disable-next-line
  const [waitingRoom, setWaitingRoom] = useState<RoomType | null>(null);
  const { token, roomName } = useRecoilValue(twilioTokenAtom);
  const { user } = useRecoilValue(authAtom);

  useEffect(() => {
    if (token && roomName) {
      // If doctor, join both waiting & doctor room
      if (user?.userType === "DOCTOR") {
        // connect to doctor room
        TwilioUtils.connectToRoom(token, roomName).then((currentRoom) => {
          setRoom(currentRoom);
        });
        // connect to waiting room
        TwilioUtils.connectToRoom(token, "waiting", true).then((currentRoom) => {
          setWaitingRoom(currentRoom);
        });
      } else if (user?.userType === "PATIENT") {
        TwilioUtils.connectToRoom(token, "waiting", true).then((currentRoom) => {
          setRoom(currentRoom);
        });
      }
    }
  }, [token, roomName, user?.userType]);

  if (!room) {
    return <LoadingPage />;
  }

  return <Videos key={room.sid} room={room} />;
};

export default Room;
