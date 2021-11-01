import {
  Flex, Heading, Button, Box, IconButton,
} from "@chakra-ui/react";
import { useFieldArray } from "react-hook-form";
import { IoRemoveCircle } from "react-icons/io5";

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
      <Heading as="h4" size="sm" my={6}>
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

      {console.log(fields)}

      {fields.map((field, index) => (
        <>
          <Flex justifyContent="space-between">
            <Box>{index + 1}</Box>
            <IconButton
              aria-label={`Remove ${index + 1}`}
              icon={<IoRemoveCircle />}
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
        </>
      ))}

      <Button
        width="max-content"
        variant="ghost"
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
