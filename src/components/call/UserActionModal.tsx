import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { IoPersonAdd, IoPause, IoStopCircle } from "react-icons/io5";

import { RemoteParticipant } from "twilio-video";

type PropsType = {
  user: RemoteParticipant;
  isOpen: boolean;
  onClose: () => void;
};

export default function UserActionModal({ user, isOpen, onClose }: PropsType) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="primary.dark" color="white">
        <ModalHeader
          borderBottomWidth={1}
          borderBottomColor="brand.pink"
          borderBottomStyle="solid"
        >
          Start meeting with
          {user.identity}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Button
            variant="ghost"
            my={3}
            _hover={{ bg: "brand.pink", color: "white" }}
            leftIcon={<IoPersonAdd />}
            isFullWidth
          >
            Add patient to active call
          </Button>
          <Button
            variant="ghost"
            my={3}
            _hover={{ bg: "brand.pink", color: "white" }}
            leftIcon={<IoPause />}
            isFullWidth
          >
            Pause active call and start new one
          </Button>
          <Button
            variant="ghost"
            color="brand.pink"
            my={3}
            leftIcon={<IoStopCircle />}
            _hover={{ bg: "brand.pink", color: "white" }}
            isFullWidth
          >
            End active call and start new one
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
