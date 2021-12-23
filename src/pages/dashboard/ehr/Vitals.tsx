import {
  Heading,
  Box,
  Table,
  Tbody,
  Td,
  Thead,
  Tr,
  FormControl,
  FormErrorMessage,
  Input,
  Flex,
  Button,
} from "@chakra-ui/react";
import {
  AiOutlineCheck, AiOutlineClose, AiOutlineReload,
} from "react-icons/ai";
import { useForm } from "react-hook-form";
import { FiCopy } from "react-icons/fi";
import { useParams } from "react-router-dom";
import useVitalsAdd, { IVitals } from "../../../hooks/vitals.tsx/useVitalsAdd";
import LoadingPage from "../../../components/common/fallback/LoadingPage";
import PatientEncountersLayout from "../../../components/common/PatientEncountersLayout";

export default function Vitals() {
  const { id } = useParams();

  const {
    mutate: vitalsAdd,
    isLoading,
  } = useVitalsAdd();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IVitals>();

  const onSubmit = handleSubmit(async (data) => {
    const dataWithId:IVitals = { ...data, ...{ patient_encounter: id } };
    vitalsAdd(dataWithId);
    reset();
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
        <Heading as="h2" fontSize="xl" fontWeight={500} color="primary.dark" mb="5" background="primary.light" p="2" px="6">Vitals</Heading>
        <Box mt={-6}>
          <form onSubmit={onSubmit}>

            <Table variant="mytable" colorScheme="teal" w="100%">
              <Thead />
              <Tbody>
                <Tr>
                  <Td>Reading Date/Time</Td>
                  <Td>
                    <Flex w="350px" alignItems="center">
                      <FormControl w="48%" isInvalid={!!errors.reading_date}>
                        <Input
                          {...register("reading_date", {
                            required: {
                              value: true,
                              message: "This field is required",
                            },
                          })}
                          w="140px"
                          border="2px"
                          mr="2"
                          borderColor="brand.darkPink"
                          type="date"
                          name="reading_date"
                        />
                        <FormErrorMessage>
                          {errors.reading_date && errors.reading_date.message}
                        </FormErrorMessage>
                      </FormControl>
                      <FormControl w="48%" isInvalid={!!errors.reading_time}>
                        <Input
                          {...register("reading_time", {
                            required: {
                              value: true,
                              message: "This field is required",
                            },
                          })}
                          w="140px"
                          border="2px"
                          mr="2"
                          borderColor="brand.darkPink"
                          type="time"
                          name="reading_time"
                        />
                        <FormErrorMessage>
                          {errors.reading_time && errors.reading_time.message}
                        </FormErrorMessage>
                      </FormControl>
                      <Box color="brand.darkPink">mm/Hg</Box>

                    </Flex>

                  </Td>

                </Tr>
                <Tr>
                  <Td>Height</Td>
                  <Td>
                    <FormControl w="350px" justifyContent="center" isInvalid={!!errors.height}>
                      <Flex alignItems="center">
                        <Input
                          w="290px"
                          border="2px"
                          mr="2"
                          borderColor="brand.darkPink"
                          type="number"
                          {...register("height", {
                            required: {
                              value: true,
                              message: "This field is required",
                            },
                          })}
                          name="height"
                        />
                        <Box color="brand.darkPink">cm</Box>
                      </Flex>
                      <FormErrorMessage>
                        {errors.height && errors.height.message}
                      </FormErrorMessage>
                    </FormControl>
                  </Td>

                </Tr>
                <Tr>
                  <Td>Weight</Td>
                  <Td>
                    <FormControl w="350px" justifyContent="center" isInvalid={!!errors.weight}>
                      <Flex alignItems="center">
                        <Input
                          w="290px"
                          border="2px"
                          mr="2"
                          borderColor="brand.darkPink"
                          type="number"
                          {...register("weight", {
                            required: {
                              value: true,
                              message: "This field is required",
                            },
                          })}
                          name="weight"
                        />
                        <Box color="brand.darkPink">lbs</Box>
                      </Flex>
                      <FormErrorMessage>
                        {errors.weight && errors.weight.message}
                      </FormErrorMessage>
                    </FormControl>
                  </Td>

                </Tr>
                <Tr>
                  <Td>BMI</Td>
                  <Td>
                    <FormControl w="350px" justifyContent="center" isInvalid={!!errors.bmi}>
                      <Input
                        w="290px"
                        border="2px"
                        mr="2"
                        borderColor="brand.darkPink"
                        type="number"
                        {...register("bmi", {
                          required: {
                            value: true,
                            message: "This field is required",
                          },
                        })}
                        name="bmi"
                      />
                      <FormErrorMessage>
                        {errors.bmi && errors.bmi.message}
                      </FormErrorMessage>
                    </FormControl>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Temperature</Td>
                  <Td>
                    <FormControl w="350px" justifyContent="center" isInvalid={!!errors.temperature}>
                      <Flex alignItems="center">
                        <Input
                          w="290px"
                          border="2px"
                          mr="2"
                          borderColor="brand.darkPink"
                          type="number"
                          {...register("temperature", {
                            required: {
                              value: true,
                              message: "This field is required",
                            },
                          })}
                          name="temperature"
                        />
                        <Box color="brand.darkPink">F</Box>
                      </Flex>
                      <FormErrorMessage>
                        {errors.temperature && errors.temperature.message}
                      </FormErrorMessage>
                    </FormControl>
                  </Td>

                </Tr>
                <Tr>
                  <Td>Pulse</Td>
                  <Td>
                    <FormControl w="350px" justifyContent="center" isInvalid={!!errors.pulse}>
                      <Flex alignItems="center">
                        <Input
                          w="290px"
                          border="2px"
                          mr="2"
                          borderColor="brand.darkPink"
                          type="number"
                          {...register("pulse", {
                            required: {
                              value: true,
                              message: "This field is required",
                            },
                          })}
                          name="pulse"
                        />
                        <Box color="brand.darkPink">bpm</Box>
                      </Flex>
                      <FormErrorMessage>
                        {errors.pulse && errors.pulse.message}
                      </FormErrorMessage>
                    </FormControl>
                  </Td>

                </Tr>
                <Tr>
                  <Td>Respiratory rate</Td>
                  <Td>
                    <FormControl w="350px" justifyContent="center" isInvalid={!!errors.respiratory_rate}>
                      <Flex alignItems="center">
                        <Input
                          w="290px"
                          border="2px"
                          mr="2"
                          borderColor="brand.darkPink"
                          type="number"
                          {...register("respiratory_rate", {
                            required: {
                              value: true,
                              message: "This field is required",
                            },
                          })}
                          name="respiratory_rate"
                        />
                        <Box color="brand.darkPink">rpm</Box>
                      </Flex>
                      <FormErrorMessage>
                        {errors.respiratory_rate && errors.respiratory_rate.message}
                      </FormErrorMessage>
                    </FormControl>
                  </Td>

                </Tr>
                <Tr>
                  <Td>O2 Saturation</Td>
                  <Td>
                    <FormControl w="350px" justifyContent="center" isInvalid={!!errors.o2_saturation}>
                      <Flex alignItems="center">
                        <Input
                          w="290px"
                          border="2px"
                          mr="2"
                          borderColor="brand.darkPink"
                          type="number"
                          {...register("o2_saturation", {
                            required: {
                              value: true,
                              message: "This field is required",
                            },
                          })}
                          name="o2_saturation"
                        />
                        <Box color="brand.darkPink">%</Box>
                      </Flex>
                      <FormErrorMessage>
                        {errors.o2_saturation && errors.o2_saturation.message}
                      </FormErrorMessage>
                    </FormControl>
                  </Td>

                </Tr>
                <Tr>
                  <Td>Pain</Td>
                  <Td>
                    <FormControl w="350px" justifyContent="center" isInvalid={!!errors.pain}>
                      <Input
                        w="290px"
                        border="2px"
                        borderColor="brand.darkPink"
                        type="number"
                        {...register("pain", {
                          required: {
                            value: true,
                            message: "This field is required",
                          },
                        })}
                        name="pain"
                      />
                      <FormErrorMessage>
                        {errors.pain && errors.pain.message}
                      </FormErrorMessage>
                    </FormControl>
                  </Td>

                </Tr>
                <Tr>
                  <Td>Blood pressure</Td>
                  <Td>
                    <Flex w="350px" alignItems="center">
                      <FormControl w="48%" isInvalid={!!errors.blood_pressure_mm}>
                        <Input
                          {...register("blood_pressure_mm", {
                            required: {
                              value: true,
                              message: "This field is required",
                            },
                          })}
                          w="140px"
                          border="2px"
                          mr="2"
                          borderColor="brand.darkPink"
                          type="number"
                          name="blood_pressure_mm"
                        />
                        <FormErrorMessage>
                          {errors.blood_pressure_mm && errors.blood_pressure_mm.message}
                        </FormErrorMessage>
                      </FormControl>
                      <FormControl w="48%" isInvalid={!!errors.blood_pressure_hg}>
                        <Input
                          {...register("blood_pressure_hg", {
                            required: {
                              value: true,
                              message: "This field is required",
                            },
                          })}
                          w="140px"
                          border="2px"
                          mr="2"
                          borderColor="brand.darkPink"
                          type="number"
                          name="blood_pressure_hg"
                        />
                        <FormErrorMessage>
                          {errors.blood_pressure_hg && errors.blood_pressure_hg.message}
                        </FormErrorMessage>
                      </FormControl>
                      <Box color="brand.darkPink">mm/Hg</Box>

                    </Flex>

                  </Td>

                </Tr>

              </Tbody>

            </Table>

            <Flex justifyContent="end" mt={8} p={4} experimental_spaceX={4}>
              <Button background="#7002C7" color="#fff" _hover={{ background: "#7002C7" }} leftIcon={<AiOutlineReload />} onClick={() => reset()}>Clear</Button>
              <Button background="#3DE0FF" color="#fff" _hover={{ background: "#3DE0FF" }} leftIcon={<AiOutlineClose />}>Cancel</Button>
              <Button background="#006A82" color="#fff" _hover={{ background: "#006A82" }} leftIcon={<FiCopy />}>Copy From Previous Encounter</Button>
              <Button type="submit" background="#A42BAD" color="#fff" _hover={{ background: "#A42BAD" }} leftIcon={<AiOutlineCheck />} disabled={isSubmitting}>Save</Button>
            </Flex>
          </form>

        </Box>
      </Box>

    </PatientEncountersLayout>
  );
}
