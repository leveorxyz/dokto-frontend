import {
  Flex, Box, Link,
} from "@chakra-ui/react";
import UnderlinedHeader from "../../common/UnderlinedHeader";

const items = ["Register", "Request", "Attend", "Treat"];

const DescriptionHowItWorks = () => (
  <div>
    <Box p="10" borderColor="#170041">
      <Box mb={6}>
        <UnderlinedHeader title="How It works" underlineColor="black" alignment="flex-start" />
      </Box>
      <Box fontSize="lg" color="gray.500" mb="2">
        {items
          .map((item, idx) => (
            <Flex key={item} alignItems="center">
              <Box
                display="inline-block flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                rounded="full"
                bg="primary.light"
                color="black"
                fontSize="sm"
                w="1.5rem"
                h="1.5rem"
                textAlign="center"
                m={2}
              >
                {idx + 1}
              </Box>
              {item}
            </Flex>
          ))}
        We have created a simple and effective way for our patients to receive
        treatment and consultationsfrom our vast network of board-certified
        doctors, therapists, and specialists.
      </Box>
      <Link href="/" color="primary.light" _hover={{ outline: "none" }}>Read more</Link>
    </Box>
  </div>
);

export default DescriptionHowItWorks;
