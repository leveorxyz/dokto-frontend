import { SpacedContainer } from "../../components/common/Containers";
import PatientRegistration from "../../components/forms/patient-registration";

export default function Provider() {
  return (
    <>
      {/* TODO: Implement header component */}

      <SpacedContainer py={12}>
        <PatientRegistration />
      </SpacedContainer>
    </>
  );
}
