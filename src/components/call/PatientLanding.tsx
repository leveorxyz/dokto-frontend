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
    <Flex w="100%" justifyContent="center">
      <Box paddingTop="4rem" textAlign="center">
        <Flex alignItems="center" paddingLeft="5rem" paddingRight="5rem">
          <Image
            rounded="full"
            boxSize="160px"
            objectFit="cover"
            src={data?.data?.result?.profile_photo || DoctorImage}
            alt={roomName}
            boxShadow="0px 4px 5px 5px rgba(0, 0, 0, 0.09)"
            marginRight="2rem"
          />
          <Box width="70%" fontSize="30px" color="black" fontWeight="600">
            {callEnded ? "The call has been ended!" : (
              <span>
                Welcome to Dr.
                {" "}
                <Box as="span" textTransform="capitalize">{roomName}</Box>
                &apos;s waiting  room. Your specialist will see you shortly.
              </span>
            )}
          </Box>
        </Flex>
      </Box>
      <Image src={BottomImage} width="40%" position="absolute" bottom="0" />
    </Flex>
  );
};

export default PatientLanding;
