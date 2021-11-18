import {
  Box, Link, ListItem, OrderedList,
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
        <OrderedList>
          {items
            .map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
        </OrderedList>
        We have created a simple and effective way for our patients to receive
        treatment and consultationsfrom our vast network of board-certified
        doctors, therapists, and specialists.
      </Box>
      <Link href="/" color="brand.darkPink" _hover={{ outline: "none" }}>Read more</Link>
    </Box>
  </div>
);

export default DescriptionHowItWorks;
