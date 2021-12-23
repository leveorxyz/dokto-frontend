import { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import { AxiosInstance } from "axios";
import { useToast } from "@chakra-ui/react";
import { AxiosContext } from "../../contexts/AxiosContext";

export type IMedicalNotes={
    generalDesc:string,
    headDesc:string,
    eyesDesc:string,
    earsDesc:string,
    noseDesc:string,
    mouthDesc:string,
    neckDesc:string,
    breastDesc:string,
    chestDesc:string,
    heartDesc:string,
    abdomenDesc:string,
    GUDesc:string,
    GynDesc:string,
    MusculoskeletalDesc:string,
    NeurologicDesc:string,
    PsychiatricDesc:string,
    generalAppearanceDesc:string,
    HeadDesc:string,
    EyesDesc:string,
    EarsDesc:string,
    NoseDesc:string,
    ThroatDesc:string,
    NeckDesc:string,
    CardiacDesc:string,
    AbdomenDesc:string,
    BackDesc:string,
    ExtremitiesDesc:string,
    LowerExtremitiesDesc:string,
    NeurologicalDesc:string,
    SkinDesc:string,
    ResDesc:string,
    RectalDesc:string,
    General: string[],
    Head: string[],
    Eyes: string[],
    Ears: string[],
    Nose: string[],
    Mouth: string[],
    Neck: string[],
    Breast: string[],
    Chest: string[],
    Heart: string[],
    Abdomen: string[],
    GU: string[],
    Gyn: string[],
    Musculoskeletal: string[],
    Neurologic: string[],
    Psychiatric: string[],
    "General Appearance": string[],
    Throat: string[],
    Cardiac: string[],
    Back: string[],
    Extremities: string[],
    LowerExtremities: string[],
    Neurological: string[],
    Skin: string[],
    Res: string[],
    Rectal: string[],
    patient_encounter?:string

}

const medicalNotes = async (axios: AxiosInstance, data: IMedicalNotes) => axios.post("/ehr/encounters/plan-of-care/", { medical_notes: data })
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useMedicalNotesAdd() {
  const queryClient = useQueryClient();
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  const toast = useToast();

  return useMutation(
    (data: IMedicalNotes) => medicalNotes(axios as AxiosInstance, data),
    {
      mutationKey: "medicalNotes",
      retry: false,

      onSuccess: () => {
        toast({ title: "Success!", description: "Data added successfully!", status: "success" });

        queryClient.invalidateQueries("prev-medicalNotes");
      },
      onError: (error:any) => {
        toast({ title: "Failed!", description: error.message || "Data add unsuccessful!", status: "error" });
      },

    },
  );
}
