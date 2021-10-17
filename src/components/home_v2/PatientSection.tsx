import React from "react";
import { Box } from "@chakra-ui/react";
import PinkBulletList from "../common/PinkBulletList";

const PatientSection = () => {
  const listData = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis orci ut ante semper feugiat. Maecenas vitae feugiat libero, vitae consectetur felis. Morbi in ullamcorper ante, eget ornare elit. Duis eget dui suscipit, porttitor leo eget, varius leo.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis orci ut ante semper feugiat. Maecenas vitae feugiat libero, vitae consectetur felis. Morbi in ullamcorper ante, eget ornare elit. Duis eget dui suscipit, porttitor leo eget, varius leo.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis orci ut ante semper feugiat. Maecenas vitae feugiat libero, vitae consectetur felis. Morbi in ullamcorper ante, eget ornare elit. Duis eget dui suscipit, porttitor leo eget, varius leo.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis orci ut ante semper feugiat. Maecenas vitae feugiat libero, vitae consectetur felis. Morbi in ullamcorper ante, eget ornare elit. Duis eget dui suscipit, porttitor leo eget, varius leo.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis orci ut ante semper feugiat. Maecenas vitae feugiat libero, vitae consectetur felis. Morbi in ullamcorper ante, eget ornare elit. Duis eget dui suscipit, porttitor leo eget, varius leo.",
  ];

  return (
    <div>
      <Box mb="50">
        <PinkBulletList listData={listData} />
      </Box>
    </div>
  );
};

export default PatientSection;
