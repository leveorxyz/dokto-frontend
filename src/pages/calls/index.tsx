import { Flex } from "@chakra-ui/react";
// import { useLocation } from "react-router-dom";
import Overlay from "../../components/call/Overlay";

// import SideBar from "../../components/call/SideBar";

export default function VideoCalls() {
  // const { search } = useLocation();

  return (
    <Flex minHeight="100vh">
      {/* <SideBar /> */}

      <Overlay />

      <p>Preparing video conference....</p>
    </Flex>
  );
}
