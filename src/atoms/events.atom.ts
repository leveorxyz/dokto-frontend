import { atom } from "recoil";

export type EventData = {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
};

export default atom<EventData[]>({
  key: "events",
  default: [],
});
