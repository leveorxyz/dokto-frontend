import React from "react";
import {
  Flex, Heading, Button, Box, IconButton,
} from "@chakra-ui/react";
import { useFieldArray } from "react-hook-form";
import { IoTrash } from "react-icons/io5";

import { SectionFieldType } from "../types/form";
import FieldsGenerator from "./FieldsGenerator";

type PropTypes = {
  data: SectionFieldType;
  register: any;
  errors: any;
  setValue: any;
  setError: any;
  clearErrors: any;
  watch: any;
  control: any;
  isDirty: boolean;
};

export default function ArrayField({
  control,
  data: {
    name,
    label,
    iconDelete,
    fields: fieldsDetails,
    submitButtonText,
  },
  ...rest
}: PropTypes) {
  const {
    fields,
  } = useFieldArray({
    control,
    name,
  });

  return (
    <Flex direction="column">
      <Flex justifyContent="space-between">
        <Heading as="h4" size="md" pb={4}>
          {label}
        </Heading>
        {iconDelete ? (
          <IconButton
            as="div"
            position="relative"
            top="3"
            variant="ghost"
            _hover={{ bgColor: "white" }}
            _active={{ bgColor: "white" }}
            aria-label=""
            icon={<Box as={IoTrash} size={24} color="red" />}
          />
        ) : (
          <Box />
        )}
      </Flex>
      {!fields.length && (
      <>
        {fieldsDetails.map((data) => (
          <FieldsGenerator
            key={`${name}.${0}.${data.name}`}
            data={{ ...data, name: `${name}.${0}.${data.name}` }}
            control={control}
            {...rest}
          />
        ))}
      </>
      )}
      {submitButtonText && (
      <Button
        width="100%"
        py="6"
        rounded="xl"
        color="white"
        _hover={{ opacity: ".85" }}
        _focus={{ outline: "none", opacity: ".85" }}
        bgColor="brand.darkPink"
      >
        {submitButtonText}
      </Button>
      )}
    </Flex>
  );
}
