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
    <List color="#0a001a" fontSize="lg" spacing={4}>
      {
        listData.map((item) => (
          <ListItem key={item} d="flex" flexDir="row" alignItems="baseline">
            <ListIcon as={FaCircle} color="#FF00FF" />
            <Box color="#170041">{item}</Box>
          </ListItem>
        ))
      }
    </List>
  </div>
);

export default PinkBulletList;
