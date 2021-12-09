import { Box, Text, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const EditRoom = () => (
  <div>
    <Box w="100%" paddingLeft="5%" paddingTop="35px">
      <Link to="/calls">
        <Text display="flex" alignItems="center" fontSize="18px" color="#7002C7" fontWeight="500">
          <Icon as={IoArrowBackOutline} marginRight="5px" />
          Back to dashboard
        </Text>
      </Link>
    </Box>
  </div>
);

export default EditRoom;
