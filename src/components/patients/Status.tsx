import { Badge } from "@chakra-ui/react";

export default function PatientStatus({ value }: {value: string}) {
  return (
    <Badge
        // eslint-disable-next-line no-nested-ternary
      bgColor={value === "New Patient" ? "gray.100" : value === "Recovered" ? "rgba(143, 140, 255, 0.28)" : "rgba(255, 92, 0, 0.1)"}
        // eslint-disable-next-line no-nested-ternary
      color={value === "New Patient" ? "rgba(164, 43, 173, 1)" : value === "Recovered" ? "rgba(45, 40, 255, 1)" : "rgba(255, 92, 0, 1)"}
      variant="subtle"
      py={2}
      px={3}
      rounded="md"
    >
      {value}
    </Badge>
  );
}
