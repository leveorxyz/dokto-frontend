import React from "react";
import {
  Flex, Heading, Button, Box, IconButton,
} from "@chakra-ui/react";
import { useFieldArray } from "react-hook-form";
import { IoTrash } from "react-icons/io5";

import { ArrayFieldType } from "../types/form";
import FieldsGenerator from "./FieldsGenerator";

type PropTypes = {
  data: ArrayFieldType;
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
    fields: fieldsDetails,
    addButtonText,
  },
  ...rest
}: PropTypes) {
  const {
    fields, append, remove,
  } = useFieldArray({
    control,
    name,
  });

  return (
    <Flex direction="column">
      <Heading as="h4" size="sm" my={4}>
        {label}
      </Heading>
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

      {fields.map((field, index) => (
        <React.Fragment key={field.id}>
          <Flex justifyContent="space-between">
            <Box
              display="inline-block flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              rounded="full"
              bg="brand.darkPink"
              color="white"
              fontSize="sm"
              w="2rem"
              h="2rem"
              textAlign="center"
              mr={2}
            >
              {index + 1}
            </Box>
            <IconButton
              aria-label={`Remove ${index + 1}`}
              icon={<Box as={IoTrash} size={24} color="red" />}
              onClick={() => remove(index)}
            />
          </Flex>
          {fieldsDetails.map((data) => (
            <FieldsGenerator
              // eslint-disable-next-line react/no-array-index-key
              key={`${name}.${index}.${data.name}`}
              data={{ ...data, name: `${name}.${index}.${data.name}` }}
              control={control}
              {...rest}
            />
          ))}
        </React.Fragment>
      ))}

      <Button
        width="max-content"
        variant="ghost"
        colorScheme="purple"
        color="brand.darkPink"
        onClick={() => append(fieldsDetails.reduce((prev, curr) => ({
          ...prev,
          [curr.name]: "",
        }), {}))}
      >
        {addButtonText}
      </Button>

    </Flex>
  );
}
