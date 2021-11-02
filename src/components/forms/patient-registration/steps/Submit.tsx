import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { Country, State } from "country-state-city";

import { stepAtom } from "../atoms";

export default function Submit() {
  const stepData = useRecoilValue(stepAtom);
  const data = useMemo(() => ({
    ...Object.keys(stepData).reduce(
      (prev, curr) => {
        if (curr === "country") {
          return { ...prev, [curr]: Country.getCountryByCode((stepData as any)[curr])?.name };
        }
        if (curr === "state") {
          if ((stepData as any)[curr] === "") return prev;
          return { ...prev, [curr]: State.getStateByCode((stepData as any)[curr])?.name };
        }
        return { ...prev, [curr]: (stepData as any)[curr] };
      },
      {},
    ),
  }), [stepData]);

  return <>{console.log(data)}</>;
}
