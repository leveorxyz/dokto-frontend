import { atom } from "recoil";

export type AvailableHours = {
  day_of_week: string;
  start_time: string;
  end_time: string;
}

export const currentStepAtom = atom<number>({
  key: "AvailableHoursStep",
  default: 1,
});

export default atom<AvailableHours | null>({
  key: "AvailableHours",
  default: null,
});
