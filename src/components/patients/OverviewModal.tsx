import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { Patient } from "../../atoms/ehr/patients";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  patient: Patient | null;
};

export default function PatientOverViewModal({ isOpen, onClose, patient }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{patient?.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody />

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">View Profile</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
