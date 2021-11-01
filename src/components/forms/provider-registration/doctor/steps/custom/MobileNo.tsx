import {
  Input,
  Select,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Flex,
} from "@chakra-ui/react";
import { useController } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { Country } from "country-state-city";

import { CustomFieldType } from "../../../../types/form";
import { step1Atom } from "../../atoms";

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
    field: { ref: selectRef, ...selectProps },
    fieldState: { error: selectError, invalid: isSelectInvalid },
  } = useController({
    name: `${name}.prefix`,
    control,
    rules,
    defaultValue: (step1Data as any)[name]?.prefix ?? "",
  });
  const {
    field: { ref: inputRef, ...inputProps },
    fieldState: { error: inputError, invalid: isInputInvalid },
  } = useController({
    name: `${name}.value`,
    control,
    rules,
    defaultValue: (step1Data as any)[name]?.value ?? "",
  });

  return (
    <FormControl isInvalid={isInputInvalid || isSelectInvalid}>
      <FormLabel htmlFor={name}>{label}</FormLabel>

      <Flex wrap="nowrap">
        <Select ref={selectRef} {...selectProps} w="30%" mr={3} placeholder="Select">
          {
            Country.getAllCountries().map(
              ({ name: countryName, phonecode }) => <option key={phonecode} value={phonecode}>{`${countryName}(${phonecode})`}</option>,
            )
          }
        </Select>

        <Input
          placeholder={placeholder}
          ref={inputRef}
          {...inputProps}
          mr={2}
          w="70%"
        />
      </Flex>
      <FormErrorMessage>
        {inputError && inputError.message}
        {selectError && selectError.message}
      </FormErrorMessage>
    </FormControl>
  );
}
