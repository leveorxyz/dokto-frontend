import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { Country, State } from "country-state-city";

import { stepAtom } from "../atoms";

export default function Submit() {
  const stepData = useRecoilValue<any>(stepAtom);
  const data = useMemo(() => ({
    ...Object.keys(stepData).reduce(
      (prev, curr) => {
        if (curr === "country") {
          return { ...prev, [curr]: Country.getCountryByCode(stepData[curr])?.name };
        }
        if (curr === "state") {
          if (stepData[curr] === "") return prev;
          return { ...prev, [curr]: State.getStateByCode(stepData[curr])?.name };
        }
        if (curr === "first_name") {
          return { ...prev, full_name: `${stepData[curr]} ${prev.full_name.trim()}` };
        }
        if (curr === "last_name") {
          return { ...prev, full_name: `${prev.full_name.trim()} ${stepData[curr]}` };
        }
        if (!stepData[curr] || stepData[curr] === "") return prev;
        return { ...prev, [curr]: stepData[curr] };
      },
      {
        full_name: "",
      },
    ),
  }), [stepData]);

  return <>{console.log(data)}</>;
}
