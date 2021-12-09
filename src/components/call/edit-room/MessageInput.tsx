import {
  Box, Text, Flex, Textarea, Icon,
} from "@chakra-ui/react";
import { IoCloseSharp, IoCheckmarkSharp } from "react-icons/io5";
import BrandButton from "../../common/buttons/BrandButton";
import WhiteButton from "../../common/buttons/WhiteButton";

type PropTypes = {
  handleClose: ()=>void
}

const MessageInput = ({ handleClose }:PropTypes) => (
  <Box
    backgroundColor="#fff"
    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.07)"
    width="60%"
    height="243px"
    marginTop="15px"
    borderRadius="10px"
    border="1px solid #dddddd"
    padding="30px"
    paddingLeft="25px"
    paddingRight="25px"
  >
    <Textarea placeholder="Type message here..." rows={4} />
    <Flex justifyContent="flex-end" alignItems="center" marginTop="5">
      <Text marginRight="10" color="#9a9ab0">Character limit is 500</Text>
      <Box marginRight="10">
        <WhiteButton onClick={handleClose}>
          <Icon as={IoCloseSharp} fontSize="20" />
        </WhiteButton>
      </Box>
      <Box>
        <BrandButton onClick={handleClose}>
          <Icon as={IoCheckmarkSharp} fontSize="20" />
        </BrandButton>
      </Box>
    </Flex>
  </Box>
);

export default MessageInput;
