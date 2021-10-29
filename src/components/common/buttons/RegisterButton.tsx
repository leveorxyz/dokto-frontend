import React from "react";
import { Button, Box } from "@chakra-ui/react";

type PropTypes = {
  children: React.ReactNode;
  onClick?: () => void;
  bgColor?: string;
  color?: string;
  rounded?: string;
  width?: string;
};

export default function RegisterButton({
  children, ...rest
}: PropTypes) {
  return (
    <Button
      mt="7"
      fontSize="sm"
      p="6"
      _hover={{ opacity: ".85" }}
      _focus={{ outline: "none", opacity: ".85" }}
      {...rest}
    >
      <Box>{children}</Box>
    </Button>
  );
}

RegisterButton.defaultProps = {
  onClick: () => {},
  color: "white",
  bgColor: "brand.darkPink",
  rounded: "md",
  width: "max-content",
};
