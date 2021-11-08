import { useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import Overlay from "../../components/call/Overlay";

import useTwilioToken from "../../hooks/twilio/useTwilioToken";

import SideBar from "../../components/call/SideBar";
import Room from "../../components/call/Room";
import authAtom from "../../atoms/auth.atom";

export default function VideoCalls() {
  const {
    mutate: getAccessToken,
    // error,
    isLoading,
    // isIdle,
    // isSuccess,
    // isError,
  } = useTwilioToken();

  const data = useRecoilValue(authAtom);

  useEffect(() => {
    if (data.user) {
      getAccessToken({ room_name: "doktor", id: data.user.id });
    }
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
