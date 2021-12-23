import { useState } from "react";
import StarRatingComponent from "react-star-rating-component";
import {
  Heading, Box, Flex, Input, InputGroup, InputLeftElement, Select, Divider,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { IoSearch } from "react-icons/io5";
import { format } from "date-fns";

import authAtom from "../../../../atoms/auth.atom";
import reviewsAtom from "../../../../atoms/doctor-profile/reviews.atom";
import useReviews from "../../../../hooks/profile/useReviews";
import LoadingPage from "../../../common/fallback/LoadingPage";
import MessagePage from "../../../common/fallback/MessagePage";

export default function Tab4() {
  const [offsetAndLimit, setOffsetAndLimit] = useState<{ offset: number, limit: number }>({
    offset: 0,
    limit: 10,
  });
  const [searchText, setSearchText] = useState<string | undefined>();
  const reviews = useRecoilValue(reviewsAtom);
  const authState = useRecoilValue(authAtom);

  const { isSuccess, isError, error } = useReviews(
    authState.user?.username as string,
    { ...offsetAndLimit, search: searchText },
  );

  if (isError) {
    return <MessagePage status="error" title="Oops!" message={(error as any).message} />;
  }

  if (isSuccess) {
    return (
      <Box fontFamily="poppins" px="6" py="2">
        <Heading as="h3" fontSize="xl" fontWeight="normal" color="brand.dark" mb="3">Patient reviews</Heading>
        <Box color="rgba(51, 51, 51, 0.5)" fontSize="md" mb="3">All reviews have been submitted by patients after seeing the provider</Box>
        <Flex alignItems="center">
          <Box w="12%">
            <Box fontSize="sm" fontWeight="normal" color="brand.dark">Overall Rating</Box>
            <Box fontSize="5xl" fontWeight="normal" color="brand.dark">4.6</Box>
            <Box>
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={4}
                emptyStarColor="#c4c4c4"
                starColor="#ffc107"
              />
            </Box>
          </Box>
          <Select
            placeholder="Most recent"
            color="#4D4C4C"
            variant="filled"
            size="sm"
            rounded="md"
            border="2px"
            borderColor="#aeaeae"
            colorScheme="white"
            width="20%"
            sx={{
              backgroundColor: "white",
            }}
            mr={[0, 0, 5, 7]}
            my={[2, 2, 0, 0]}
          >
            {[...Array(4).keys()]
              .map((item:string| number) => (
                <option key={item} value={item}>
                  Option
                  {item}
                </option>
              ))}
          </Select>
          <InputGroup
            size="sm"
            maxWidth="20%"
            display={["none", "none", "block", "block"]}
            mr={{ base: 2, md: 1 }}
          >
            <InputLeftElement pointerEvents="none">
              <Box as={IoSearch} size="1rem" color="brand.dark" />
            </InputLeftElement>
            <Input
              rounded="md"
              variant="filled"
              placeholder="Search"
              bg="white"
              onChange={(e) => setSearchText(e.target.value)}
              sx={{
                "&": {
                  borderColor: "#aeaeae",
                },
                "&::placeholder": {
                  color: "#C2CACE",
                },
                _focus: {
                  "&": {
                    bg: "white",
                    color: "brand.dark",
                    borderColor: "#aeaeae",
                  },
                  "&::placeholder": {
                    color: "#C2CACE",
                  },
                },
                _hover: {
                  "&": {
                    bg: "white",
                    color: "brand.dark",
                    borderColor: "#aeaeae",
                  },
                  "&::placeholder": {
                    color: "#C2CACE",
                  },
                },
              }}
            />
          </InputGroup>
        </Flex>

        <Divider
          w="42.5rem"
          display={{
            base: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
          }}
        />
        {reviews.map(({
          star_count: starCount, patient_name: patientName, comment, created_at: createdAt,
        }) => (
          <Box key={`${createdAt} - ${patientName}`} my="2" pb="4">
            <StarRatingComponent
              name="rate2"
              starCount={5}
              starColor="#ffc107"
              emptyStarColor="#c4c4c4"
              value={starCount}
            />
            <Box fontSize="md" mb="2">{comment}</Box>
            <Box color="rgba(51, 51, 51, 0.5)" fontSize="sm" d="flex" alignItems="center">
              <Box>{format(new Date(createdAt), "MMM, dd yyyy")}</Box>
              <Box mx="4">|</Box>
              <Box>{patientName}</Box>
            </Box>
          </Box>
        ))}
      </Box>
    );
  }

  return <LoadingPage />;
}
