import { atom } from "recoil";

import { dummyEncounters } from "../../data/EncountersData";

export type Encounters = {
    date: string;
    provider: string;
    location: string;
    reasonOfVisit: string;
    signed: boolean;
}

export default atom<(Encounters)[]>({
  key: "patients",
  default: dummyEncounters,
});
