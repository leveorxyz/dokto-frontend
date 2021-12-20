import { useMemo } from "react";
import { useRecoilValue } from "recoil";

import authAtom from "../../atoms/auth.atom";
import DoctorDashboard from "../../components/dashboard/DoctorDashboard";
import PatientDashboard from "../../components/dashboard/PatientDashboard";
import HospitalDashboard from "../../components/dashboard/HospitalDashboard";
import PharmacyDashboard from "../../components/dashboard/PharmacyDashboard";

export default function DashboardHome() {
  const authState = useRecoilValue(authAtom);
  const DashboardComponent = useMemo(
    () => {
      switch (authState?.user?.userType) {
        case "DOCTOR":
          return <DoctorDashboard />;
        case "PATIENT":
          return <PatientDashboard />;
        case "CLINIC":
          return <HospitalDashboard />;
        case "PHARMACY":
          return <PharmacyDashboard />;
        default:
          return <></>;
      }
    },
    [authState],
  );

  return DashboardComponent;
}
