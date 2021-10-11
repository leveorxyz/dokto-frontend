import React from "react";
import { Button, Box } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

type PropTypes = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function ArrowButton({ children, onClick }: PropTypes) {
  return (
    <Button
      mt="7"
      textTransform="uppercase"
      bg="special-button-color"
      color="white"
      fontSize="md"
      p="6"
      onClick={onClick}
      _hover={{ opacity: ".85" }}
      _focus={{ outline: "none", opacity: ".85" }}
      rightIcon={<Box as={FaArrowRight} color="pink.400" size={20} />}
    >
      {children}
    </Button>
  );
}

ArrowButton.defaultProps = {
  onClick: () => {},
};
