import { Box, Icon, Text } from "@chakra-ui/react";
import { IoAddSharp } from "react-icons/io5";

type PropTypes = {
  handleAdd: ()=>void
}

const FileInput = ({ handleAdd }:PropTypes) => (
  <Box
    border="2px dashed #170041"
    width="60%"
    height="243px"
    marginTop="15px"
    borderRadius="10px"
    padding="30px"
    paddingLeft="25px"
    paddingRight="25px"
    cursor="pointer"
    _hover={{
      backgroundColor: "#170041",
      color: "white",
    }}
    onClick={handleAdd}
  >
    <Box textAlign="center">
      <Icon as={IoAddSharp} fontSize="6rem" />
      <Text color="#9A9AB0" fontSize="20px">Click to Add Files</Text>
    </Box>
  </Box>
);

export default FileInput;
