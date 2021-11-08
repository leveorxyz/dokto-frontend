import { useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { v4 } from "uuid";
// import { useLocation } from "react-router-dom";
import Overlay from "../../components/call/Overlay";

import useTwilioToken from "../../hooks/twilio/useTwilioToken";
import { twilioTokenAtom } from "../../components/call/atoms";

import SideBar from "../../components/call/SideBar";

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

  const token = useRecoilValue(twilioTokenAtom);

  console.log(token);

  return (
    <Flex minHeight="100vh">
      <SideBar />

      {isLoading && <Overlay />}

    </Flex>
  );
}
