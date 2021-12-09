import { useMemo } from "react";
import { Badge, Box, Flex } from "@chakra-ui/react";

export default function PatientStatus({ value }: {value: string}) {
  const bgColor = useMemo(() => {
    switch (value) {
      case "new patient":
        return "#fff";
      case "recovering":
        return "rgba(143, 140, 255, 0.1)";
      case "In Treatment":
        return "rgba(255, 92, 0, 0.1)";
      default:
        return "#fff";
    }
  }, [value]);

  const borderColor = useMemo(() => {
    switch (value) {
      case "new patient":
        return "rgba(164, 43, 173, 0.1)";
      case "recovering":
        return "rgba(143, 140, 255, 0.1)";
      case "In Treatment":
        return "rgba(255, 92, 0, 0.1)";
      default:
        return "gray.200";
    }
  }, [value]);

  const color = useMemo(() => {
    switch (value) {
      case "new patient":
        return "rgba(164, 43, 173, 1)";
      case "recovering":
        return "rgba(45, 40, 255, 1)";
      case "In Treatment":
        return "rgba(255, 92, 0, 1)";
      default:
        return "brand.dark";
    }
  }, [value]);

  return (
    <Badge
      border="1px solid"
      borderColor={borderColor}
      bgColor={bgColor}
      color={color}
      variant="subtle"
      py={2}
      px={3}
      rounded="sm"
    >
      <Flex alignItems="center">
        <Box h="2" w="2" mr="2" rounded="full" backgroundColor={color} />
        {value}
      </Flex>
    </Badge>
  );
}
