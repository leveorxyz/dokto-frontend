import { Column } from "react-table";
import format from "date-fns/format";
import { Patient } from "../hooks/patients/usePatients";
import PatientStatus from "../components/patients/Status";

export const columns: Column<Patient>[] = [
  {
    Header: "Account ID",
    accessor: "display_id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Phone No",
    accessor: "phone_number",
  },
  {
    Header: "Address",
    accessor: "address",
  },
  {
    Header: "Last Appointment",
    accessor: "date",
    Cell: ({ value }: { value: string}) => format(new Date(value), "MMM dd, yyyy"),
  },
  {
    Header: "Reason of Visit",
    accessor: "description",
  },
  {
    Header: "Status",
    accessor: "patient_status",
    Cell: ({ value }: { value: string}) => <PatientStatus value={value} />,
  },
];

export default { columns };
