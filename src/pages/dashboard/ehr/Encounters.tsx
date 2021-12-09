import { useState, useMemo, useRef } from "react";
import { useRecoilValue } from "recoil";
import { useTable, useSortBy, usePagination } from "react-table";
import {
  Flex,
  Box,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { matchSorter } from "match-sorter";
import debounce from "lodash/debounce";

import { IoSearch } from "react-icons/io5";
import PatientEncountersLayout from "../../../components/common/PatientEncountersLayout";
import encountersAtom from "../../../atoms/ehr/encounters";
import { columns } from "../../../data/EncountersData";
import EncountersTable from "../../../components/encounters/Table";

export default function Encounters() {
  const data = useRecoilValue(encountersAtom);
  const [searchParam, setSearchParam] = useState<string | null>(null);
  const [searchParamDebounced, setSearchParamDebounced] = useState<string | null>(null);

  const debouncedSearch = useRef(
    debounce((x) => setSearchParamDebounced(x), 500),
  ).current;

  const memoizedColumns = useMemo(() => columns, []);
  const memoizedData = useMemo(
    () => {
      if (!searchParamDebounced) return data;
      return matchSorter(
        data,
        searchParamDebounced,
        {
          keys: ["name", "address", "phoneNo", "reasonOfVisit", "status"],
        },
      );
    }, [searchParamDebounced, data],
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns: memoizedColumns,
    data: memoizedData,
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
                value={searchParam ?? ""}
                variant="filled"
                onChange={(e) => {
                  setSearchParam(e.target.value);
                  debouncedSearch(e.target.value);
                }}
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

      </Box>
    </PatientEncountersLayout>
  );
}
