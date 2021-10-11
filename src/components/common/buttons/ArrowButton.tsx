import React from "react";
import { Button, Box } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

type PropTypes = {
  children: React.ReactNode;
  onClick?: () => void;
  bgColor?: string;
  iconColor?: string;
  color?: string;
};

export default function ArrowButton({
  children, onClick, bgColor, iconColor, color,
}: PropTypes) {
  return (
    <Button
      mt="7"
      textTransform="uppercase"
      bg={bgColor}
      color={color}
      fontSize="md"
      p="6"
      onClick={onClick}
      _hover={{ opacity: ".85" }}
      _focus={{ outline: "none", opacity: ".85" }}
      rightIcon={<Box as={FaArrowRight} color={iconColor} size={20} />}
    >
      {children}
    </Button>
  );
}

ArrowButton.defaultProps = {
  onClick: () => {},
  color: "white",
  bgColor: "special-button-color",
  iconColor: "pink.400",
};
