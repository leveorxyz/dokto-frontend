import {
  Heading,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { AiOutlineReload, AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { FiCopy } from "react-icons/fi";
import { useParams } from "react-router-dom";
import useMedicalNotesAdd, { IMedicalNotes } from "../../../../hooks/medicalNotes.tsx/useMedicalNotesAdd";
import { reviewOfSystems, physicalExam } from "../../../../data/MedicalNotes";
import CustomAccordion from "../../../../components/common/CustomAccordion";
import PatientEncountersLayout from "../../../../components/common/PatientEncountersLayout";
import LoadingPage from "../../../../components/common/fallback/LoadingPage";
import CustomCheckboxField from "./CustomCheckbox";
import TextFormatter from "./TextFormatter";

export default function MedicalNotes() {
  const { id } = useParams();
  const {
    register, handleSubmit, setValue, formState: { isSubmitting, errors },
  } = useForm(
    { mode: "onBlur" },
  );

  const {
    mutate: medicalNotes,

  } = useMedicalNotesAdd();

  if (isSubmitting) {
    return <LoadingPage />;
  }

  const onSubmit = (data:any) => {
    const dataWithId:IMedicalNotes = { ...data, ...{ patient_encounter: id } };
    medicalNotes(dataWithId);
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <CustomAccordion title="Review of Systems">
              <Box>
                {reviewOfSystems.map((medicalNote) => (
                  <Box key={medicalNote.title}>
                    <Flex>
                      <FormLabel htmlFor={medicalNote.title} color="primary.dark" w="10%" minW="160px">{medicalNote.title}</FormLabel>
                      <Box>
                        <CustomCheckboxField
                          name={medicalNote.title}
                          options={medicalNote.checkBoxes}
                          errors={errors}
                          direction="row"
                          setValue={setValue}
                        />
                      </Box>
                    </Flex>
                    <FormControl
                      key={medicalNote.title}
                      isInvalid={!!errors.medicalNote?.input}
                      mb={6}
                    >
                      <Input
                        type="text"
                        {...register(medicalNote.input)}
                      />

                    </FormControl>
                  </Box>
                ))}
              </Box>
            </CustomAccordion>

            <CustomAccordion title="Physical Exam">
              <Box>
                {physicalExam.map((medicalNote) => (
                  <Box key={medicalNote.title}>
                    <Flex>
                      <FormLabel htmlFor={medicalNote.title} color="primary.dark" w="10%" minW="160px">{medicalNote.title}</FormLabel>
                      <Box>
                        <CustomCheckboxField
                          name={medicalNote.title}
                          options={medicalNote.checkBoxes}
                          errors={errors}
                          direction="row"
                          setValue={setValue}
                        />
                      </Box>
                    </Flex>
                    <FormControl
                      key={medicalNote.title}
                      isInvalid={!!errors.medicalNote?.input}
                      mb={6}
                    >
                      <Input
                        type="text"
                        {...register(medicalNote.input)}
                      />

                    </FormControl>
                  </Box>
                ))}
              </Box>
            </CustomAccordion>

            <CustomAccordion title="Plan of Care">
              <Box><TextFormatter /></Box>
            </CustomAccordion>

            <CustomAccordion title="Orders">
              <Box><TextFormatter /></Box>
            </CustomAccordion>

            <CustomAccordion title="Imaging Orders">
              <Box><TextFormatter /></Box>
            </CustomAccordion>

            <CustomAccordion title="Next Visit">
              <Box><TextFormatter /></Box>
            </CustomAccordion>

            <Box display="flex" justifyContent="end" mt={4}>

              <Flex justifyContent="end" mt={8} p={4} experimental_spaceX={4}>
                <Button background="#7002C7" color="#fff" _hover={{ background: "#7002C7" }} leftIcon={<AiOutlineReload />}>Clear</Button>
                <Button background="#3DE0FF" color="#fff" _hover={{ background: "#3DE0FF" }} leftIcon={<AiOutlineClose />}>Cancel</Button>
                <Button background="#006A82" color="#fff" _hover={{ background: "#006A82" }} leftIcon={<FiCopy />}>Copy From Previous Encounter</Button>
                <Button type="submit" background="#A42BAD" color="#fff" _hover={{ background: "#A42BAD" }} leftIcon={<AiOutlineCheck />} disabled={isSubmitting}>Save</Button>
              </Flex>

            </Box>
          </form>

        </Box>
      </Box>
    </PatientEncountersLayout>

  );
}
