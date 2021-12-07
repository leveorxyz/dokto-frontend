import { atom } from "recoil";

import { dummyEncounters } from "../../data/EncountersData";

export type DiagnosticData = {
  disease: string;
  description: string;
  ICD: string;
  type: string;
  startDate: string;
  endDate: string;
  assessment: string;
  isPrimary: boolean;
}

export type MaritalData = {
  homeEnviroment: string;
  children: number;
  occupation: string;
  highestEducation: string;
  sexualOrientation: string;
  genderIdentity: string;
}

export type TobaccoUssageData = {
  status: string;
  tobaccoType: string;
  yearsSmoked: number;
  cigsPerDay: number;
  tobaccoCessation: string;
  quitDate: string;
}

export type RiskFactorsData = {
  exercise: string;
  drugUse: string;
  exposure: string;
  seatbelts: string;
}

export type DrinksData = {
  alcoholUsage: string;
  caffeineUsage: string;
  ETOHUsage: string;
}

export type Encounters = {
    date: string;
    provider: string;
    location: string;
    reasonOfVisit: string;
    signed: boolean;
    diagnosticData?: DiagnosticData;
    medicalNotes?: string;
    socialHistory?: {
      maritalData?: Partial<MaritalData>;
      tobaccoUssageData?: Partial<TobaccoUssageData>;
      riskFactorsData?: Partial<RiskFactorsData>;
      drinksData?: Partial<DrinksData>;
    };
    // action:s;
}

export default atom<(Encounters)[]>({
  key: "patients",
  default: dummyEncounters,
});
