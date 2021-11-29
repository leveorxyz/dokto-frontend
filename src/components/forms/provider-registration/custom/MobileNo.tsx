import {
  Input,
  Select,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Flex,
} from "@chakra-ui/react";
import { Country } from "country-state-city";

import { CustomFieldType } from "../../types/form";

type PropTypes = {
  data: CustomFieldType;
  errors: any;
  register: any;
};

export default function MobileNo({
  data: {
    name, placeholder, label, rules,
  }, register, errors,
}: PropTypes) {
  return (
    <FormControl isInvalid={errors[`${name}-prefix`] || errors[`${name}-value`]}>
      <FormLabel htmlFor={name}>{label}</FormLabel>

      <Flex wrap="nowrap">
        <Select {...register(`${name}-prefix`, rules)} w="30%" mr={3} placeholder="Select">
          {
            Country.getAllCountries()
              .filter(({ phonecode }) => !!phonecode)
              .map(
                ({ name: countryName, phonecode }) => (
                  <option key={`${countryName}(${phonecode})`} value={phonecode}>
                    {`${countryName}(${phonecode})`}
                  </option>
                ),
              )
          }
        </Select>

        <Input
          placeholder={placeholder}
          {...register(`${name}-value`, rules)}
          mr={2}
          w="70%"
        />
      </Flex>
      <FormErrorMessage>
        {errors[`${name}-predix`]?.message}
        {errors[`${name}-value`]?.message}
      </FormErrorMessage>
    </FormControl>
  );
}
