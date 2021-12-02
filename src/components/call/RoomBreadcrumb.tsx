import {
  Breadcrumb, BreadcrumbItem, Box, Icon,
} from "@chakra-ui/react";
import { FaUserMd } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

type PropTypes ={
  doctor: string,
  isPatient: boolean
}
const RoomBreadcrumb = ({ doctor, isPatient }:PropTypes) => (
  <>
    <Breadcrumb position="fixed" left={isPatient ? "17rem" : "32rem"} top="3">
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
    <Box position="fixed" right="10" top="3">
      <Icon as={IoChatboxEllipsesOutline} fontSize="30" _hover={{ color: "purple" }} />
    </Box>
  </>
);

export default RoomBreadcrumb;
