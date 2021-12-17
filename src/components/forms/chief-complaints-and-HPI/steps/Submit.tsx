import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

import useChiefComplaintsAndHPIAdd from "../../../../hooks/chiefComplaintsAndHPI/useFunctionalAndCognitiveStatusAdd";
import Loading from "../../../common/fallback/LoadingPage";
import { stepAtom } from "../atoms";
import MessagePage from "../../../common/fallback/MessagePage";

export default function Submit() {
  const { id } = useParams();
  const stepData = useRecoilValue<any>(stepAtom);

  const data = useMemo(() => ({
    ...Object.keys(stepData).reduce(
      (prev, curr) => {
        if (!stepData[curr] || stepData[curr] === "") return prev;
        return { ...prev, [curr]: stepData[curr] };
      },
      {

      },
    ),
  }), [stepData]);

  const {
    error, isError, isFetching,
  } = useChiefComplaintsAndHPIAdd({ ...data, ...{ patient_encounter: id } });

  if (isFetching) {
    return <Loading />;
  }

  if (isError) {
    return <MessagePage status="error" title="Oops!" message={(error as any).message} />;
  }

  return <Navigate to="/" />;
}
