import React from "react";
import { SpacedContainer } from "../common/Containers";
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
      <SpacedContainer mb="50">
        <PinkBulletList listData={listData} />
      </SpacedContainer>
    </div>
  );
};

export default PatientSection;
