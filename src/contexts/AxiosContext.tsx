import { useState, useEffect, createContext } from "react";
import axios, { AxiosInstance } from "axios";
import { useRecoilValue } from "recoil";

import authAtom from "../atoms/auth.atom";

export const AxiosContext = createContext<AxiosInstance | null>(null);

export default function AxiosContextProvider({ children }: { children: React.ReactNode }) {
  const [axiosInstance, setAxiosInstance] = useState<AxiosInstance | null>(null);
  const authState = useRecoilValue(authAtom);

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "",
    };

    if (authState.isLoggedIn) {
      headers.Authorization = `Bearer ${authState.user.token}`;
    }

    const ax = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      headers,
    });
    setAxiosInstance(ax);
  }, [authState]);

  return (
    <AxiosContext.Provider value={axiosInstance}>
      {children}
    </AxiosContext.Provider>
  );
}
