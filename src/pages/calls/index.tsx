import { Flex } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

import useTwilioToken from "../../hooks/twilio/useTwilioToken";

import SideBar from "../../components/call/SideBar";
import Room from "../../components/call/Room";
import authAtom from "../../atoms/auth.atom";
import LoadingPage from "../../components/common/fallback/LoadingPage";

export default function VideoCalls() {
  const authState = useRecoilValue(authAtom);

  const {
    isLoading,
  } = useTwilioToken({
    identity: `${authState.user?.id}_${authState.user?.fullName}`,
    // roomName: `${authState.user?.id}_${authState.user?.fullName}` ?? "",
    roomName: "doctor",
  });

  if (isLoading) {
    return (
      <Flex minHeight="100vh">
        <LoadingPage />
      </Flex>
    );
  }

  return (
    <Flex minHeight="100vh" w="100%">
      <SideBar />
      <Room />
    </Flex>
  );
}
