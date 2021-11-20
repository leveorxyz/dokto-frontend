import React from "react";
import {
  Box,
} from "@chakra-ui/react";
import ProfileSideCard from "./ProfileSideCard";
import ProfileRightData from "./ProfileRightDate";

const ProfileRightRow = () => (
  <div>
    <Box display="flex" flexDir="column" borderColor="#A42BAD">
      {ProfileRightData.map(({
        id, image, title, description,
      }) => (

        <ProfileSideCard
          key={id}
          image={image}
          title={title}
          description={description}
        />

      ))}
    </Box>
  </div>
);

export default ProfileRightRow;
