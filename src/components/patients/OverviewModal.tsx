import { useMemo } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Flex,
  Avatar,
  Icon,
  chakra,
} from "@chakra-ui/react";
import {
  IoCall, IoLocation, IoCalendar, IoInformationCircle,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import format from "date-fns/format";

import PatientStatus from "./Status";
import { EncounteredPatient } from "../../hooks/encounteredPatients/useEncounteredPatients";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  patient: EncounteredPatient | null;
};

export default function PatientOverViewModal({ isOpen, onClose, patient }: Props) {
  const modalData = useMemo(() => ([
    {
      title: "Last Appointment",
      icon: IoCalendar,
      value: format(new Date(patient?.date ?? ""), "MMM dd, yyyy"),
    },
    {
      title: "Reason of Visit",
      icon: IoInformationCircle,
      value: patient?.description,
    },
    {
      title: "Phone Number",
      icon: IoCall,
      value: patient?.phone_number,
    },
    {
      title: "Address",
      icon: IoLocation,
      value: patient?.address,
    },
  ]), [patient]);
  if (!patient) return <>{onClose()}</>;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />

      <ModalContent>
        <ModalHeader d="flex">
          <Box mr={3}>{patient?.name}</Box>
          <PatientStatus value={patient?.patient_status} />
        </ModalHeader>

        <ModalCloseButton />

        <ModalBody py={8}>
          <Flex wrap="wrap">
            <Flex basis="30%" direction="column">
              <Avatar name={patient?.name} boxSize="8rem" />
            </Flex>
            <Flex basis="70%" direction="column">
              {modalData.map(({ title, icon, value }) => (
                <Flex key={title} alignItems="center" my={2}>
                  <Icon as={icon} mr={2} fontSize="1.5rem" />
                  <chakra.span>
                    <b>{`${title}: `}</b>
                    {value}
                  </chakra.span>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr="auto" onClick={onClose}>
            Close
          </Button>
          <Button mr={2}>View Profile</Button>
          <Link to={`encounters?name=${patient.name}`}>
            <Button colorScheme="purple">View Encounters</Button>
          </Link>
        </ModalFooter>

      </ModalContent>
    </Modal>
  );
}
