import {
  Breadcrumb, BreadcrumbItem, Box, Icon,
} from "@chakra-ui/react";
import { FaUserMd } from "react-icons/fa";

type PropTypes ={
  doctor: string,
  isPatient: boolean
}
const RoomBreadcrumb = ({ doctor, isPatient }:PropTypes) => (
  <Breadcrumb position="fixed" left={isPatient ? "17rem" : "32rem"} top="3">
    <BreadcrumbItem>
      <Box textTransform="capitalize">
        <Icon as={FaUserMd} />
        {" "}
        {doctor}
      </Box>
    </BreadcrumbItem>

    <BreadcrumbItem>
      <Box>Telehealth Appointment</Box>
    </BreadcrumbItem>
  </Breadcrumb>
);

export default RoomBreadcrumb;
