import { useState } from "react";
import {
  Heading,
  Box,
} from "@chakra-ui/react";
import ReactQuill from "react-quill";
import { SpacedContainer } from "../../components/common/Containers";
import doctorProfileAtom from "../../atoms/doctorProfile";
import useProfile from "../../hooks/profile/useProfile";
import LoadingPage from "../../components/common/fallback/LoadingPage";
import "react-quill/dist/quill.snow.css";
import PatientEncountersLayout from "../../components/common/PatientEncountersLayout";

export default function PlanOfCare() {
  const { isLoading } = useProfile("doctor", doctorProfileAtom);
  const [value, setValue] = useState("");

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <PatientEncountersLayout>
      <SpacedContainer>
        <Box
          d="flex"
          flexDir="column"
          borderRadius="3xl"
          borderColor="brand.darkPink"
          boxShadow="0 10px 30px 0 rgb(205 204 219 / 25%)"
          pt="8"
          backgroundColor="#fff"
        >
          <Heading as="h2" fontSize="xl" fontWeight={500} color="primary.dark" mb="5" background="primary.light" p="2">Plan of Care</Heading>

          <Box p="4">
            <ReactQuill theme="snow" value={value} onChange={setValue} />
          </Box>

        </Box>
      </SpacedContainer>
    </PatientEncountersLayout>
  );
}
