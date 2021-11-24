import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { useTable, useSortBy, usePagination } from "react-table";

import patientsAtom from "../../atoms/ehr/patients";
import { columns } from "../../data/PatientsData";
import PatientTable from "../../components/patients/Table";

export default function Patients() {
  const patientsData = useRecoilValue(patientsAtom);
  const memoizedColumns = useMemo(() => columns, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns: memoizedColumns,
    data: patientsData,
  },
  useSortBy, usePagination);

  return (
    <PatientTable
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
