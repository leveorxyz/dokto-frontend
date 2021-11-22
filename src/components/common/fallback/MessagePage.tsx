import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

import { SpacedContainer } from "../Containers";

type DefaultProps = {
  status: "error" | "info" | "warning" | "success";
  title: string;
  message: string;
};

export default function ErrorPage({ status, title, message }: DefaultProps) {
  return (
    <SpacedContainer py={12}>
      <Alert
        status={status}
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        minHeight="200px"
        rounded="lg"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="xl">
          {title}
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          {message}
        </AlertDescription>
      </Alert>
    </SpacedContainer>
  );
}
