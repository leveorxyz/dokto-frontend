import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { useTable, useSortBy, usePagination } from "react-table";
import patientEncountersAtom from "../../../atoms/ehr/patientEncounters";
import { columns } from "../../../data/PatientProcedureData";
import EncountersTable from "./Table";

export default function PatientProcedureTable() {
  const data = useRecoilValue(patientEncountersAtom);
  const memoizedColumns = useMemo(() => columns, []);
  const memoizedData = useMemo(
    () => data, [data],
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
