import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Flex,
  Box,
} from "@chakra-ui/react";
import { useController } from "react-hook-form";
import { useRecoilValue } from "recoil";

import { CustomFieldType } from "../../../../types/form";
import { step1Atom } from "../../atoms";
import BrandButton from "../../../../../common/buttons/BrandButton";

type PropTypes = {
  data: CustomFieldType;
  control: any;
};

export default function MobileNo({
  data: {
    name, placeholder, label, rules,
  }, control,
}: PropTypes) {
  const step1Data = useRecoilValue(step1Atom);
  const {
    field: { ref, ...inputProps },
    fieldState: { error, invalid },
  } = useController({
    name,
    control,
    rules,
    defaultValue: (step1Data as any)[name] ?? "",
  });

  return (
    <FormControl isInvalid={invalid}>
      <FormLabel htmlFor="name">{label}</FormLabel>
      <Flex wrap="nowrap">
        <Input
          id={name}
          placeholder={placeholder}
          ref={ref}
          {...inputProps}
          mr={2}
          w="30%"
        />
        <Box>
          <BrandButton>Check Availability</BrandButton>
        </Box>
      </Flex>
      <FormErrorMessage>
        {error && error.message}
      </FormErrorMessage>
    </FormControl>
  );
}
