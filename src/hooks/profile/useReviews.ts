import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";
import { useSetRecoilState } from "recoil";
import { AxiosContext } from "../../contexts/AxiosContext";
import ReviewsAtom, { Review, ReviewSearchParamsAtom } from "../../atoms/doctor-profile/reviews.atom";

type SearchParams = { offset: number, limit: number, search?: string };

const getReviews = async (axios: AxiosInstance, { offset, limit, search }: SearchParams) => {
  const queryParams: Record<string, string | number> = { offset, limit };
  if (search) {
    queryParams.search = search;
  }

  return axios.get("dashboard/doctor/reviews/", { params: queryParams })
    .then(({ data: { result } }) => Promise.resolve(result))
    .catch(({ response: { data: response } }) => Promise.reject(response));
};

export default function useReviews(
  searchParams: SearchParams,
) {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  const setData = useSetRecoilState(ReviewsAtom);
  const setSearchParams = useSetRecoilState(ReviewSearchParamsAtom);

  return useQuery(
    ["get:reviews", axios, searchParams],
    () => getReviews(axios as AxiosInstance, searchParams),
    {
      retry: false,
      staleTime: Infinity,
      onSuccess: (data) => {
        const reviews: Review[] = data.results;
        const { next, prev, count }: {next?: string, prev?: string, count: string} = data;

        const nextOffset : number | null = next ? parseInt(next.split("offset=")[1].split("&")[0], 10) : null;
        const prevOffset : number | null = prev ? parseInt(prev.split("offset=")[1].split("&")[0], 10) : null;
        const nextLimit : number = next ? parseInt(next.split("limit=")[1].split("&")[0], 10) : 10;
        const currentCount: number = parseInt(count, 10);

        setSearchParams({
          prevOffset,
          nextOffset,
          limit: nextLimit,
          count: currentCount,
        });
        setData(reviews);
      },
    },
  );
}
