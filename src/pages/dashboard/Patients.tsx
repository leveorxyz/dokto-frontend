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
} from "@chakra-ui/react";
// import debounce from "lodash/debounce";
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
  const [limit, setLimit] = useState(1);

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
      <SpacedContainer py={12}>
        <Flex justifyContent="space-between" pb={6}>
          <Box>
            <Heading as="h1" fontSize="3xl">
              Patients
            </Heading>
            <Text fontSize="lg" color="gray.500">
              List of all patients
            </Text>
          </Box>

          <Box>
            <Text fontSize="lg">
              Search Patients
            </Text>
            <Input
              placeholder="Search"
              value={search ?? ""}
              variant="filled"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Box>
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
        <Flex m="2">
          <Box>
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
            <Box mr="2">Show</Box>
            <FormControl>
              <Select
                placeholder="Select"
                defaultValue="2"
                value={limit}
                // TODO fix type
                onChange={(e:any) => setLimit(e.target.value)}
              >
                <option value={1}>
                  1
                </option>
                <option value={2}>
                  2
                </option>
                <option value={5}>
                  5
                </option>
                <option value={10}>
                  10
                </option>
              </Select>
            </FormControl>
            <Box ml="2" whiteSpace="nowrap">Rows Per Page</Box>
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
      </SpacedContainer>
    );
  }

  return <></>;
}
