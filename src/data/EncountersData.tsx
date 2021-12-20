import {
  Box, Flex, IconButton, Image,
} from "@chakra-ui/react";
import { Column } from "react-table";
import { FiPrinter, FiTrash2 } from "react-icons/fi";
import { BiFileBlank } from "react-icons/bi";
import format from "date-fns/format";
import signed from "../static/signed2.svg";
import unsigned from "../static/signed1.svg";
import { EncounteredPatient } from "../hooks/encounteredPatients/useEncounteredPatients";

export const columns: Column<EncounteredPatient>[] = [
  {
    Header: "Visit Date",
    accessor: "visit_date",
    Cell: ({ value }:any) => (
      <Box as="span" color="#0029FF" mr="4px">
        {format(new Date(value), "MMM dd, yyyy")}
      </Box>

    ),
  },
  {
    Header: "Provider",
    accessor: "provider_name",
  },
  {
    Header: "Location",
    accessor: "location",
  },
  {
    Header: "Reason of Visit",
    accessor: "reason",
  },
  {
    Header: "Signed",
    accessor: "signed",
    Cell: ({ value }: { value: string}) => (value ? <Image src={signed} />
      : <Image src={unsigned} />),
  },
  {
    Header: "Action",
    accessor: "id",
    Cell: ({ value }: { value: string}) => (
      <Flex>
        <IconButton
          icon={<BiFileBlank size="24" color="#2D28FF" />}
          backgroundColor="transparent"
          aria-label="mute-unmute"
          size="md"
          rounded="full"
        />
        <IconButton
          icon={<FiPrinter size="24" color="#2D28FF" />}
          backgroundColor="transparent"
          aria-label="mute-unmute"
          size="md"
          rounded="full"
        />
        <IconButton
          onClick={() => console.log(value)}
          icon={<FiTrash2 size="24" color="#A42BAD" />}
          backgroundColor="transparent"
          aria-label="mute-unmute"
          size="md"
          rounded="full"
        />
      </Flex>
    ),
  },
];

export default { columns };
