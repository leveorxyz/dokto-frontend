import {
  Breadcrumb, BreadcrumbItem, Box, Icon,
} from "@chakra-ui/react";
import { FaUserMd } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

type PropTypes ={
  doctor: string,
  isPatient: boolean,
  openChatWindow: () => void,
  showChat: boolean
}
const RoomBreadcrumb = ({
  doctor, isPatient, openChatWindow, showChat,
}:PropTypes) => (
  <>
    <Breadcrumb
      position="fixed"
      left={isPatient ? "17rem" : "32rem"}
      top="4.5rem"
      color="black"
      zIndex="10"
    >
      <BreadcrumbItem>
        <Box textTransform="capitalize">
          <Icon as={FaUserMd} />
          {doctor}
        </Box>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <Box>Telehealth Appointment</Box>
      </BreadcrumbItem>
    </Breadcrumb>

    {showChat && (
    <Box position="absolute" right="10" top="4.5rem" color="black" zIndex={10}>
      <Icon as={IoChatboxEllipsesOutline} fontSize="30" _hover={{ color: "purple" }} onClick={openChatWindow} />
    </Box>
    )}
  </>
);

export default RoomBreadcrumb;
