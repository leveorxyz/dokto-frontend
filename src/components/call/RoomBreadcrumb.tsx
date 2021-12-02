import {
  Breadcrumb, BreadcrumbItem, Box, Icon, Flex,
} from "@chakra-ui/react";
import { FaUserMd } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

type PropTypes ={
  doctor: string,
  isPatient: boolean
}
const RoomBreadcrumb = ({ doctor, isPatient }:PropTypes) => (
  <Flex
    justifyContent="space-between"
    top={0}
    right={0}
    m={2}
    p={2}
    width="98%"
    rounded="lg"
    bgColor="gray.700"
    color="gray.100"
  >
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
    <Box>
      <Icon as={IoChatboxEllipsesOutline} fontSize="30" _hover={{ color: "purple" }} />
    </Box>
  </Flex>
);

export default RoomBreadcrumb;
