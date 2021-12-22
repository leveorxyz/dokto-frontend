import { useEffect } from "react";
import { useRecoilValue } from "recoil";

import stepAtom from "../../../../../atoms/dashboard/doctorProfileSettings.atom";
import MessagePage from "../../../../common/fallback/MessagePage";
import Loading from "../../../../common/fallback/LoadingPage";
import { useEducationAndExperience, useUpdateEducationExperiences } from "../../../../../hooks/profile-settings/useEducationExperiences";

export default function Submit() {
  const stepData = useRecoilValue<any>(stepAtom);
  const { mutateAsync: getCurrentData } = useEducationAndExperience();
  const {
    mutateAsync: updateData,
    error,
    isError,
    isLoading,
    isSuccess,
  } = useUpdateEducationExperiences();

  useEffect(() => {
    getCurrentData()
      .then((currentData) => {
        const newData = {
          education: [
            ...stepData.education.map((item: any) => ({
              ...item,
              operation: item.id ? "update" : "add",
            })),
            ...currentData.education
              .filter(
                (item: any) => !stepData.education.find((i: any) => i.id === item.id),
              )
              .map((item: any) => ({
                ...item,
                operation: "delete",
              })),
          ],
          experience: [
            ...stepData.experience.map((item: any) => ({
              ...item,
              operation: item.id ? "update" : "add",
            })),
            ...currentData.experience
              .filter(
                (item: any) => !stepData.experience.find((i: any) => i.id === item.id),
              )
              .map((item: any) => ({
                ...item,
                operation: "delete",
              })),
          ],
        };

        updateData(newData);
      })
      .catch((err) => console.error(err.message));
  }, [stepData, getCurrentData, updateData]);

  if (isLoading) {
    return <Loading />;
  }

  if (isSuccess) {
    return <MessagePage status="success" title="Success!" message="Successfully updated education and experience data" />;
  }

  if (isError) {
    return <MessagePage status="error" title="Oops!" message={(error as any).message} />;
  }

  return <Loading />;
}
