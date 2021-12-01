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
  const [offset] = useState(0);
  const [limit] = useState(15);

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
