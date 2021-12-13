import {
  Heading,
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
  Button,
  Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import {
  higherEducationOptions, homeEnvironmentOptions,
  tobaccoPacksPerDayOptions, tobaccoStatusOptions, tobaccoTypeOptions,
} from "../../../data/SocialHistory";
import CustomAccordion from "../../../components/common/CustomAccordion";
import PatientEncountersLayout from "../../../components/common/PatientEncountersLayout";
import doctorProfileAtom from "../../../atoms/doctorProfile";
import useProfile from "../../../hooks/profile/useProfile";
import LoadingPage from "../../../components/common/fallback/LoadingPage";

interface IAssessmentCreate{
  home_environment:string,
  highest_education:string,
  occupation:string,
  children:string,
  marital_status:string,
  status:string,
  tobacco_status:string,
  tobacco_type:string,
  tobacco_packs_per_day:string,
  tobacco_start_date:string,
  tobacco_cessation:string
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

    // useSocialHistoryAdd(data);
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
                <FormControl isInvalid={!!errors.occupation} pb={6}>
                  <FormLabel htmlFor="occupation" color="primary.dark">Occupation</FormLabel>
                  <Input
                    {...register("occupation", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                    name="occupation"
                  />
                  <FormErrorMessage>
                    {errors.occupation && errors.occupation.message}
                  </FormErrorMessage>
                </FormControl>
                <Flex experimental_spaceX={8} pb={6}>
                  <FormControl isInvalid={!!errors.children}>
                    <FormLabel htmlFor="children" color="primary.dark">Children</FormLabel>
                    <Input
                      {...register("children", {
                        required: {
                          value: true,
                          message: "This field is required",
                        },
                      })}
                      name="children"
                    />
                    <FormErrorMessage>
                      {errors.children && errors.children.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.marital_status} pb={6}>
                    <FormLabel htmlFor="marital_status" color="primary.dark">Marital Status</FormLabel>
                    <Input
                      {...register("marital_status", {
                        required: {
                          value: true,
                          message: "This field is required",
                        },
                      })}
                      name="marital_status"
                    />
                    <FormErrorMessage>
                      {errors.marital_status && errors.marital_status.message}
                    </FormErrorMessage>
                  </FormControl>
                </Flex>
              </Box>
            </CustomAccordion>

            {/* TOBACCO  */}
            <CustomAccordion title="Tobacco/ Smoking Use">
              <Box>
                <Flex experimental_spaceX={8}>
                  <FormControl pb={6}>
                    <FormLabel htmlFor="tobacco_status" color="brand.dark">Status</FormLabel>
                    <Select
                      placeholder="Select"
                      {...register("tobacco_status")}
                    >
                      {tobaccoStatusOptions.map(({ label, value }) => (
                        <option
                          key={value}
                          value={value}
                        >
                          {label}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>
                      {errors.tobacco_status && errors.tobacco_status.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl pb={6}>
                    <FormLabel htmlFor="tobacco_type" color="brand.dark">Type</FormLabel>
                    <Select
                      placeholder="Select"
                      {...register("tobacco_type")}
                    >
                      {tobaccoTypeOptions.map(({ label, value }) => (
                        <option
                          key={value}
                          value={value}
                        >
                          {label}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>
                      {errors.tobacco_type && errors.tobacco_type.message}
                    </FormErrorMessage>
                  </FormControl>

                </Flex>
                <FormControl pb={6}>
                  <FormLabel htmlFor="tobacco_packs_per_day" color="brand.dark">Pack(s)/ Day</FormLabel>
                  <Select
                    placeholder="Select"
                    {...register("tobacco_packs_per_day")}
                  >
                    {tobaccoPacksPerDayOptions.map(({ label, value }) => (
                      <option
                        key={value}
                        value={value}
                      >
                        {label}
                      </option>
                    ))}
                  </Select>
                  <FormErrorMessage>
                    {errors.tobacco_packs_per_day && errors.tobacco_packs_per_day.message}
                  </FormErrorMessage>
                </FormControl>

                <Flex experimental_spaceX={8} pb={6}>
                  <FormControl isInvalid={!!errors.tobacco_start_date}>
                    <FormLabel htmlFor="tobacco_start_date" color="primary.dark">Year Started</FormLabel>
                    <Input
                      {...register("tobacco_start_date", {
                        required: {
                          value: true,
                          message: "This field is required",
                        },
                      })}
                      name="tobacco_start_date"
                    />
                    <FormErrorMessage>
                      {errors.tobacco_start_date && errors.tobacco_start_date.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.tobacco_cessation} pb={6}>
                    <FormLabel htmlFor="tobacco_cessation" color="primary.dark">Year of Cessation</FormLabel>
                    <Input
                      {...register("tobacco_cessation", {
                        required: {
                          value: true,
                          message: "This field is required",
                        },
                      })}
                      name="tobacco_cessation"
                    />
                    <FormErrorMessage>
                      {errors.tobacco_cessation && errors.tobacco_cessation.message}
                    </FormErrorMessage>
                  </FormControl>
                </Flex>
              </Box>
            </CustomAccordion>
            <Flex justifyContent="end">
              <Button>Cancel</Button>
              <Button type="submit" ml={2} colorScheme="purple">Save</Button>
            </Flex>
          </form>

        </Box>
      </Box>
    </PatientEncountersLayout>
  );
}
