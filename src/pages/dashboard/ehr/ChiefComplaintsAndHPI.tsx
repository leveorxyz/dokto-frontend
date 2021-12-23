import {
  Heading,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import ReactQuill from "react-quill";
import PatientEncountersLayout from "../../../components/common/PatientEncountersLayout";
import ChiefComplaintsAndHPIForm from "../../../components/forms/chief-complaints-and-HPI";
import "react-quill/dist/quill.snow.css";

export default function ChiefComplaintsAndHPI() {
  const [value, setValue] = useState("");
  return (
    <PatientEncountersLayout>
      <Box
        d="flex"
        flexDir="column"
        borderRadius="md"
        borderColor="brand.darkPink"
        boxShadow="0 10px 30px 0 rgb(205 204 219 / 25%)"
        pt="8"
        backgroundColor="#fff"
      >
        <Heading as="h2" fontSize="xl" fontWeight={500} color="primary.dark" mb="5" background="primary.light" p="2" px="6">Chief Complaints and HPI(History Of Present Illness)</Heading>
        <Box p="4" px="6">
          <ChiefComplaintsAndHPIForm />
          {/* TODO  ADD RICH TEXT EDITOR */}
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </Box>
      </Box>
    </PatientEncountersLayout>
  );
}
