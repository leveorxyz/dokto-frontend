import React from "react";

import { Box } from "@chakra-ui/react";

enum MarginOrPaddingKeyEnum {
   m,
   mt,
   mr,
   mb,
   ml,
   mx,
   my,
   p,
   pt,
   pr,
   pb,
   pl,
   px,
   py,
}

type MarginAndPaddingTypes = {
   [Key in keyof typeof MarginOrPaddingKeyEnum]?:
      number |
      string |
      (number | string)[] |
      Record<string, string | number>;
}

type PropTypes = {
   children: React.ReactNode;
   bg?: string;
} & MarginAndPaddingTypes;

export function FullWidthContainer({ children, ...props }: PropTypes) {
  return (
    <Box {...props}>
      {children}
    </Box>
  );
}

export function SpacedContainer({ children, ...props }: PropTypes) {
  return (
    <Box mx={[3, 3, "10%", "10%"]} {...props}>
      {children}
    </Box>
  );
}

FullWidthContainer.defaultProps = {
  bg: "",
};

SpacedContainer.defaultProps = {
  bg: "",
};
