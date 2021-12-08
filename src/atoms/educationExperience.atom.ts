import { atom } from "recoil";

export type EducationExperience = {
  education: {
    id: string;
    college: string;
    course: string;
    year: string;
  }[];
  experience: {
    id: string;
    establishment_name: string;
    job_title: string;
    job_description: string;
    start_date: string;
    end_date?: string;
  }[];
}

export const currentStepAtom = atom<number>({
  key: "EducationExperienceStep",
  default: 1,
});

export default atom<EducationExperience | null>({
  key: "EducationExperience",
  default: null,
});
