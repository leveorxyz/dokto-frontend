import { useContext } from "react";
import {
  Flex, Box, Image,
} from "@chakra-ui/react";
import { AxiosInstance } from "axios";
import { useQuery } from "react-query";
import { AxiosContext } from "../../contexts/AxiosContext";
import BottomImage from "../../static/waiting_room_frame.png";
import DoctorImage from "../../static/doctor.jpeg";

type PropTypes = {
  callEnded: boolean;
  roomName: string;
}

const PatientLanding = ({ callEnded, roomName }:PropTypes) => {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  const { data } = useQuery(["profile", roomName],
    async () => (roomName ? axios?.get(`/dashboard/public/doctor/profile/${roomName}/`) : { data: {} }));

  const { data: roomData } = useQuery(["room-settings", roomName],
    async () => (roomName ? axios?.get(`/twilio/waiting-room/${roomName}`) : { data: {} }));

  const Greetings = () => {
    if (roomData?.data?.result?.text) {
      return <span>{roomData?.data?.result?.text}</span>;
    }
    return (
      <span>
        Welcome to Dr.
        {" "}
        <Box as="span" textTransform="capitalize">{roomName}</Box>
        &apos;s waiting  room. Your specialist will see you shortly.
      </span>
    );
  };

  return (
    <Flex w="100%" justifyContent="center">
      <Box paddingTop="4rem" textAlign="center">
        <Flex alignItems="center" paddingLeft="5rem" paddingRight="5rem">
          <Box width="160px" height="160px">
            <Image
              rounded="full"
              boxSize="160px"
              objectFit="cover"
              src={data?.data?.result?.profile_photo || DoctorImage}
              alt={roomName}
              boxShadow="0px 4px 5px 5px rgba(0, 0, 0, 0.09)"
            />
          </Box>
          <Box width="60%" fontSize="30px" color="black" fontWeight="600" marginLeft="20px">
            {callEnded ? (
              <span>
                This call has now ended.
                <br />
                Thank you.
              </span>
            ) : <Greetings />}
          </Box>
        </Flex>
      </Box>
      <Image src={roomData?.data?.room_media ? roomData?.data?.room_media : BottomImage} width="40%" position="absolute" bottom="0" />
    </Flex>
  );
};

export default PatientLanding;
