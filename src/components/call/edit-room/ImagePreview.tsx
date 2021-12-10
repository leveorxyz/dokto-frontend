import {
  Box, Text, Flex, Icon, Image,
} from "@chakra-ui/react";
import { IoCloseSharp, IoCheckmarkSharp } from "react-icons/io5";
import BrandButton from "../../common/buttons/BrandButton";
import WhiteButton from "../../common/buttons/WhiteButton";
import DoctorImage from "../../../static/doctor-preview.png";

type PropTypes = {
  handleClose: ()=>void
}

const ImagePreview = ({ handleClose }:PropTypes) => (
  <Box
    backgroundColor="#fff"
    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.07)"
    width="60%"
    height="320px"
    marginTop="15px"
    borderRadius="10px"
    border="1px solid #dddddd"
    padding="30px"
    paddingLeft="25px"
    paddingRight="25px"
  >
    <Text color="#9A9AB0">Preview</Text>
    <Flex justifyContent="center">
      <Image src={DoctorImage} width="20rem" />
    </Flex>
    <Flex justifyContent="space-around" alignItems="center" marginTop="5">
      <Text
        marginRight="10"
        color="red"
        fontSize="15px"
      >
        Ensure your image is 1440x1024 pixels for High Quality display

      </Text>
      <Flex alignItems="center">
        <Box marginRight="10">
          <WhiteButton onClick={handleClose}>
            <Icon as={IoCloseSharp} fontSize="#A42BAD" fontStyle="italic" />
          </WhiteButton>
        </Box>
        <Box>
          <BrandButton onClick={handleClose}>
            <Icon as={IoCheckmarkSharp} fontSize="20" />
          </BrandButton>
        </Box>
      </Flex>
    </Flex>
  </Box>
);

export default ImagePreview;