import { Text, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const BacktoDashboard = () => (
  <Link to="/calls">
    <Text display="flex" alignItems="center" fontSize="18px" _hover={{ color: "#7002C7" }} fontWeight="500">
      <Icon as={IoArrowBackOutline} marginRight="5px" />
      Back to dashboard
    </Text>
  </Link>

);

export default BacktoDashboard;
