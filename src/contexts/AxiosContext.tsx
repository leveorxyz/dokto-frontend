import { useMemo, createContext } from "react";
import axios, { AxiosInstance } from "axios";
import { useRecoilValue } from "recoil";

import authAtom from "../atoms/auth.atom";

export const AxiosContext = createContext<AxiosInstance | null>(null);

export default function AxiosContextProvider({ children }: { children: React.ReactNode }) {
  const authState = useRecoilValue(authAtom);

  const axiosInstance = useMemo(() => {
    type HeaderType = {
      Authorization?: string;
      "Content-Type"?: string;
      Accept: string;
    };

    const headers: HeaderType = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    if (authState.isLoggedIn) {
      headers.Authorization = `Bearer ${authState.user.token}`;
    }

    const ax = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      headers,
    });

    return ax;
  }, [authState]);

  return (
    <AxiosContext.Provider value={axiosInstance}>
      {children}
    </AxiosContext.Provider>
  );
}
