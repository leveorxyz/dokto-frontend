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
import { useParams } from "react-router-dom";
import MessagePage from "../../../components/common/fallback/MessagePage";
import useSocialHistoryAdd, { ISocialHistory } from "../../../hooks/socialHistory.tsx/useSocialHistoryAdd";
import {
  alcoholUseOptions,
  caffeineUseOptions,
  etohOptions,
  exerciseOptions,
  exposureOptions,
  genderIdentityOptions,
  higherEducationOptions, homeEnvironmentOptions,
  seatbeltOptions,
  sexualOrientationOptions,
  tobaccoPacksPerDayOptions, tobaccoStatusOptions, tobaccoTypeOptions,
} from "../../../data/SocialHistory";
import CustomAccordion from "../../../components/common/CustomAccordion";
import PatientEncountersLayout from "../../../components/common/PatientEncountersLayout";
import LoadingPage from "../../../components/common/fallback/LoadingPage";

export default function SocialHistory() {
  const { id } = useParams();
  const {
    mutate: socialHistory,
    error,
    isLoading,
    isError,
  } = useSocialHistoryAdd();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ISocialHistory>();

  const onSubmit = handleSubmit(async (data) => {
    const dataWithId:ISocialHistory = { ...data, ...{ patient_encounter: id } };

    socialHistory(dataWithId);
  });

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return <MessagePage status="error" title="Oops!" message={(error as any).message} />;
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
            {/* Personal Details */}
            <CustomAccordion title="Personal Details">
              <Box>
                <Flex experimental_spaceX={8}>
                  <FormControl isInvalid={!!errors.home_environment} pb={6}>
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
                  <FormControl isInvalid={!!errors.highest_education} pb={6}>
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
                  <FormControl isInvalid={!!errors.sexual_orientation}>
                    <FormLabel htmlFor="sexual_orientation" color="primary.dark">Sexual Orientation</FormLabel>
                    <Select
                      placeholder="Select"
                      {...register("tobacco_status")}
                    >
                      {sexualOrientationOptions.map(({ label, value }) => (
                        <option
                          key={value}
                          value={value}
                        >
                          {label}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>
                      {errors.sexual_orientation && errors.sexual_orientation.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.gender_identity} pb={6}>
                    <FormLabel htmlFor="gender_identity" color="primary.dark">Gender Identity</FormLabel>
                    <Select
                      placeholder="Select"
                      {...register("gender_identity")}
                    >
                      {genderIdentityOptions.map(({ label, value }) => (
                        <option
                          key={value}
                          value={value}
                        >
                          {label}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>
                      {errors.gender_identity && errors.gender_identity.message}
                    </FormErrorMessage>
                  </FormControl>
                </Flex>
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

            {/* Tobacco/ Smoking Use  */}
            <CustomAccordion title="Tobacco/ Smoking Use">
              <Box>
                <Flex experimental_spaceX={8}>
                  <FormControl isInvalid={!!errors.tobacco_status} pb={6}>
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
                  <FormControl isInvalid={!!errors.tobacco_type} pb={6}>
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
                <FormControl isInvalid={!!errors.tobacco_packs_per_day} pb={6}>
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

            {/* Risk Factors */}
            <CustomAccordion title="Risk Factors">
              <Box>
                <Flex experimental_spaceX={8}>
                  <FormControl isInvalid={!!errors.exercise} pb={6}>
                    <FormLabel htmlFor="exercise" color="brand.dark">Excercise</FormLabel>
                    <Select
                      placeholder="Select"
                      {...register("exercise")}
                    >
                      {exerciseOptions.map(({ label, value }) => (
                        <option
                          key={value}
                          value={value}
                        >
                          {label}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>
                      {errors.exercise && errors.exercise.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.seatbelts} pb={6}>
                    <FormLabel htmlFor="seatbelts" color="brand.dark">Seatbelts</FormLabel>
                    <Select
                      placeholder="Select"
                      {...register("seatbelts")}
                    >
                      {seatbeltOptions.map(({ label, value }) => (
                        <option
                          key={value}
                          value={value}
                        >
                          {label}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>
                      {errors.seatbelts && errors.seatbelts.message}
                    </FormErrorMessage>
                  </FormControl>

                </Flex>

                <Flex experimental_spaceX={8}>
                  <FormControl isInvalid={!!errors.drug_use}>
                    <FormLabel htmlFor="drug_use" color="primary.dark">Drug Use</FormLabel>
                    <Input
                      {...register("drug_use", {
                        required: {
                          value: true,
                          message: "This field is required",
                        },
                      })}
                      name="drug_use"
                    />
                    <FormErrorMessage>
                      {errors.drug_use && errors.drug_use.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.quit_date} pb={6}>
                    <FormLabel htmlFor="quit_date" color="primary.dark">Quit Date</FormLabel>
                    <Input
                      type="date"
                      {...register("quit_date", {
                        required: {
                          value: true,
                          message: "This field is required",
                        },
                      })}
                      name="quit_date"
                    />
                    <FormErrorMessage>
                      {errors.quit_date && errors.quit_date.message}
                    </FormErrorMessage>
                  </FormControl>
                </Flex>
                <Flex>
                  <FormControl isInvalid={!!errors.exposure} pb={6}>
                    <FormLabel htmlFor="exposure" color="primary.dark">Exposure</FormLabel>
                    <Select
                      placeholder="Select"
                      {...register("exposure")}
                    >
                      {exposureOptions.map(({ label, value }) => (
                        <option
                          key={value}
                          value={value}
                        >
                          {label}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>
                      {errors.exposure && errors.exposure.message}
                    </FormErrorMessage>
                  </FormControl>
                  <Box />

                </Flex>
              </Box>
            </CustomAccordion>

            {/* Alcohol/ Caffeine Use */}
            <CustomAccordion title="Alcohol/ Caffeine Use">
              <Box>
                <Flex experimental_spaceX={8}>
                  <FormControl isInvalid={!!errors.alcohol_use} pb={6}>
                    <FormLabel htmlFor="alcohol_use" color="brand.dark">Alcohol Use</FormLabel>
                    <Select
                      placeholder="Select"
                      {...register("alcohol_use")}
                    >
                      {alcoholUseOptions.map(({ label, value }) => (
                        <option
                          key={value}
                          value={value}
                        >
                          {label}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>
                      {errors.alcohol_use && errors.alcohol_use.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.caffeine_use} pb={6}>
                    <FormLabel htmlFor="caffeine_use" color="brand.dark">Caffeine Use</FormLabel>
                    <Select
                      placeholder="Select"
                      {...register("caffeine_use")}
                    >
                      {caffeineUseOptions.map(({ label, value }) => (
                        <option
                          key={value}
                          value={value}
                        >
                          {label}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>
                      {errors.caffeine_use && errors.caffeine_use.message}
                    </FormErrorMessage>
                  </FormControl>

                </Flex>

                <Flex experimental_spaceX={8}>
                  <FormControl isInvalid={!!errors.etoh}>
                    <FormLabel htmlFor="etoh" color="primary.dark">ETOH</FormLabel>
                    <Select
                      placeholder="Select"
                      {...register("etoh")}
                    >
                      {etohOptions.map(({ label, value }) => (
                        <option
                          key={value}
                          value={value}
                        >
                          {label}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>
                      {errors.etoh && errors.etoh.message}
                    </FormErrorMessage>
                  </FormControl>

                </Flex>

              </Box>
            </CustomAccordion>

            <Flex justifyContent="end" mt={8}>
              <Button>Cancel</Button>
              <Button type="submit" ml={2} colorScheme="purple" disabled={isSubmitting}>Save</Button>
            </Flex>
          </form>

        </Box>
      </Box>
    </PatientEncountersLayout>
  );
}
