import { useMemo } from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import Loading from "../../../../common/fallback/LoadingPage";
import stepAtom from "../../../../../atoms/dashboard/accountSettings.atom";
import { useUpdateAccountSettings } from "../../../../../hooks/account-settings/useAccountSettings";
import MessagePage from "../../../../common/fallback/MessagePage";

export default function Submit() {
  const stepData = useRecoilValue<any>(stepAtom);

  const data = useMemo(() => ({
    ...Object.keys(stepData).reduce(
      (prev, curr) => {
        if (curr === "reason_to_delete" && stepData[curr] === "OTHER") {
          return { ...prev, [curr]: stepData.description };
        }

        if (!stepData[curr] || stepData[curr] === "") return prev;
        return { ...prev, [curr]: stepData[curr] };
      },
      {
      },
    ),
  }), [stepData]);

  const {
    error, isError, isSuccess, isFetching,
  } = useUpdateAccountSettings(data);

  if (isFetching) {
    return <Loading />;
  }

  if (isSuccess) {
    return <Navigate to="/logout" />;
  }

  if (isError) {
    return <MessagePage status="error" title="Oops!" message={(error as any).message} />;
  }

  return <></>;
}
