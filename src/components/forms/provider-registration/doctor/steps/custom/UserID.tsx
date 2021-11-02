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
import { stepAtom } from "../../atoms";
import BrandButton from "../../../../../common/buttons/BrandButton";

type PropTypes = {
  data: CustomFieldType;
  control: any;
};

export default function UserID({
  data: {
    name, placeholder, label, rules,
  }, control,
}: PropTypes) {
  const step1Data = useRecoilValue(stepAtom);
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
      <Flex>
        <Input
          flexGrow={1}
          id={name}
          placeholder={placeholder}
          ref={ref}
          {...inputProps}
          mr={2}
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
