import { useMemo, Suspense, lazy } from "react";
import { useRecoilValue } from "recoil";

import authAtom from "../../atoms/auth.atom";
import LoadingPage from "../../components/common/fallback/LoadingPage";

const DoctorDashboard = lazy(() => import("../../components/dashboard/DoctorDashboard"));
const PatientDashboard = lazy(() => import("../../components/dashboard/PatientDashboard"));
const HospitalDashboard = lazy(() => import("../../components/dashboard/HospitalDashboard"));
const PharmacyDashboard = lazy(() => import("../../components/dashboard/PharmacyDashboard"));

export default function DashboardHome() {
  const authState = useRecoilValue(authAtom);
  const DashboardComponent = useMemo(
    () => {
      switch (authState?.user?.userType) {
        case "DOCTOR":
          return (
            <Suspense fallback={<LoadingPage />}>
              <DoctorDashboard />
            </Suspense>
          );
        case "PATIENT":
          return (
            <Suspense fallback={<LoadingPage />}>
              <PatientDashboard />
            </Suspense>
          );
        case "CLINIC":
          return (
            <Suspense fallback={<LoadingPage />}>
              <HospitalDashboard />
            </Suspense>
          );
        case "PHARMACY":
          return (
            <Suspense fallback={<LoadingPage />}>
              <PharmacyDashboard />
            </Suspense>
          );
        default:
          return <></>;
      }
    },
    [authState],
  );

  return DashboardComponent;
}
