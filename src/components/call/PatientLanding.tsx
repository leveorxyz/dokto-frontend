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
    async () => axios?.get(`/dashboard/public/doctor/profile/${roomName}/`));

  return (
    <Flex w="100%" justifyContent="center" backgroundColor="white">
      <Box paddingTop="3rem" textAlign="center">
        <Flex alignItems="center" paddingLeft="5rem" paddingRight="5rem">
          <Image
            rounded="full"
            boxSize="160px"
            src={data?.data?.result?.identification_photo || DoctorImage}
            alt={roomName}
            boxShadow="0px 4px 5px 5px rgba(0, 0, 0, 0.09)"
            marginRight="30px"
          />
          <Box as="p" fontSize="30px" color="black" fontWeight="600">
            {callEnded ? "The call has been ended! " : `Welcome to Dr. ${roomName}'s waiting  room. Your specialist will see you shortly.`}
          </Box>
        </Flex>
      </Box>
      <Image src={BottomImage} width="40%" position="absolute" bottom="0" />
    </Flex>
  );
};

export default PatientLanding;
