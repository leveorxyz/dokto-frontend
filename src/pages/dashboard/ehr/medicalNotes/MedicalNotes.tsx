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
import { medNotes } from "../../../../data/MedicalNotes";
import CustomAccordion from "../../../../components/common/CustomAccordion";
import PatientEncountersLayout from "../../../../components/common/PatientEncountersLayout";
import LoadingPage from "../../../../components/common/fallback/LoadingPage";
import CustomCheckboxField from "./CustomCheckbox";

export default function MedicalNotes() {
  const {
    register, handleSubmit, setValue, formState: { isSubmitting, errors },
  } = useForm(
    { mode: "onBlur" },
  );

  if (isSubmitting) {
    return <LoadingPage />;
  }

  const onSubmit = (data:any) => {
    console.log(31);
    console.log(data);
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
                {medNotes.map((medicalNote) => (
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

            <Box display="flex" justifyContent="end" mt={4}>

              <Button
                type="submit"
                bg="brand.darkPink"
                color="white"
                mr="2"
                _hover={{ opacity: 0.85 }}
                _focus={{ opacity: 0.85 }}
                isLoading={isSubmitting}
              >
                Save
              </Button>

              <Button
                type="submit"
                bg="#7002C7"
                color="white"
                _hover={{ opacity: 0.85 }}
                _focus={{ opacity: 0.85 }}
                isLoading={isSubmitting}
              >
                Clear
              </Button>
            </Box>
          </form>

        </Box>
      </Box>
    </PatientEncountersLayout>

  );
}
