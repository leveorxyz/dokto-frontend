import {
  Flex, Box, Image,
} from "@chakra-ui/react";
import { useContext, useMemo } from "react";
import { useRecoilValue } from "recoil";
import { AxiosInstance } from "axios";
import { useQuery } from "react-query";
import { AxiosContext } from "../../../contexts/AxiosContext";
import BottomImage from "../../../static/waiting_room_frame.png";
import DoctorImage from "../../../static/doctor.jpeg";
import authAtom from "../../../atoms/auth.atom";

const RoomPreview = () => {
  const axios = useContext<AxiosInstance | null>(AxiosContext);

  const authState = useRecoilValue(authAtom);
  const userName = authState?.user?.username;

  const { data } = useQuery(["profile", userName],
    async () => (userName ? axios?.get(`/dashboard/public/doctor/profile/${userName}/`) : { data: {} }));

  const { data: roomData } = useQuery(["room-settings", userName],
    async () => (userName ? axios?.get(`/twilio/waiting-room/${userName}`) : { data: {} }));

  const isVideo = useMemo(() => roomData?.data?.result?.room_media
  && roomData?.data?.result?.room_media_mime_type?.split("/")[0] === "video", [roomData]);

  const Greetings = () => {
    if (roomData?.data?.result?.text) {
      return <span>{roomData?.data?.result?.text}</span>;
    }
    return (
      <span>
        Welcome to Dr.
        {" "}
        <Box as="span" textTransform="capitalize">{userName}</Box>
        &apos;s waiting  room. Your specialist will see you shortly.
      </span>
    );
  };

  return (
    <Box
      backgroundColor="#fff"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.07)"
      width="60%"
      height="600px"
      marginTop="15px"
      borderRadius="10px"
      border="1px solid #dddddd"
      padding="40px"
      paddingLeft="25px"
      paddingRight="25px"
    >
      <h2>Waiting Room Preview</h2>
      <Flex w="100%" justifyContent="center">
        {isVideo
        && (
        <Box
          as="video"
          minWidth="100%"
          minHeight="100%"
          objectFit="cover"
          src={roomData?.data?.result?.room_media}
          autoPlay
          loop
          muted
        />
        )}
        <Box paddingTop="4rem" textAlign="center">
          {!isVideo && (
          <Flex alignItems="center" paddingLeft="5rem" paddingRight="5rem">
            <Box width="100px" height="100px">
              <Image
                rounded="full"
                boxSize="100px"
                objectFit="cover"
                src={data?.data?.result?.profile_photo || DoctorImage}
                alt={userName}
                boxShadow="0px 4px 5px 5px rgba(0, 0, 0, 0.09)"
              />
            </Box>
            <Box width="60%" fontSize="18px" color="black" fontWeight="600" marginLeft="20px">
              <Greetings />
            </Box>
          </Flex>
          )}
        </Box>
        {!isVideo && <Image src={roomData?.data?.result?.room_media ? roomData?.data?.result?.room_media : BottomImage} width="30%" position="absolute" bottom="10" />}
      </Flex>
    </Box>
  );
};

export default RoomPreview;
