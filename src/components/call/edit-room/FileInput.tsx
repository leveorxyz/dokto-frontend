import {
  useRef, useState,
} from "react";
import {
  Box, Icon, Input, Text, useToast,
} from "@chakra-ui/react";
import { IoAddSharp } from "react-icons/io5";
import ImagePreview from "./ImagePreview";
import useCustomizeRoom from "../../../hooks/calls/useCustomizeRoom";

type PropTypes = {
  handleClose: ()=>void,
  setMedia: React.Dispatch<any>,
  clearMedia: ()=>void
}

const FileInput = ({ handleClose, setMedia, clearMedia }:PropTypes) => {
  const {
    mutate,
    isLoading,
    isSuccess,
  } = useCustomizeRoom();
  const toast = useToast();
  const [file, setFile] = useState<any>(null);
  const ref:any = useRef<HTMLInputElement>();

  const handleFileChange = () => {
    const mediaFile = ref.current.files[0];
    const fileSizeMb = mediaFile.size / 1000000;

    if (fileSizeMb > 50) {
      toast({ title: "Error!", description: "File size must be lower than 50MB", status: "error" });
      return;
    }
    setFile(mediaFile);
    setMedia(mediaFile);
    ref.current.value = "";
  };

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
          clearMedia={clearMedia}
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
              accept="image/*,video/*"
              onChange={handleFileChange}
            />
            <Text color="#9A9AB0" fontSize="20px">Click to Add Files</Text>
          </Box>
        </Box>
      )}
    </>
  );
};

export default FileInput;
