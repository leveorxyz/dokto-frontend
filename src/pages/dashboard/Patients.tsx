import { useState, useMemo, useRef } from "react";
import { useRecoilValue } from "recoil";
import { useTable, useSortBy, usePagination } from "react-table";
import {
  Flex,
  Box,
  Heading,
  Text,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { matchSorter } from "match-sorter";
import debounce from "lodash/debounce";

import patientsAtom, { Patient } from "../../atoms/ehr/patients";
import { columns } from "../../data/PatientsData";
import PatientTable from "../../components/patients/Table";
import PatientModal from "../../components/patients/OverviewModal";
import { SpacedContainer } from "../../components/common/Containers";

export default function Patients() {
  const patientsData = useRecoilValue(patientsAtom);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentPatient, setCurrentPatient] = useState<Patient | null>(null);
  const [searchParam, setSearchParam] = useState<string | null>(null);
  const [searchParamDebounced, setSearchParamDebounced] = useState<string | null>(null);

  const debouncedSearch = useRef(
    debounce((x) => setSearchParamDebounced(x), 500),
  ).current;

  const memoizedColumns = useMemo(() => columns, []);
  const memoizedPatientsData = useMemo(
    () => {
      if (!searchParamDebounced) return patientsData;
      return matchSorter(
        patientsData,
        searchParamDebounced,
        {
          keys: ["name", "address", "phoneNo", "reasonOfVisit", "status"],
        },
      );
    }, [searchParamDebounced, patientsData],
  );

  const showModal = (patient: Patient) => {
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
            value={searchParam ?? ""}
            variant="filled"
            onChange={(e) => {
              setSearchParam(e.target.value);
              debouncedSearch(e.target.value);
            }}
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
