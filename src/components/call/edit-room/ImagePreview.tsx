import { useMemo } from "react";
import {
  Box, Text, Flex, Icon,
} from "@chakra-ui/react";
import { IoCloseSharp, IoCheckmarkSharp } from "react-icons/io5";
import BrandButton from "../../common/buttons/BrandButton";
import WhiteButton from "../../common/buttons/WhiteButton";

type PropTypes = {
  handleClose: ()=>void,
  handleUpload: ()=>void,
  file: File,
  loading: boolean,
  clearMedia: ()=>void
}

const ImagePreview = ({
  handleClose, handleUpload, file, loading, clearMedia,
}:PropTypes) => {
  const fileType = useMemo(() => file?.type?.split("/")[0], [file]);

  return (
    <Box
      backgroundColor="#fff"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.07)"
      width="60%"
      minHeight="180px"
      marginTop="15px"
      borderRadius="10px"
      border="1px solid #dddddd"
      padding="30px"
      paddingLeft="25px"
      paddingRight="25px"
    >
      <Text color="#9A9AB0">Room Media</Text>
      <Flex justifyContent="space-around" alignItems="center" marginTop="5">
        <Text
          marginRight="10"
          color="red"
          fontSize="15px"
        >
          {fileType === "image"
            ? "Ensure your image is minimum 1280*720 pixels for High Quality display"
            : "Ensure your video size is maximum 50mb"}

        </Text>
        <Flex alignItems="center">
          <Box marginRight="10">
            <WhiteButton onClick={() => {
              handleClose();
              clearMedia();
            }}
            >
              <Icon as={IoCloseSharp} fontSize="#A42BAD" fontStyle="italic" />
            </WhiteButton>
          </Box>
          <Box>
            <BrandButton onClick={handleUpload} isLoading={loading}>
              <Icon as={IoCheckmarkSharp} fontSize="20" />
            </BrandButton>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ImagePreview;
