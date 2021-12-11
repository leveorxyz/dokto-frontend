import { Link } from "react-router-dom";
import { memo } from "react";
import {
  TableProps,
  TablePropGetter,
  TableBodyPropGetter,
  TableBodyProps,
  HeaderGroup,
  Row,
} from "react-table";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Icon,
} from "@chakra-ui/react";
import {
  IoCaretUp,
  IoCaretDown,
} from "react-icons/io5";

import { EncounteredPatient } from "../../hooks/encounteredPatients/useEncounteredPatients";

type PropTypes = {
  getTableProps: (propGetter?: TablePropGetter<EncounteredPatient> | undefined) => TableProps;
  getTableBodyProps: (propGetter?: TableBodyPropGetter<EncounteredPatient> | undefined) => TableBodyProps;
  headerGroups: HeaderGroup<EncounteredPatient>[];
  rows: Row<EncounteredPatient>[];
  prepareRow: (row: Row<EncounteredPatient>) => void;
}

function EncountersTable({
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow,
}: PropTypes) {
  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => (
          <Tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.getHeaderGroupProps().key}>
            {headerGroup.headers.map((column) => (
              <Th
                {...column.getHeaderProps(
                  column.getSortByToggleProps(),
                )}
                color="#000"
                key={column.id}
              >
                <Box
                  d="flex"
                  alignItems="center"
                >
                  {column.render("Header")}
                  <chakra.span pl="4">
                    {/* eslint-disable-next-line no-nested-ternary */}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <Icon as={IoCaretDown} aria-label="sorted descending" />
                      ) : (
                        <Icon as={IoCaretUp} aria-label="sorted ascending" />
                      )
                    ) : null}
                  </chakra.span>
                </Box>
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Tr
              {...row.getRowProps()}
              key={row.id}
              color="#3E4954"
              _hover={{
                cursor: "pointer",
                bg: "gray.100",
                color: "#3E4954",
              }}
            >
              {row.cells.map((cell) => (
                <Td
                  {...cell.getCellProps()}
                  key={cell.column.id}
                >
                  <Link to="/patients/encounters-data">
                    {cell.render("Cell")}
                  </Link>
                </Td>
              ))}
            </Tr>

          );
        })}
      </Tbody>
    </Table>
  );
}

export default memo(EncountersTable);
