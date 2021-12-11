import { useState, useMemo } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import {
  Flex,
  Box,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";
import { useParams } from "react-router-dom";
import useEncounteredPatients, { PropTypes } from "../../../hooks/encounteredPatients/useEncounteredPatients";
import useDebounce from "../../../hooks/common/useDebounce";
import PatientEncountersLayout from "../../../components/common/PatientEncountersLayout";
import { columns } from "../../../data/EncountersData";
import EncountersTable from "../../../components/encounters/Table";

export default function Encounters() {
  const { patientId } = useParams();
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);

  console.log(patientId);

  const debouncedSearch = useDebounce<PropTypes>({
    limit,
    offset,
    search,
  });

  const {
    isFetching, isError, isSuccess, data,
  } = useEncounteredPatients(patientId!, debouncedSearch);

  const memoizedColumns = useMemo(() => columns, []);

  const memoizedPatientsData = useMemo(
    () => data?.results ?? [], [data],
  );

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
    <PatientEncountersLayout>
      <Box
        d="flex"
        flexDir="column"
        borderRadius="md"
        borderColor="brand.darkPink"
        boxShadow="0 10px 30px 0 rgb(205 204 219 / 25%)"
        py="8"
        px="6"
        backgroundColor="#fff"
      >
        {data && data.results.length > 0
          ? (
            <>
              <Flex justifyContent="space-between" pb={6} wrap="wrap">
                <Box>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Box as={IoSearch} size="1rem" color="gray.400" />
                    </InputLeftElement>

                    <Input
                      placeholder="Search"
                      width="60%"
                      mr="4"
                      value={search ?? ""}
                      variant="filled"
                      onChange={(e) => setSearch(e.target.value)}
                    />

                  </InputGroup>
                </Box>
                <Box>
                  <Button
                    border="2px"
                    borderRadius="0px"
                    borderColor="brand.darkPink"
                    backgroundColor="brand.darkPink"
                    py="5"
                    px="10"
                    color="white"
                    _hover={{
                      borderColor: "brand.darkPink",
                      backgroundColor: "brand.darkPink",
                    }}
                  >
                    +New
                  </Button>
                </Box>
              </Flex>
              <Box overflowX="scroll">
                <EncountersTable
                  {...{
                    getTableProps,
                    getTableBodyProps,
                    headerGroups,
                    rows,
                    prepareRow,
                  }}
                />
              </Box>

            </>
          )
          : <Box>No Data Found</Box>}
      </Box>
    </PatientEncountersLayout>
  );
}
