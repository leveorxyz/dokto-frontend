import {
  Heading,
  Box,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";
import { GoPrimitiveDot } from "react-icons/go";
import CustomAccordion from "../../../components/common/CustomAccordion";
import PatientEncountersLayout from "../../../components/common/PatientEncountersLayout";
import doctorProfileAtom from "../../../atoms/doctorProfile";
import useProfile from "../../../hooks/profile/useProfile";
import LoadingPage from "../../../components/common/fallback/LoadingPage";

export default function MedicalNotes() {
  const { isLoading } = useProfile("doctor", doctorProfileAtom);

  if (isLoading) {
    return <LoadingPage />;
  }

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
        <Heading as="h2" fontSize="xl" fontWeight={500} color="primary.dark" mb="5" background="primary.light" p="2" px="6">Medical Notes</Heading>
        <Box p="4" px="6">
          <CustomAccordion title="Review of Systems">
            <Box>body</Box>
          </CustomAccordion>
        </Box>
      </Box>
    </PatientEncountersLayout>

  );
}
