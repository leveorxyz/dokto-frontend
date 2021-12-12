import { useState, useMemo } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import {
  Flex,
  Box,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  Spacer,
  FormControl,
  Select,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { SpacedContainer } from "../../../components/common/Containers";
import LoadingPage from "../../../components/common/fallback/LoadingPage";
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
                  <Box>
                    {" "}
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

                  </Box>
                </Box>

              </>
            )
            : <Box>No Data Found</Box>}
        </Box>
      </PatientEncountersLayout>
    );
  }
  return <></>;
}
