import React from "react";
import {
  List, ListItem, ListIcon, Box, Link,
} from "@chakra-ui/react";
import { FaDotCircle } from "react-icons/fa";

type PropTypes = {
  listData: string[];
};

export default function CustomBulletList({ listData }: PropTypes) {
  return (
    <Box>
      <List fontWeight="bold" fontSize="xl" spacing={3} color="#170041">
        {
        listData.map((item) => (
          <ListItem key={item}>
            <ListIcon as={FaDotCircle} color="#3DE0FF" />
            <Link href="/" _hover={{ outline: "none" }}>{item}</Link>
          </ListItem>
        ))
      }
      </List>
    </Box>
  );
}
