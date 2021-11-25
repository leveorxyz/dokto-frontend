import { atom } from "recoil";

export type EventData = {
  title: string;
  description: string;
  startDate: Date | string;
  endDate: Date | string;
};

export default atom<EventData[]>({
  key: "events",
  default: [],
});
