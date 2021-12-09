import { Box, Text, Flex } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import BacktoDashboard from "../../components/call/edit-room/BacktoDashboard";
import authAtom from "../../atoms/auth.atom";
import BrandButton from "../../components/common/buttons/BrandButton";
import WhiteButton from "../../components/common/buttons/WhiteButton";

const EditRoom = () => {
  const authState = useRecoilValue(authAtom);
  return (
    <div>
      <Box w="100%" paddingLeft="5%" paddingTop="35px">
        <BacktoDashboard />

        <Box
          backgroundColor="#fff"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.07)"
          width="60%"
          height="243px"
          marginTop="15px"
          borderRadius="10px"
          border="1px solid #dddddd"
          padding="50px"
          paddingLeft="25px"
          paddingRight="25px"
        >
          <Text fontSize="25px">{`Waiting Rooms of ${authState?.user?.fullName}`}</Text>
          <Text color="#9A9AB0" size="18px" marginTop="5px">Customize your Waiting Rooms</Text>
          <Flex marginTop="45px" justifyContent="flex-end" alignItems="center">
            <Box marginRight="20px">
              <WhiteButton>
                Revert to Default
              </WhiteButton>
            </Box>
            <BrandButton width="100px">
              Save
            </BrandButton>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default EditRoom;
