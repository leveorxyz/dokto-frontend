import { useMemo, useState, useEffect } from "react";
import {
  Flex,
  Select,
  FormControl,
  FormLabel,
  Heading,
  Box,
  FormErrorMessage,
  Tag,
  TagLabel,
  TagCloseButton,
} from "@chakra-ui/react";

import { SelectFieldType } from "../types/form";

type DefaultProps = {
  errors: any;
  setValue: any;
  clearErrors: any;
  setError: any;
  stepData: any;
} & Omit<SelectFieldType, "type">;

export default function MultiSelect({
  name,
  errors,
  label,
  bottomText,
  optionalText,
  options,
  setValue,
  setError,
  clearErrors,
  stepData,
}: DefaultProps) {
  const [currentValues, setCurrentValues] = useState<string[] | undefined>(
    stepData && stepData[name] ? stepData[name] : [],
  );
  const shadowFieldName = useMemo(() => `${name}-shadow`, [name]);
  const labels: { [key: string]: string } = useMemo(
    () => options.reduce(
      (acc, option) => ({ ...acc, [option.value]: option.label }),
      {},
    ), [options],
  );

  const onChange = (value: string) => {
    setCurrentValues((prev) => (prev ? [...prev, value] : [value]));
    setValue(shadowFieldName, value);
    clearErrors(shadowFieldName, null);
  };

  useEffect(() => {
    setValue(name, currentValues);
    if (currentValues?.length === 0) {
      setError(shadowFieldName, {
        type: "required", message: "This field is required",
      });
    }
  }, [currentValues, name, setError, setValue, shadowFieldName]);

  return (
    <Flex direction="column">
      <FormControl isInvalid={errors[shadowFieldName]} py={4}>
        <Flex>
          <FormLabel htmlFor="name" color="brand.dark">{label}</FormLabel>
          <Box color="#c2cace">{optionalText}</Box>
        </Flex>
        <Select
          placeholder="Select"
          name={shadowFieldName}
          onChange={(e) => onChange(e.target.value)}
        >
          {options
            .filter((option) => !currentValues?.includes(option.value))
            .map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
        </Select>
        <FormErrorMessage>
          {errors[shadowFieldName] && errors[shadowFieldName].message}
        </FormErrorMessage>
      </FormControl>
      <Heading as="h2" size="sm" fontWeight="normal" py="2" color="brand.dark">{bottomText}</Heading>
      {currentValues?.length !== 0 && (
      <Flex wrap="wrap" borderWidth={1} rounded="lg" p={2}>
        {
          currentValues?.map((value: string) => (
            <Tag key={value} p={1} m={1}>
              <TagLabel>{labels[value]}</TagLabel>
              <TagCloseButton
                onClick={
                  () => setCurrentValues(
                    currentValues?.filter((v: string) => v !== value),
                  )
                }
              />
            </Tag>
          ))
        }
      </Flex>
      )}
    </Flex>
  );
}
