import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

import React from "react";

import { Autocomplete, Option } from "chakra-ui-simple-autocomplete";

import { SelectFieldType } from "../types/form";

const options = [
  { value: "javascript", label: "Javascript" },
  { value: "chakra", label: "Chakra" },
  { value: "react", label: "React" },
  { value: "css", label: "CSS" },
];

type DefaultProps = {
  errors: any;
  register: any;
} & Omit<SelectFieldType, "type">;

export default function MultiSelect({
  name,
  errors,
  label,
  register,
  rules,
}: DefaultProps) {
  const [result, setResult] = React.useState<Option[]>([]);
  return (
    <FormControl isInvalid={errors[name]} py={6}>
      <FormLabel htmlFor="name" color="brand.dark">{label}</FormLabel>
      <Autocomplete
        options={options}
        result={result}
        setResult={(values: Option[]) => setResult(values)}
        placeholder="Autocomplete"
        {...register(name, rules)}
      />
      <FormErrorMessage>
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
}
