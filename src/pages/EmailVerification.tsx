import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useRecoilState } from "recoil";
import LoginModal from "../components/login/LoginModal";
import { SpacedContainer } from "../components/common/Containers";
import useURLQuery from "../hooks/common/useURLQuery";
import useVerifyEmail from "../hooks/emailVerification/useVerifyEmail";
import LoadingPage from "../components/common/fallback/LoadingPage";
import loginModalAtom from "../atoms/loginModal.atom";

export default function EmailVerification() {
  const urlQueries = useURLQuery();

  const [modalState, setModalState] = useRecoilState(loginModalAtom);
  const closeModal = () => setModalState(false);

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
        {/* <LoginModal isOpen={modalState} onClose={closeModal} /> */}

      </SpacedContainer>
    );
  }

  if (isSuccess) {
    // ! IF I CALL setModalState FROM HERE IT DOES NOT GET CLOSED
    // setModalState(true);
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
          </AlertDescription>
        </Alert>
        <LoginModal isOpen={modalState} onClose={closeModal} />

      </SpacedContainer>

    );
  }

  return <></>;
}
