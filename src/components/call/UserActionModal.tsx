import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { IoPersonAdd, IoCloseCircleSharp } from "react-icons/io5";

import { RemoteParticipant } from "twilio-video";

type PropsType = {
  user: RemoteParticipant;
  isOpen: boolean;
  onClose: () => void;
  handleRemove: (participant: RemoteParticipant) => void;
  handleRemoveMoveToWaiting: (participant: RemoteParticipant) => void;
};

export default function UserActionModal({
  user, isOpen, onClose, handleRemove, handleRemoveMoveToWaiting,
}: PropsType) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="primary.dark" color="white">
        <ModalHeader
          borderBottomWidth={1}
          borderBottomColor="brand.pink"
          borderBottomStyle="solid"
        >
          End meeting with
          {" "}
          {user.identity.slice(37)}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Button
            variant="ghost"
            my={3}
            _hover={{ bg: "brand.pink", color: "white" }}
            leftIcon={<IoCloseCircleSharp />}
            isFullWidth
            onClick={() => handleRemove(user)}
          >
            Remove patient from video room
          </Button>

          <Button
            variant="ghost"
            my={3}
            _hover={{ bg: "brand.pink", color: "white" }}
            leftIcon={<IoPersonAdd />}
            isFullWidth
            onClick={() => handleRemoveMoveToWaiting(user)}
          >
            End call and move patient to waiting room.
          </Button>
          {/* <Button
            variant="ghost"
            color="brand.pink"
            my={3}
            leftIcon={<IoStopCircle />}
            _hover={{ bg: "brand.pink", color: "white" }}
            isFullWidth
          >
            End active call and start new one
          </Button> */}

        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
