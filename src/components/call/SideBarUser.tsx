import { useContext } from "react";
import { useRecoilValue } from "recoil";
import {
  Flex, Box, Avatar, IconButton, useDisclosure,
} from "@chakra-ui/react";
import { IoEllipsisVertical } from "react-icons/io5";
import { RemoteParticipant } from "twilio-video";
import { AxiosInstance } from "axios";
import { AxiosContext } from "../../contexts/AxiosContext";
import { twilioTokenAtom } from "./atoms";

import UserActionModal from "./UserActionModal";

type UserComponentProps = {
  user: RemoteParticipant;

}

export default function UserComponent({ user }: UserComponentProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  const { roomName } = useRecoilValue(twilioTokenAtom);
  const fullName = user.identity.slice(37);

  // Remove participant from video room handler
  const handleRemove = (participant:RemoteParticipant) => {
    axios?.post("twilio/remove-participant-video/", { room_name: roomName, participant_sid: participant.sid })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  // Remove participant from video room and move to waiting room handler
  const handleRemoveMoveToWaiting = (participant:RemoteParticipant) => {
    handleRemove(participant);
    const participantIdentity = participant.identity.slice(0, 36);

    const payload = {
      patient_id: participantIdentity,
    };

    axios?.post("twilio/create-conversation/", payload)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Flex
      wrap="nowrap"
      alignItems="center"
      cursor="pointer"
      my={3}
      sx={{
        "#call-button": {
          display: "none",
        },
        _hover: {
          "#call-button": {
            display: "flex",
          },
        },
      }}
    >
      <Avatar name={fullName} />
      <Flex direction="column" mx={3}>
        <Box color="white" mx={3} textTransform="capitalize">{fullName}</Box>

      </Flex>
      <IconButton
        aria-label={`User actions for ${fullName}`}
        icon={<Box as={IoEllipsisVertical} color="brand.light" />}
        variant="ghost"
        onClick={onOpen}
        _hover={{ bg: "brand.light" }}
        _active={{ bg: "brand.pink" }}

      />
      <UserActionModal
        user={user}
        isOpen={isOpen}
        onClose={onClose}
        handleRemove={handleRemove}
        handleRemoveMoveToWaiting={handleRemoveMoveToWaiting}
      />
    </Flex>
  );
}
