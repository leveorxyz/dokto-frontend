import {
  useRef, useState,
} from "react";
import {
  Box, Icon, Input, Text,
} from "@chakra-ui/react";
import { IoAddSharp } from "react-icons/io5";
import ImagePreview from "./ImagePreview";
import useCustomizeRoom from "../../../hooks/calls/useCustomizeRoom";

type PropTypes = {
  handleClose: ()=>void
}

const FileInput = ({ handleClose }:PropTypes) => {
  const {
    mutate,
    isLoading,
    isSuccess,
  } = useCustomizeRoom();

  const [file, setFile] = useState(null);
  const ref:any = useRef<HTMLInputElement>();

  const handleUpload = () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("room_media", file);
    mutate(formData);
  };

  if (isSuccess) {
    handleClose();
  }

  return (
    <>
      {file ? (
        <ImagePreview
          handleClose={handleClose}
          handleUpload={handleUpload}
          file={file}
          loading={isLoading}
        />
      ) : (
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
        >
          <Box textAlign="center">
            <Icon as={IoAddSharp} fontSize="6rem" />
            <Input
              type="file"
              ref={ref}
              accept="image/*"
              onChange={() => {
                setFile(ref.current.files[0]);
                ref.current.value = "";
              }}
            />
            <Text color="#9A9AB0" fontSize="20px">Click to Add Files</Text>
          </Box>
        </Box>
      )}
    </>
  );
};

export default FileInput;
