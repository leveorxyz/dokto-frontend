import { useMemo } from "react";
import { useRecoilValue } from "recoil";

import authAtom from "../../../atoms/auth.atom";
import NotImplemented from "../../../components/NotImplemented";
import PatientProfileSettings from "./PatientProfileSettings";
import DoctorProfileSettings from "./DoctorProfileSettings";
import HospitalProfileSettings from "./HospitalProfileSettings";

export default function ProfileSettings() {
  const authState = useRecoilValue(authAtom);

  const ProfileSettingsPage = useMemo(
    () => {
      switch (authState.user?.userType ?? "") {
        case "PATIENT":
          return <PatientProfileSettings />;
        case "DOCTOR":
          return <DoctorProfileSettings />;
        case "CLINIC":
          return <HospitalProfileSettings />;
        case "PHARMACY":
        case "ADMIN":
          return <NotImplemented />;
        default:
          return <></>;
      }
    },
    [authState],
  );

  return ProfileSettingsPage;
}
