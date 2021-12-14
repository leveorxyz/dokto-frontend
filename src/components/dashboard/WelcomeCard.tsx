import {
  Box, Text, chakra, Heading, Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

import authAtom from "../../atoms/auth.atom";

type Props = {
  description: string;
  readMoreLink: string;
  img: string | null;
};

export default function WelcomeCard({
  description,
  readMoreLink,
  img,
}: Props) {
  const authState = useRecoilValue(authAtom);

  return (
    <Box
      w="100%"
      bg="white"
      p={6}
      pt={32}
      pb={12}
      mx={7}
      position="relative"
      rounded="lg"
      boxShadow="0 10px 30px 0 rgb(205 204 219 / 25%)"
    >
      <Heading as="h2" fontSize="2xl" fontWeight={600}>
        Hello,
        {" "}
        <chakra.span color="brand.darkPink">
          {authState.user?.userType === "DOCTOR" && "Doctor "}
          {authState.user?.fullName}
        </chakra.span>
      </Heading>

      <Text color="#9A9AB0" py={4}>
        {description}
      </Text>

      <Box width="5rem">
        <Link to={readMoreLink}>
          <Text fontWeight="semibold" color="#2E3192" width="max-content">
            Read More
            {" >"}
          </Text>
        </Link>
      </Box>
      {img && (
      <Box position="absolute" bottom={0} right={0} height="125%">
        <Image src={img} height="100%" width="auto" fit="contain" />
      </Box>
      )}
    </Box>
  );
}
