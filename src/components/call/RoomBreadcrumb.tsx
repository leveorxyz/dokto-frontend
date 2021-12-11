import {
  Breadcrumb, BreadcrumbItem, Box, Icon,
} from "@chakra-ui/react";
import { FaUserMd } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

type PropTypes ={
  doctor: string,
  isPatient: boolean,
  openChatWindow: () => void,
}
const RoomBreadcrumb = ({
  doctor, isPatient, openChatWindow,
}:PropTypes) => (
  <>
    <Breadcrumb
      position="absolute"
      left={isPatient ? "17rem" : "32rem"}
      top="4.5rem"
      color="black"
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

    <Box position="absolute" right="10" top="4.5rem" color="black">
      <Icon as={IoChatboxEllipsesOutline} fontSize="30" _hover={{ color: "purple" }} onClick={openChatWindow} />
    </Box>
  </>
);

export default RoomBreadcrumb;
