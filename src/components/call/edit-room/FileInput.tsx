import {
  useContext, useRef, useState,
} from "react";
import { AxiosInstance } from "axios";
import { useMutation } from "react-query";
import {
  Box, Icon, Input, Text, useToast,
} from "@chakra-ui/react";
import { IoAddSharp } from "react-icons/io5";
import { AxiosContext } from "../../../contexts/AxiosContext";
import ImagePreview from "./ImagePreview";

type PropTypes = {
  handleClose: ()=>void
}

const FileInput = ({ handleClose }:PropTypes) => {
  const toast = useToast();
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  const updateRoomImage = async (data: any) => axios?.patch("/twilio/waiting-room/", data)
    .then(({ data: { result } }) => Promise.resolve(result))
    .catch(({ response: { data: response } }) => Promise.reject(response));

  const mutation = useMutation(updateRoomImage, {
    mutationKey: "update-room-image",
    retry: false,
    onSuccess: () => {
      toast({ title: "Success!", description: "Image updated successfully!", status: "success" });
      handleClose();
    },
    onError: (error) => {
      toast({ title: "Error!", description: JSON.stringify(error), status: "error" });
      handleClose();
    },
  });

  const [file, setFile] = useState(null);
  const ref:any = useRef<HTMLInputElement>();

  const handleUpload = () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("room_media", file);
    mutation.mutate(formData);
  };

  return (
    <>
      {file ? (
        <ImagePreview
          handleClose={handleClose}
          handleUpload={handleUpload}
          file={file}
          loading={mutation.isLoading}
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
