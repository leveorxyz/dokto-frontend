import { useContext } from "react";
import { useMutation } from "react-query";
import { useToast } from "@chakra-ui/react";
import { AxiosInstance } from "axios";
import { AxiosContext } from "../../contexts/AxiosContext";

const updateRoomSettings = async (axios:AxiosInstance, data: any) => axios?.patch("/twilio/waiting-room/", data)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useCustomizeRoom() {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  const toast = useToast();

  return useMutation(
    (data: any) => updateRoomSettings(axios as AxiosInstance, data),
    {
      mutationKey: "update_room_settings",
      retry: false,
      onSuccess: () => {
        toast({ title: "Success!", description: "Data updated successfully!", status: "success" });
      },
    },
  );
}
