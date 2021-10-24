import React from "react";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaDotCircle } from "react-icons/fa";

type PropTypes = {
  listData: string[];
};

export default function CustomBulletList({ listData }: PropTypes) {
  return (
    <List fontWeight="bold" fontSize="xl" spacing={3}>
      {
        listData.map((item) => (
          <ListItem key={item}>
            <ListIcon as={FaDotCircle} color="#3DE0FF" />
            {item}
          </ListItem>
        ))
      }
    </List>
  );
}
