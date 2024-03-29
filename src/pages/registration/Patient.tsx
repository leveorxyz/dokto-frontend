import {
  Box,
  Flex,
  Heading,
  Image,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { Navigate } from "react-router-dom";

import authAtom from "../../atoms/auth.atom";
import { SpacedContainer } from "../../components/common/Containers";
import PatientRegistration from "../../components/forms/patient-registration";
import PatientRegIMG from "../../static/reg/PatientReg.png";

export default function Provider() {
  const authState = useRecoilValue(authAtom);

  if (authState.isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      <Box bgColor="#F7F7FC" pt={12}>
        <Flex
          direction={["column", "column", "row", "row"]}
          justify={["center", "center", "space-between", "space-between"]}
          align="center"
          height="60vh"
          pl={[3, 3, "10%", "10%"]}
        >
          <Box maxWidth={["100%", "100%", "50%", "45%"]}>
            <Heading
              fontSize={["5xl", "5xl", "5xl", "7xl", "7xl"]}
              fontWeight={800}
              color="brand.dark"
            >
              Patient Registration
            </Heading>
          </Box>
          <Image src={PatientRegIMG} fill="contain" height="100%" />
        </Flex>
      </Box>

      <Box bg="rgba(61, 224, 251, 0.06)">
        <SpacedContainer py={12}>
          <PatientRegistration />
        </SpacedContainer>
      </Box>
    </>
  );
}
