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
  IoChevronDown,
  IoChevronUp,
} from "react-icons/io5";

import { Patient } from "../../atoms/ehr/patients";

type PropTypes = {
  getTableProps: (propGetter?: TablePropGetter<Patient> | undefined) => TableProps;
  getTableBodyProps: (propGetter?: TableBodyPropGetter<Patient> | undefined) => TableBodyProps;
  headerGroups: HeaderGroup<Patient>[];
  rows: Row<Patient>[];
  prepareRow: (row: Row<Patient>) => void;
}

function PatientsTable({
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
                key={column.id}
              >
                {column.render("Header")}
                <chakra.span pl="4">
                  {/* eslint-disable-next-line no-nested-ternary */}
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <Icon as={IoChevronDown} aria-label="sorted descending" />
                    ) : (
                      <Icon as={IoChevronUp} aria-label="sorted ascending" />
                    )
                  ) : null}
                </chakra.span>
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Tr {...row.getRowProps()} key={row.id}>
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

export default memo(PatientsTable);
