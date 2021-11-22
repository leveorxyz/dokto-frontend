import { Box } from "@chakra-ui/react";

export const CustomHeading = ({ children }: { children: React.ReactNode }) => (
  <Box
    as="h2"
    fontSize="lg"
    fontWeight="bold"
    w="100%"
    borderBottomWidth={1}
    borderBottomColor="brand.pink"
    borderBottomStyle="solid"
    mb={3}
  >
    {children}
  </Box>
);

export const EmptyComponent = () => (
  <Box px={3} py={6}>No one here</Box>
);

export default {
  CustomHeading,
  EmptyComponent,
};
