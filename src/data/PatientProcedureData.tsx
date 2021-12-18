import {
  Box, Flex, IconButton, Link, useToast,
} from "@chakra-ui/react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Column } from "react-table";
import { AxiosInstance } from "axios";
import { useContext } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { AxiosContext } from "../contexts/AxiosContext";
import { IPatientProcedure } from "../hooks/patientProcedure/usePatientProcedureAdd";

const deletePatientProcedure = async (axios: AxiosInstance, id:string) => axios.delete(`ehr/encounters/patient-procedure/${id}`)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export const columns: Column<IPatientProcedure>[] = [
  {
    Header: "",
    accessor: "date",
    Cell: ({ value }:any) => (
      <Flex>
        <Box color="#0029FF" whiteSpace="nowrap">
          {value}
        </Box>
      </Flex>
    ),
  },
  {
    Header: "",
    accessor: "code",
    Cell: ({ value }:any) => (
      <Flex>
        <Box color="#0029FF" mr="4px">ICU: </Box>
        {" "}
        {value}
      </Flex>
    ),
  },
  {
    Header: "",
    accessor: "description",
    Cell: ({ value }:any) => (
      <Box>
        <Box as="span" color="#0029FF" mr="4px">Desc: </Box>
        {" "}
        {value}
      </Box>
    ),
  },
  {
    Header: "",
    accessor: "status",
    Cell: ({ value }:any) => (
      <Flex>
        <Box color="#0029FF" mr="4px">Status: </Box>
        {" "}
        {value}
      </Flex>
    ),
  },

  {
    Header: "",
    accessor: "id",
    Cell: ({ value }: { value: string}) => {
      const queryClient = useQueryClient();
      const axios = useContext<AxiosInstance | null>(AxiosContext);
      const toast = useToast();

      const usePatientProcedureDelete = () => useMutation(
        (id:string) => deletePatientProcedure(axios as AxiosInstance, id),
        {
          mutationKey: "patientProcedureDelete",
          retry: false,
          onSuccess: () => {
            queryClient.invalidateQueries("patient_procedures");
            toast({ title: "Success!", description: "Data deleted successfully!", status: "success" });
          },
          onError: (error:any) => {
            toast({ title: "Failed!", description: error.message || "Data delete unsuccessful!", status: "error" });
          },
        },
      );

      const {
        mutate: deletePatient,

      } = usePatientProcedureDelete();

      return (
        <Flex>
          <Link href={`/patients/encounters-data/patient-procedure/${value}/edit`}>
            <IconButton
              icon={<FiEdit size="24" color="#0029FF" />}
              backgroundColor="transparent"
              aria-label="mute-unmute"
              size="md"
              rounded="full"
            />

          </Link>
          <IconButton
            onClick={() => {
              deletePatient(value);
            }}
            icon={<FiTrash2 size="24" color="#A42BAD" />}
            backgroundColor="transparent"
            aria-label="mute-unmute"
            size="md"
            rounded="full"
          />
        </Flex>
      );
    },
  },

];

export default { columns };
