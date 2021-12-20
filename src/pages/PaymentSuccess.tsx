import React from "react";
import {
  Box, Center, Flex, Image,
} from "@chakra-ui/react";
import { SpacedContainer } from "../components/common/Containers";
import successfulPaymentBanner from "../static/payment-success/OBJECTS.png";
import checkIcon from "../static/payment-success/Icon.png";

const PaymentSuccess = () => (
  <SpacedContainer py={20}>
    <Center>

      <Box>
        <Image src={successfulPaymentBanner} height="30rem" width="auto" fit="contain" />
      </Box>

    </Center>
    <Center mt="10">
      <Flex alignItems="center">
        <Box>
          <Image src={checkIcon} mr={8} height="10rem" width="auto" fit="contain" />
        </Box>

        <Box fontSize="46" fontWeight="500">
          Thank You!
          <br />
          Your appoinment
          <br />
          has been created.
        </Box>
      </Flex>
    </Center>
  </SpacedContainer>

);

export default PaymentSuccess;
