import { useState, useMemo, useRef } from "react";
import { useRecoilValue } from "recoil";
import { useTable, useSortBy, usePagination } from "react-table";
import {
  Flex,
  Box,
  Heading,
  Text,
  Input,
  chakra,
} from "@chakra-ui/react";
import { matchSorter } from "match-sorter";
import { useSearchParams } from "react-router-dom";
import debounce from "lodash/debounce";

import encountersAtom from "../../atoms/ehr/encounters";
import { columns } from "../../data/EncountersData";
import EncountersTable from "../../components/encounters/Table";
import { SpacedContainer } from "../../components/common/Containers";

export default function Encounters() {
  const data = useRecoilValue(encountersAtom);
  const [searchParam, setSearchParam] = useState<string | null>(null);
  const [searchParamDebounced, setSearchParamDebounced] = useState<string | null>(null);
  const [urlSearchParams] = useSearchParams();
  const name = urlSearchParams.get("name") || "";

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
    <SpacedContainer py={12}>
      <Flex justifyContent="space-between" pb={6} wrap="wrap">
        <Box>
          {name ? (
            <Heading as="h1" fontSize="3xl">
              Encounters with -
              {" "}
              <chakra.span color="brand.darkPink">{name}</chakra.span>
            </Heading>
          ) : (
            <Heading as="h1" fontSize="3xl">
              Encounters
            </Heading>
          )}
          <Text fontSize="lg" color="gray.500">
            List of all encounters
          </Text>
        </Box>

        <Box>
          <Text fontSize="lg">
            Search Encounters
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

      <EncountersTable
        {...{
          getTableProps,
          getTableBodyProps,
          headerGroups,
          rows,
          prepareRow,
        }}
      />
    </SpacedContainer>
  );
}
