import React from "react";
import {
  List, ListItem, ListIcon, Box,
} from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";

type PropTypes = {
  listData: string[];
  alignBullet?: "flex-start" | "center" | "flex-end";
};

const PinkBulletList = ({ listData, alignBullet }: PropTypes) => (
  <div>
    <List fontSize="lg" spacing={4}>
      {
        listData.map((item) => (
          <ListItem key={item} d="flex" flexDir="row" alignItems={alignBullet}>
            <ListIcon as={FaCircle} color="#FF00FF" my={2} />
            <Box
              fontSize="lg"
              fontWeight={300}
              lineHeight="2rem"
              color="primary.dark"
            >
              {item}
            </Box>
          </ListItem>
        ))
      }
    </List>
  </div>
);

PinkBulletList.defaultProps = {
  alignBullet: "center",
};

export default PinkBulletList;
