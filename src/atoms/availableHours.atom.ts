/* eslint-disable camelcase */
import { atom } from "recoil";

export type AvailableHours = {
  id: string;
  day_of_week: string;
  start_time: string;
  end_time: string;
}

export default atom<AvailableHours[]>({
  key: "AvailableHours",
  default: [],
});
