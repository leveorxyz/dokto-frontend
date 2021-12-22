/* eslint-disable camelcase */
import { atom } from "recoil";

export type Review = {
  patient_name: string;
  star_count: number;
  comment: string;
  created_at: string;
};

export type SearchOffsetAndLimit = {
  prevOffset: number | null;
  nextOffset: number | null;
  limit: number;
  count: number;
};

export const ReviewSearchParamsAtom = atom<SearchOffsetAndLimit>({
  key: "review-search-params",
  default: {
    count: 10,
    prevOffset: 0,
    nextOffset: 10,
    limit: 10,
  },
});

export default atom<Review[]>({
  key: "reviews",
  default: [],
});
