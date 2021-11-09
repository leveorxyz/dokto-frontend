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
    id: authState.user?.id ?? "",
    room_name: "doktor",
  });

  return (
    <Flex minHeight="100vh">
      {isLoading ? <Overlay /> : (
        <>
          <SideBar />
          <Room />
        </>
      )}
    </Flex>
  );
}
