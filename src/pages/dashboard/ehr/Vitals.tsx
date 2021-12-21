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
  AiOutlineCheck, AiOutlineClose, AiOutlineCopy, AiOutlineReload,
} from "react-icons/ai";

import { useForm } from "react-hook-form";
import { FiCopy } from "react-icons/fi";
import PatientEncountersLayout from "../../../components/common/PatientEncountersLayout";

interface IVitals{
  ReadingDateTime:string,
  Height:string,
  Weight:string,
  BMI:string,
  Temperature:string,
  Pulse:string,
  RespiratoryRate:string,
  O2Saturation:string,
  Pain:string,
  Bloodpressure:{
    mm:string,
    hg:string,
  }
}

export default function Vitals() {
  // const { isLoading } = useProfile(doctorProfileAtom);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IVitals>();

  const onSubmit = handleSubmit(async (data) => {
    // const dataWithId:ISocialHistory = { ...data, ...{ patient_encounter: id } };
    // socialHistory(dataWithId);
  });

  // if (isLoading) {
  //   return <LoadingPage />;
  // }

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
          <form>

            <Table variant="mytable" colorScheme="teal" w="100%">
              <Thead />
              <Tbody>
                <Tr>
                  <Td>Reading Date/Time</Td>
                  <Td>
                    <FormControl w="350px" isInvalid={!!errors.ReadingDateTime}>
                      <Input
                        w="290px"
                        border="2px"
                        mr="2"
                        borderColor="brand.darkPink"
                        type="datetime-local"
                        {...register("ReadingDateTime", {
                          required: {
                            value: true,
                            message: "This field is required",
                          },
                        })}
                        name="ReadingDateTime"
                      />
                      <FormErrorMessage>
                        {errors.ReadingDateTime && errors.ReadingDateTime.message}
                      </FormErrorMessage>
                    </FormControl>
                  </Td>

                </Tr>
                <Tr>
                  <Td>Height</Td>
                  <Td>
                    <FormControl w="350px" justifyContent="center" isInvalid={!!errors.Height}>
                      <Flex alignItems="center">
                        <Input
                          w="290px"
                          border="2px"
                          mr="2"
                          borderColor="brand.darkPink"
                          type="number"
                          {...register("Height", {
                            required: {
                              value: true,
                              message: "This field is required",
                            },
                          })}
                          name="Height"
                        />
                        <Box color="brand.darkPink">cm</Box>
                      </Flex>
                      <FormErrorMessage>
                        {errors.Height && errors.Height.message}
                      </FormErrorMessage>
                    </FormControl>
                  </Td>

                </Tr>
                <Tr>
                  <Td>Weight</Td>
                  <Td>
                    <FormControl w="350px" justifyContent="center" isInvalid={!!errors.Weight}>
                      <Flex alignItems="center">
                        <Input
                          w="290px"
                          border="2px"
                          mr="2"
                          borderColor="brand.darkPink"
                          type="number"
                          {...register("Weight", {
                            required: {
                              value: true,
                              message: "This field is required",
                            },
                          })}
                          name="Weight"
                        />
                        <Box color="brand.darkPink">lbs</Box>
                      </Flex>
                      <FormErrorMessage>
                        {errors.Weight && errors.Weight.message}
                      </FormErrorMessage>
                    </FormControl>
                  </Td>

                </Tr>
                <Tr>
                  <Td>BMI</Td>
                  <Td>
                    <FormControl w="350px" justifyContent="center" isInvalid={!!errors.BMI}>
                      <Input
                        w="290px"
                        border="2px"
                        mr="2"
                        borderColor="brand.darkPink"
                        type="number"
                        {...register("BMI", {
                          required: {
                            value: true,
                            message: "This field is required",
                          },
                        })}
                        name="BMI"
                      />
                      <FormErrorMessage>
                        {errors.BMI && errors.BMI.message}
                      </FormErrorMessage>
                    </FormControl>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Temperature</Td>
                  <Td>
                    <FormControl w="350px" justifyContent="center" isInvalid={!!errors.Temperature}>
                      <Flex alignItems="center">
                        <Input
                          w="290px"
                          border="2px"
                          mr="2"
                          borderColor="brand.darkPink"
                          type="number"
                          {...register("Temperature", {
                            required: {
                              value: true,
                              message: "This field is required",
                            },
                          })}
                          name="Temperature"
                        />
                        <Box color="brand.darkPink">F</Box>
                      </Flex>
                      <FormErrorMessage>
                        {errors.Temperature && errors.Temperature.message}
                      </FormErrorMessage>
                    </FormControl>
                  </Td>

                </Tr>
                <Tr>
                  <Td>Pulse</Td>
                  <Td>
                    <FormControl w="350px" justifyContent="center" isInvalid={!!errors.Pulse}>
                      <Flex alignItems="center">
                        <Input
                          w="290px"
                          border="2px"
                          mr="2"
                          borderColor="brand.darkPink"
                          type="number"
                          {...register("Temperature", {
                            required: {
                              value: true,
                              message: "This field is required",
                            },
                          })}
                          name="Temperature"
                        />
                        <Box color="brand.darkPink">bpm</Box>
                      </Flex>
                      <FormErrorMessage>
                        {errors.Pulse && errors.Pulse.message}
                      </FormErrorMessage>
                    </FormControl>
                  </Td>

                </Tr>
                <Tr>
                  <Td>Respiratory rate</Td>
                  <Td>
                    <FormControl w="350px" justifyContent="center" isInvalid={!!errors.RespiratoryRate}>
                      <Flex alignItems="center">
                        <Input
                          w="290px"
                          border="2px"
                          mr="2"
                          borderColor="brand.darkPink"
                          type="number"
                          {...register("RespiratoryRate", {
                            required: {
                              value: true,
                              message: "This field is required",
                            },
                          })}
                          name="RespiratoryRate"
                        />
                        <Box color="brand.darkPink">rpm</Box>
                      </Flex>
                      <FormErrorMessage>
                        {errors.RespiratoryRate && errors.RespiratoryRate.message}
                      </FormErrorMessage>
                    </FormControl>
                  </Td>

                </Tr>
                <Tr>
                  <Td>O2 Saturation</Td>
                  <Td>
                    <FormControl w="350px" justifyContent="center" isInvalid={!!errors.O2Saturation}>
                      <Flex alignItems="center">
                        <Input
                          w="290px"
                          border="2px"
                          mr="2"
                          borderColor="brand.darkPink"
                          type="number"
                          {...register("O2Saturation", {
                            required: {
                              value: true,
                              message: "This field is required",
                            },
                          })}
                          name="O2Saturation"
                        />
                        <Box color="brand.darkPink">%</Box>
                      </Flex>
                      <FormErrorMessage>
                        {errors.O2Saturation && errors.O2Saturation.message}
                      </FormErrorMessage>
                    </FormControl>
                  </Td>

                </Tr>
                <Tr>
                  <Td>Pain</Td>
                  <Td>
                    <FormControl w="350px" justifyContent="center" isInvalid={!!errors.Pain}>
                      <Input
                        w="290px"
                        border="2px"
                        borderColor="brand.darkPink"
                        type="number"
                        {...register("Pain", {
                          required: {
                            value: true,
                            message: "This field is required",
                          },
                        })}
                        name="Pain"
                      />
                      <FormErrorMessage>
                        {errors.Pain && errors.Pain.message}
                      </FormErrorMessage>
                    </FormControl>
                  </Td>

                </Tr>
                <Tr>
                  <Td>Blood pressure</Td>
                  <Td>
                    <Flex w="350px" alignItems="center">
                      <FormControl w="48%" isInvalid={!!errors.Bloodpressure?.mm}>
                        <Input
                          w="140px"
                          border="2px"
                          mr="2"
                          borderColor="brand.darkPink"
                          type="number"
                          name="Bloodpressure"
                        />
                        <FormErrorMessage>
                          {errors.Bloodpressure?.mm && errors.Bloodpressure.mm.message}
                        </FormErrorMessage>
                      </FormControl>
                      <FormControl w="48%" isInvalid={!!errors.Bloodpressure?.hg}>
                        <Input
                          w="140px"
                          border="2px"
                          mr="2"
                          borderColor="brand.darkPink"
                          type="number"
                          name="Bloodpressure"
                        />
                        <FormErrorMessage>
                          {errors.Bloodpressure?.hg && errors.Bloodpressure.hg.message}
                        </FormErrorMessage>
                      </FormControl>
                      <Box color="brand.darkPink">mm/Hg</Box>

                    </Flex>

                  </Td>

                </Tr>

              </Tbody>

            </Table>

            <Flex justifyContent="end" mt={8} p={4} experimental_spaceX={4}>
              <Button background="#7002C7" color="#fff" _hover={{ background: "#7002C7" }} leftIcon={<AiOutlineReload />}>Clear</Button>
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
