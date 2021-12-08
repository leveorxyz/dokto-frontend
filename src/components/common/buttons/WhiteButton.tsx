import React from "react";
import { Button, Box } from "@chakra-ui/react";

type PropTypes = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  bgColor?: string;
  border?: string;
  borderColor?: string;
  ml?: string;
  color?: string;
  w?: string;
  rounded?: string;
  width?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
};

export default function RegisterButton({
  children, ...rest
}: PropTypes) {
  return (
    <Button
      fontSize="sm"
      minH={50}
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
  border: "2px",
  color: "brand.dark",
  borderColor: "brand.dark",
  bgColor: "white",
  rounded: "xl",
  ml: "0px",
  w: "min-content",
  width: "max-content",
  type: "button",
  isLoading: false,
  isDisabled: false,
};
