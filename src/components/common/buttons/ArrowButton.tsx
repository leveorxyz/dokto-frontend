import React from "react";
import { Button, Box } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

type PropTypes = {
  children: React.ReactNode;
  onClick?: () => void;
  bgColor?: string;
  iconColor?: string;
  color?: string;
  rounded?: string;
  width?: string;
};

export default function ArrowButton({
  children, iconColor, ...rest
}: PropTypes) {
  return (
    <Button
      mt="7"
      textTransform="uppercase"
      fontSize="md"
      p="6"
      display="flex"
      justifyContent="space-between"
      _hover={{ opacity: ".85" }}
      _focus={{ outline: "none", opacity: ".85" }}
      {...rest}
    >
      <Box>{children}</Box>
      <Box>
        <Box as={FaArrowRight} color={iconColor} size={20} />
      </Box>
    </Button>
  );
}

ArrowButton.defaultProps = {
  onClick: () => {},
  color: "white",
  bgColor: "brand.dark",
  iconColor: "#FF00FF",
  rounded: "md",
  width: "max-content",
};
