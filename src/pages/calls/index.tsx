import { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { Room as RoomType } from "twilio-video";
import { useRecoilValue } from "recoil";
import TwilioUtils from "../../components/call/utils/TwilioUtils";
import useTwilioToken from "../../hooks/twilio/useTwilioToken";
import SideBar from "../../components/call/SideBar";
import Videos from "../../components/call/Videos";
import authAtom from "../../atoms/auth.atom";
import { twilioTokenAtom } from "../../components/call/atoms";
import LoadingPage from "../../components/common/fallback/LoadingPage";

export default function VideoCalls() {
  const [room, setRoom] = useState<RoomType | null>(null);
  // eslint-disable-next-line
  const [waitingRoom, setWaitingRoom] = useState<RoomType | null>(null);
  const { token, roomName } = useRecoilValue(twilioTokenAtom);
  const authState = useRecoilValue(authAtom);

  useEffect(() => {
    if (token && roomName) {
      // If doctor, join both waiting & doctor room
      if (authState.user?.userType === "DOCTOR") {
        // connect to doctor room
        TwilioUtils.connectToRoom(token, roomName).then((currentRoom) => {
          setRoom(currentRoom);
        });
        // connect to waiting room
        TwilioUtils.connectToRoom(token, "waiting", true).then((currentRoom) => {
          setWaitingRoom(currentRoom);
        });
      } else if (authState.user?.userType === "PATIENT") {
        TwilioUtils.connectToRoom(token, "waiting", true).then((currentRoom) => {
          setWaitingRoom(currentRoom);
        });
      }
    }
  }, [token, roomName, authState.user?.userType]);

  const {
    isLoading,
  } = useTwilioToken({
    identity: `${authState.user?.id}_${authState.user?.fullName}`,
    // roomName: `${authState.user?.id}_${authState.user?.fullName}` ?? "",
    roomName: "doctor",
  });

  if (isLoading || !waitingRoom) {
    return (
      <Flex minHeight="100vh">
        <LoadingPage />
      </Flex>
    );
  }

  return (
    <Flex minHeight="100vh" w="100%">
      <SideBar waitingRoom={waitingRoom} />
      {room && <Videos room={room} />}
    </Flex>
  );
}
