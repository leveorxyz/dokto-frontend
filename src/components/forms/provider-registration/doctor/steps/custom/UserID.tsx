import { useState, useEffect, useRef } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Flex,
} from "@chakra-ui/react";
import { debounce } from "lodash";

import { CustomFieldType } from "../../../../types/form";
import useCheckUsername from "../../../../../../hooks/register/useCheckUsername";

type PropTypes = {
  data: CustomFieldType;
  errors: any;
  setError: any;
  clearErrors: any;
  setValue: any;
};

export default function UserID({
  data: {
    name, placeholder, label, rules,
  },
  setValue,
  setError,
  clearErrors,
  errors,
}: PropTypes) {
  const [localValue, setLocalValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const {
    mutateAsync: checkUsernameAvailability,
    // isSuccess,
    // isError,
  } = useCheckUsername();

  const debouncedUpdate = useRef(
    debounce((x) => setDebouncedValue(x), 500),
  ).current;

  useEffect(() => {
    if (rules?.required?.value && (!debouncedValue || debouncedValue === "")) {
      setError(name, { type: "required", message: "User ID is required" });
    } else {
      clearErrors(name);
    }

    checkUsernameAvailability({
      userType: "doctor",
      username: debouncedValue,
    })
      .then(() => setError(name, { type: "username", message: "User ID is taken" }))
      .catch(() => clearErrors(name));

    console.log(debouncedValue);
  },
  [
    checkUsernameAvailability,
    clearErrors,
    debouncedValue,
    name, rules?.required?.value,
    setError,
  ]);

  const handleChange = (x: string) => {
    setValue(name, x);
    setLocalValue(x);
    debouncedUpdate(x);
  };

  return (
    <FormControl isInvalid={errors[name]}>
      <FormLabel htmlFor="name">{label}</FormLabel>
      <Flex>
        <Input
          flexGrow={1}
          id={name}
          placeholder={placeholder}
          mr={2}
          value={localValue}
          onChange={(e) => handleChange(e.target.value)}
        />
      </Flex>
      <FormErrorMessage>
        {errors[name] && errors[name]?.message}
      </FormErrorMessage>
    </FormControl>
  );
}
