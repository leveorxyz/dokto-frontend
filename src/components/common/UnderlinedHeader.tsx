import { Flex, Heading, Divider } from "@chakra-ui/react";

type UnderlinedHeaderProps = {
  title: string;
  titleColor?: string;
  underlineColor: string;
  underlineWidth?: string | number;
  alignment?: "flex-start" | "center" | "flex-end";
};

export default function UnderlinedHeader({
  title, titleColor, underlineColor, underlineWidth, alignment,
}: UnderlinedHeaderProps) {
  return (
    <Flex direction="column" alignItems={alignment}>
      <Heading as="h2" fontWeight="600" fontSize="2xl" letterSpacing={3} textTransform="uppercase" color={titleColor}>{title}</Heading>
      <Divider
        w={underlineWidth}
        mt={2}
        sx={{
          borderColor: underlineColor,
          borderBottomWidth: 3,
        }}
      />
    </Flex>
  );
}

UnderlinedHeader.defaultProps = {
  titleColor: "#333",
  underlineWidth: 20,
  alignment: "center",
};
