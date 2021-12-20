import {
  Box, Text, Flex, Textarea, Icon,
} from "@chakra-ui/react";
import { IoCloseSharp, IoCheckmarkSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import BrandButton from "../../common/buttons/BrandButton";
import WhiteButton from "../../common/buttons/WhiteButton";
import useCustomizeRoom from "../../../hooks/calls/useCustomizeRoom";

type PropTypes = {
  handleClose: ()=>void
}

const MessageInput = ({ handleClose }:PropTypes) => {
  const {
    mutate,
    isLoading,
    isSuccess,
  } = useCustomizeRoom();
  const { register, handleSubmit } = useForm();

  type formDataType ={
    text: string|""
  }

  const handleFormSubmit = (data:formDataType) => {
    mutate(data);
  };
  if (isSuccess) {
    handleClose();
  }

  return (
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
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Textarea placeholder="Type message here..." rows={4} {...register("text")} />
        <Flex justifyContent="flex-end" alignItems="center" marginTop="5">
          <Text marginRight="10" color="#9a9ab0">Character limit is 500</Text>
          <Box marginRight="10">
            <WhiteButton onClick={handleClose}>
              <Icon as={IoCloseSharp} fontSize="20" />
            </WhiteButton>
          </Box>
          <Box>
            <BrandButton type="submit" isLoading={isLoading}>
              <Icon as={IoCheckmarkSharp} fontSize="20" />
            </BrandButton>
          </Box>
        </Flex>

      </form>
    </Box>
  );
};

export default MessageInput;
