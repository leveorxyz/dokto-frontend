import React from "react";
import {
  List, ListItem, ListIcon, Box,
} from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";

type PropTypes = {
  listData: string[];
};

const PinkBulletList = ({ listData }: PropTypes) => (
  <div>
    <List fontSize="lg" spacing={4}>
      {
        listData.map((item) => (
          <ListItem key={item} d="flex" flexDir="row" alignItems="center">
            <ListIcon as={FaCircle} color="#FF00FF" />
            <Box color="black">{item}</Box>
          </ListItem>
        ))
      }
    </List>
  </div>
);

export default PinkBulletList;
