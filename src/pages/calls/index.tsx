import { useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { v4 } from "uuid";
// import { useLocation } from "react-router-dom";
import Overlay from "../../components/call/Overlay";

import useTwilioToken from "../../hooks/twilio/useTwilioToken";

import SideBar from "../../components/call/SideBar";
import Room from "../../components/call/Room";

export default function VideoCalls() {
  const {
    mutate: getAccessToken,
    // error,
    isLoading,
    // isIdle,
    // isSuccess,
    // isError,
  } = useTwilioToken();

  useEffect(() => {
    getAccessToken({ room_name: "test", id: v4() });
    // eslint-disable-next-line
  }, []);

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
