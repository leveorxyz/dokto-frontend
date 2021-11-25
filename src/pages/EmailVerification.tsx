import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
} from "@chakra-ui/react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useRecoilValue } from "recoil";

import { SpacedContainer } from "../components/common/Containers";
import useURLQuery from "../hooks/common/useURLQuery";
import useVerifyEmail from "../hooks/emailVerification/useVerifyEmail";
import LoadingPage from "../components/common/fallback/LoadingPage";
import loginModalAtom from "../atoms/loginModal.atom";

export default function EmailVerification() {
  const urlQueries = useURLQuery();
  const loginModalState = useRecoilValue(loginModalAtom);

  const {
    isFetching, isError, isSuccess,
  } = useVerifyEmail({ token: urlQueries.get("token") ?? "" });

  if (isFetching) {
    return <LoadingPage />;
  }

  if (isError) {
    return (
      <SpacedContainer py={12}>
        <Alert
          status="error"
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
            Woops!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Sorry, something went wrong. Please try again or come back later.
          </AlertDescription>
        </Alert>
      </SpacedContainer>
    );
  }

  if (isSuccess) {
    return (
      <SpacedContainer py={12}>
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          minHeight="200px"
          rounded="lg"
        >
          <AlertIcon as={IoCheckmarkDoneCircle} boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="xl">
            Email Verified!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Thanks for signing up and verifying your email.
            You can login and access the dashboard now.

            <Button my={3} colorScheme="purple" onClick={() => loginModalState?.openLoginModal()}>Login</Button>
          </AlertDescription>
        </Alert>
      </SpacedContainer>

    );
  }

  return <></>;
}
