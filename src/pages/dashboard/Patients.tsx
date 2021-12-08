import { useState, useMemo } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import {
  Flex,
  Box,
  Heading,
  Text,
  Input,
  useDisclosure,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Spacer,
  Select,
  FormControl,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";
import { columns } from "../../data/PatientsData";
import LoadingPage from "../../components/common/fallback/LoadingPage";
import PatientTable from "../../components/patients/Table";
import PatientModal from "../../components/patients/OverviewModal";
import { SpacedContainer } from "../../components/common/Containers";
import useEncounteredPatients, { EncounteredPatient, PropTypes } from "../../hooks/encounteredPatients/useEncounteredPatients";
import useDebounce from "../../hooks/common/useDebounce";

export default function Patients() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentPatient, setCurrentPatient] = useState<EncounteredPatient | null>(null);
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);

  const debouncedSearch = useDebounce<PropTypes>({
    limit,
    offset,
    search,
  });

  const {
    isFetching, isError, isSuccess, data,
  } = useEncounteredPatients(debouncedSearch);
  const memoizedColumns = useMemo(() => columns, []);

  const memoizedPatientsData = useMemo(
    () => data?.results ?? [], [data],
  );

  const showModal = (patient: EncounteredPatient) => {
    setCurrentPatient(patient);
    onOpen();
  };
  const closeModal = () => {
    setCurrentPatient(null);
    onClose();
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns: memoizedColumns,
    data: memoizedPatientsData,
  },
  useSortBy, usePagination);

  if (isFetching) {
    return <LoadingPage />;
  }

  if (isError) {
    return (
      <SpacedContainer py={12}>
        <Alert
          status="error"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          minHeight="200px"
          rounded="lg"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="xl">
            Woops!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Sorry, something went wrong. Please try again or come back later.
          </AlertDescription>
        </Alert>
      </SpacedContainer>
    );
  }

  if (isSuccess) {
    return (
      <Box backgroundColor="#f7f7fc" minH="100vh">
        <SpacedContainer py={12}>
          <Text color="#11142D" fontWeight="800" pb="8"> Appointment</Text>

          <Box backgroundColor="#fff" p="6" rounded="lg">
            <Flex justifyContent="space-between" pb={6}>
              <Box>
                <Heading as="h2" fontSize="3xl">
                  Patients
                </Heading>
                <Text fontSize="lg" color="gray.500" mt="2">
                  List of all patients
                </Text>
              </Box>
              <Flex>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Box as={IoSearch} size="1rem" color="gray.400" />
                  </InputLeftElement>

                  <Input
                    placeholder="Search"
                    width="100%"
                    mr="4"
                    value={search ?? ""}
                    variant="filled"
                    onChange={(e) => setSearch(e.target.value)}

                  />

                </InputGroup>
                <Box>
                  <Button
                    border="2px"
                    borderRadius="0px"
                    borderColor="brand.darkPink"
                    backgroundColor="brand.darkPink"
                    color="white"
                    _hover={{
                      borderColor: "brand.darkPink",
                      backgroundColor: "brand.darkPink",
                    }}
                  >
                    + New Patient
                  </Button>
                </Box>
              </Flex>
            </Flex>
            <PatientTable
              {...{
                getTableProps,
                getTableBodyProps,
                headerGroups,
                rows,
                prepareRow,
                showModal,
              }}
            />
            <Flex m="2" pt="10">
              <Box color="#3E4954">
                Showing
                {" "}
                {limit > data?.count! ? data?.count : limit}
                {" "}
                from
                {" "}
                {data?.count}
                {" "}
                data
              </Box>
              <Spacer />
              <Flex alignItems="center">
                <Box mr="2" color="#3E4954">Show</Box>
                <FormControl>
                  <Select
                    placeholder="Select"
                    defaultValue="2"
                    value={limit}
                    color="#3E4954"
                    // TODO fix type
                    onChange={(e:any) => setLimit(e.target.value)}
                  >
                    <option value={10}>
                      10
                    </option>
                    <option value={25}>
                      25
                    </option>
                    <option value={50}>
                      50
                    </option>
                    <option value={100}>
                      100
                    </option>
                  </Select>
                </FormControl>
                <Box ml="2" whiteSpace="nowrap" color="#3E4954">Rows Per Page</Box>
              </Flex>
              <Spacer />
              <Flex>
                <Button
                  mr="1rem"
                  backgroundColor="#fff"
                  border="2px"
                  borderRadius="0px"
                  borderColor="brand.darkPink"
                  color="brand.darkPink"
                  onClick={() => setOffset(data?.previous_offset ?? 0)}
                  disabled={!data?.previous}
                >
                  Previous
                </Button>
                {offset / limit - 1 > 0 && (
                  <Button
                    backgroundColor="#fff"
                    border="2px"
                    borderRadius="0px"
                    borderColor="brand.darkPink"
                    color="brand.darkPink"
                    onClick={() => setOffset(
                    data?.previous_offset! - limit,
                    )}
                  >
                    {offset / limit - 1}
                  </Button>
                )}
                {offset / limit > 0 && (
                  <Button
                    backgroundColor="#fff"
                    border="2px"
                    borderRadius="0px"
                    borderColor="brand.darkPink"
                    color="brand.darkPink"
                    onClick={() => setOffset(data?.previous_offset ?? 0)}
                  >
                    {offset / limit }
                  </Button>
                )}
                <Button
                  border="2px"
                  borderRadius="0px"
                  borderColor="brand.darkPink"
                  backgroundColor="brand.darkPink"
                  color="white"
                >
                  {offset / limit + 1}
                </Button>
                <Button
                  backgroundColor="#fff"
                  border="2px"
                  borderRadius="0px"
                  borderColor="brand.darkPink"
                  color="brand.darkPink"
                  onClick={() => setOffset(data?.next_offset ?? 0)}
                  disabled={!data?.next}
                >
                  {offset / limit + 2}
                </Button>
                <Button
                  backgroundColor="#fff"
                  border="2px"
                  borderRadius="0px"
                  borderColor="brand.darkPink"
                  color="brand.darkPink"
                  onClick={() => setOffset(
                  data?.next_offset! + limit,
                  )}
                  disabled={(!(data && data.next_offset
                    && (data.count < (data?.next_offset + limit))))}
                >
                  {offset / limit + 3}
                </Button>
                <Button
                  ml="1rem"
                  backgroundColor="#fff"
                  border="2px"
                  borderRadius="0px"
                  borderColor="brand.darkPink"
                  color="brand.darkPink"
                  onClick={() => setOffset(data?.next_offset ?? 0)}
                  disabled={!data?.next}
                >
                  Next
                </Button>
              </Flex>
            </Flex>
            <PatientModal
              onClose={closeModal}
              isOpen={isOpen}
              patient={currentPatient}
            />
          </Box>
        </SpacedContainer>
      </Box>
    );
  }

  return <></>;
}
