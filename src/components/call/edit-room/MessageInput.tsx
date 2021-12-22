import { useEffect } from "react";
import {
  Box, Text, Flex, Textarea, Icon,
} from "@chakra-ui/react";
import { IoCloseSharp, IoCheckmarkSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import BrandButton from "../../common/buttons/BrandButton";
import WhiteButton from "../../common/buttons/WhiteButton";
import useCustomizeRoom from "../../../hooks/calls/useCustomizeRoom";

type PropTypes = {
  handleClose: ()=>void,
  setText: React.Dispatch<React.SetStateAction<string>>,
  clearMedia: ()=>void
}

const MessageInput = ({ handleClose, setText, clearMedia }:PropTypes) => {
  const {
    mutate,
    isLoading,
    isSuccess,
  } = useCustomizeRoom();
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm();

  type formDataType ={
    text: string|""
  }

  const text = watch("text");

  useEffect(() => {
    setText(text);
  }, [text, setText]);

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
      minHeight="243px"
      marginTop="15px"
      borderRadius="10px"
      border="1px solid #dddddd"
      padding="30px"
      paddingLeft="25px"
      paddingRight="25px"
    >
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Textarea
          placeholder="Type message here (max length is 500)..."
          {...register("text", { required: true, maxLength: 500 })}
          isInvalid={errors?.text}
        />
        <Flex justifyContent="flex-end" alignItems="center" marginTop="5">
          <Text marginRight="10" color="#9a9ab0" textColor="red">
            {errors.text && errors.text.type === "required" && (
            <span>This field is required</span>
            )}
            {errors.text && errors.text.type === "maxLength" && (
            <span>Max length exceeded</span>
            )}
          </Text>
          <Box marginRight="10">
            <WhiteButton onClick={() => {
              handleClose();
              clearMedia();
            }}
            >
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
