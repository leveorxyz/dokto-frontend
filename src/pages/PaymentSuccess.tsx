import React from "react";
import {
  Box, Center, Flex, Image,
} from "@chakra-ui/react";
import { SpacedContainer } from "../components/common/Containers";
import successfulPaymentBanner from "../static/payment-success/OBJECTS.png";

const PaymentSuccess = () => (
  <SpacedContainer py={20}>
    <Center>

      <Image src={successfulPaymentBanner} ml={12} height="20rem" width="auto" fit="contain" />
      <Flex>
        <Box>
          hi
        </Box>
        <Box>
          Thank You !
          Your Appoinment has been Created.
        </Box>
      </Flex>
    </Center>
  </SpacedContainer>

);

export default PaymentSuccess;
