import { useMemo } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import { useParams } from "react-router-dom";
import {
  Alert, AlertIcon, AlertTitle, AlertDescription,
} from "@chakra-ui/react";
import usePatientProcedures from "../../../hooks/patientProcedure/usePatientProcedures";
import { columns } from "../../../data/PatientProcedureData";
import EncountersTable from "./Table";
import LoadingPage from "../fallback/LoadingPage";
import { SpacedContainer } from "../Containers";

export default function PatientProcedureTable() {
  const { id } = useParams();
  const {
    isFetching, isError, isSuccess, data,
  } = usePatientProcedures(id!);

  const memoizedColumns = useMemo(() => columns, []);
  const memoizedData = useMemo(
    () => data ?? [], [data],
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

      <EncountersTable
        {...{
          getTableProps,
          getTableBodyProps,
          headerGroups,
          rows,
          prepareRow,
        }}
      />

    );
  }
  return <></>;
}
