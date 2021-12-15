import { useMemo } from "react";
import { useRecoilValue } from "recoil";

import authAtom from "../../atoms/auth.atom";
import NotImplemented from "../../components/NotImplemented";
import DoctorDashboard from "../../components/dashboard/DoctorDashboard";
import HospitalDashboard from "../../components/dashboard/HospitalDashboard";

export default function DashboardHome() {
  const authState = useRecoilValue(authAtom);
  const DashboardComponent = useMemo(
    () => {
      switch (authState?.user?.userType) {
        case "DOCTOR":
          return <DoctorDashboard />;
        case "PATIENT":
          return <NotImplemented />;
        case "CLINIC":
          return <HospitalDashboard />;
        case "PHARMACY":
          return <NotImplemented />;
        default:
          return <></>;
      }
    },
    [authState],
  );

  return DashboardComponent;
}
