import {
  Heading,
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { higherEducationOptions, homeEnvironmentOptions } from "../../../data/SocialHistory";
import CustomAccordion from "../../../components/common/CustomAccordion";
import PatientEncountersLayout from "../../../components/common/PatientEncountersLayout";
import doctorProfileAtom from "../../../atoms/doctorProfile";
import useProfile from "../../../hooks/profile/useProfile";
import LoadingPage from "../../../components/common/fallback/LoadingPage";

interface IAssessmentCreate{
  home_environment:string,
  highest_education:string,
}

export default function SocialHistory() {
  const { isLoading } = useProfile("doctor", doctorProfileAtom);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IAssessmentCreate>();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

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
        <Heading as="h2" fontSize="xl" fontWeight={500} color="primary.dark" mb="5" background="primary.light" p="2" px="6">Social History</Heading>
        <Box p="4" px="6">
          <form onSubmit={onSubmit}>
            <CustomAccordion title="Personal Details">
              <Box>
                <Flex experimental_spaceX={8}>
                  <FormControl pb={6}>
                    <FormLabel htmlFor="home_environment" color="brand.dark">Home Environment</FormLabel>
                    <Select
                      placeholder="Select"
                      {...register("home_environment")}
                    >
                      {homeEnvironmentOptions.map(({ label, value }) => (
                        <option
                          key={value}
                          value={value}
                        >
                          {label}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>
                      {errors.home_environment && errors.home_environment.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl pb={6}>
                    <FormLabel htmlFor="highest_education" color="brand.dark">Highest Education</FormLabel>
                    <Select
                      placeholder="Select"
                      {...register("highest_education")}
                    >
                      {higherEducationOptions.map(({ label, value }) => (
                        <option
                          key={value}
                          value={value}
                        >
                          {label}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>
                      {errors.highest_education && errors.highest_education.message}
                    </FormErrorMessage>
                  </FormControl>

                </Flex>

              </Box>
            </CustomAccordion>

          </form>

        </Box>
      </Box>
    </PatientEncountersLayout>
  );
}
