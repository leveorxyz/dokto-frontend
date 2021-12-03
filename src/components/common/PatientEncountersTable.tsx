import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { useTable, useSortBy, usePagination } from "react-table";
import patientEncountersAtom from "../../atoms/ehr/patientEncounters";
import { columns } from "../../data/PatientEncountersData";
import EncountersTable from "../encounters/Table";
import { SpacedContainer } from "./Containers";

export default function Encounters() {
  const data = useRecoilValue(patientEncountersAtom);
  console.log(data);
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
    <SpacedContainer py={12}>

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
