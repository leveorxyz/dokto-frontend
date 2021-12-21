import { useMemo } from "react";
import { useRecoilValue } from "recoil";

import Loading from "../../../../common/fallback/LoadingPage";
import stepAtom from "../../../../../atoms/dashboard/doctorProfileSettings.atom";
import { useUpdateProfileSettings, ProfileSettingsURLs } from "../../../../../hooks/profile-settings/useProfileSettings";
import MessagePage from "../../../../common/fallback/MessagePage";

export default function Submit() {
  const stepData = useRecoilValue<any>(stepAtom);

  const data = useMemo(() => ({
    ...Object.keys(stepData).reduce(
      (prev, curr) => {
        if (curr === "profile_photo"
          && (
            stepData[curr].endsWith(".png")
            || stepData[curr].endsWith(".jpg")
            || stepData[curr].endsWith(".svg")
          )) {
          return prev;
        }
        if (!stepData[curr] || stepData[curr] === "") return prev;
        return { ...prev, [curr]: stepData[curr] };
      },
      {},
    ),
  }), [stepData]);

  const {
    error, isError, isSuccess, isFetching,
  } = useUpdateProfileSettings(ProfileSettingsURLs.profileDetail, data);

  if (isFetching) {
    return <Loading />;
  }

  if (isSuccess) {
    return <MessagePage status="success" title="Success!" message="Successfully updated profile data" />;
  }

  if (isError) {
    return <MessagePage status="error" title="Oops!" message={(error as any).message} />;
  }

  return <></>;
}
