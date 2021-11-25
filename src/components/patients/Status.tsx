import { useMemo } from "react";
import { Badge } from "@chakra-ui/react";

export default function PatientStatus({ value }: {value: string}) {
  const bgColor = useMemo(() => {
    switch (value) {
      case "New Patient":
        return "rgba(164, 43, 173, 0.1)";
      case "Recovered":
        return "rgba(143, 140, 255, 0.1)";
      case "In Treatment":
        return "rgba(255, 92, 0, 0.1)";
      default:
        return "gray.500";
    }
  }, [value]);

  const color = useMemo(() => {
    switch (value) {
      case "New Patient":
        return "rgba(164, 43, 173, 1)";
      case "Recovered":
        return "rgba(45, 40, 255, 1)";
      case "In Treatment":
        return "rgba(255, 92, 0, 1)";
      default:
        return "brand.dark";
    }
  }, [value]);

  return (
    <Badge
      bgColor={bgColor}
      color={color}
      variant="subtle"
      py={2}
      px={3}
      rounded="md"
    >
      {value}
    </Badge>
  );
}
