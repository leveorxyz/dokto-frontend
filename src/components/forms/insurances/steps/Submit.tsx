import { useMemo } from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import Loading from "../../../common/fallback/LoadingPage";
import stepAtom from "../../../../atoms/doctorProfileSettings";
import useUpdateInsurance from "../../../../hooks/profile-settings/updateInsurance";
import MessagePage from "../../../common/fallback/MessagePage";

export default function Submit() {
  const stepData = useRecoilValue<any>(stepAtom);

  const data = useMemo(() => ({
    ...Object.keys(stepData).reduce(
      (prev, curr) => {
        if (curr === "accept_all_insurance"
          && stepData.accepted_insurance
          && stepData.accepted_insurance.length > 0
        ) {
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
  } = useUpdateInsurance(data);

  if (isFetching) {
    return <Loading />;
  }

  if (isSuccess) {
    return <MessagePage status="success" title="Success!" message="You have successfully updated your data" />;
  }

  if (isError) {
    return <MessagePage status="error" title="Oops!" message={(error as any).message} />;
  }

  return <Navigate to="/" />;
}
