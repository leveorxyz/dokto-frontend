import { useState, useMemo } from "react";
import { useRecoilValue } from "recoil";
import { useTable, useSortBy, usePagination } from "react-table";
import { useDisclosure } from "@chakra-ui/react";

import patientsAtom, { Patient } from "../../atoms/ehr/patients";
import { columns } from "../../data/PatientsData";
import PatientTable from "../../components/patients/Table";
import PatientModal from "../../components/patients/OverviewModal";

export default function Patients() {
  const patientsData = useRecoilValue(patientsAtom);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentPatient, setCurrentPatient] = useState<Patient | null>(null);
  const memoizedColumns = useMemo(() => columns, []);
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
    data: patientsData,
  },
  useSortBy, usePagination);

  return (
    <>
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
    </>
  );
}
