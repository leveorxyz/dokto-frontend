import { Flex } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import Overlay from "../../components/call/Overlay";

import useTwilioToken from "../../hooks/twilio/useTwilioToken";

import SideBar from "../../components/call/SideBar";
import Room from "../../components/call/Room";
import authAtom from "../../atoms/auth.atom";

export default function VideoCalls() {
  const authState = useRecoilValue(authAtom);

  const {
    isLoading,
  } = useTwilioToken({
    identity: authState.user?.id ?? "",
    room_name: [
      `${authState.user?.id}_${authState.user?.fullName}` ?? "",
      `${authState.user?.id}_${authState.user?.fullName}_waiting` ?? "",
    ],
  });

  if (isLoading) {
    return (
      <Flex minHeight="100vh">
        <Overlay />
      </Flex>
    );
  }

  return (
    <Flex minHeight="100vh">
      <SideBar />
      <Room />
    </Flex>
  );
}
