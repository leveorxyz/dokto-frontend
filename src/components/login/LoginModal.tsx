import { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import useLogin from "../../hooks/login/useLogin";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

type LoginFormData = {
  email: string;
  password: string;
};

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
  const {
    mutate: login,
    error,
    isLoading,
    isIdle,
    isSuccess,
    isError,
  } = useLogin();

  useEffect(() => {
    if (isSuccess && !isIdle) {
      onClose();
    }
  }, [isSuccess, isIdle, onClose]);

  const onSubmit = ({ email, password }: LoginFormData) => {
    login({ email, password });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

            <FormControl isInvalid={!!errors.email}>
              <FormLabel htmlFor="email" color="primary.dark">Email</FormLabel>
              <Input
                {...register("email", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                    message: "invalid email address",
                  },
                })}
                name="email"
                placeholder="Email"
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.password} my={6}>
              <FormLabel htmlFor="password" color="primary.dark">Password</FormLabel>
              <Input
                type="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
                name="password"
                placeholder="Password"
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>

            {isError && (
              <Alert status="error" rounded="md">
                <AlertIcon />
                <AlertTitle mr={2}>Error!</AlertTitle>
                <AlertDescription>{(error as any)?.message}</AlertDescription>
              </Alert>
            )}
          </ModalBody>

          <ModalFooter display="flex" justifyContent="space-between">
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              bg="brand.darkPink"
              color="white"
              _hover={{ opacity: 0.85 }}
              _focus={{ opacity: 0.85 }}
              isLoading={isLoading}
            >
              Login
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
