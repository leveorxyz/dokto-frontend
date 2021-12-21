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

import { Allergies } from "../../../atoms/ehr/allergies";

type PropTypes = {
  getTableProps: (propGetter?: TablePropGetter<Allergies> | undefined) => TableProps;
  getTableBodyProps: (propGetter?: TableBodyPropGetter<Allergies> | undefined) => TableBodyProps;
  headerGroups: HeaderGroup<Allergies>[];
  rows: Row<Allergies>[];
  prepareRow: (row: Row<Allergies>) => void;
}

function AllergiesTable({
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow,
}: PropTypes) {
  return (
    <Table {...getTableProps()} overflowX="scroll">
      <Thead>
        {headerGroups.map((headerGroup) => (
          <Tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.getHeaderGroupProps().key}>
            {headerGroup.headers.map((column) => (
              <Th
                {...column.getHeaderProps(
                  column.getSortByToggleProps(),
                )}
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
              }}
            >
              {row.cells.map((cell) => (
                <Td
                  {...cell.getCellProps()}
                  key={cell.column.id}
                >
                  {cell.render("Cell")}
                </Td>
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
}

export default memo(AllergiesTable);
