import { useState, useMemo } from "react";
import {
  Flex, Heading, Button, Box, IconButton, chakra,
} from "@chakra-ui/react";
import { useFieldArray } from "react-hook-form";
import { IoTrash, IoCreate } from "react-icons/io5";

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
  watch,
  setValue,
  ...rest
}: PropTypes) {
  const {
    fields, append, remove,
  } = useFieldArray({
    control,
    name,
  });

  const [formState, setFormState] = useState<"creating" | "editing" | "hidden">("hidden");
  const [currentEditingItemIdx, setCurrentEditingItemIdx] = useState<number | null>(null);
  const shadowName = useMemo(() => `${name}__shadow`, [name]);

  const setEditing = (idx: number, data: any) => {
    setFormState("editing");
    setCurrentEditingItemIdx(idx);
    setValue(shadowName, data);
  };

  const setCreating = () => {
    setFormState("creating");
  };

  const cancel = () => {
    setFormState("hidden");
    setCurrentEditingItemIdx(null);
    setValue(shadowName, {});
  };

  const saveItem = () => {
    const data = watch(shadowName);
    if (formState === "creating") {
      append(data);
    } else if (formState === "editing") {
      setValue(name, fields.map(
        (field, index) => (index === currentEditingItemIdx
          ? ({ ...field, ...data })
          : field),
      ));
    }
    cancel();
  };

  return (
    <Flex direction="column">
      <Heading as="h4" size="md" fontWeight="600" my={4}>
        {label}
      </Heading>

      {fields?.map((field, index) => (
        <Box key={field.id} rounded="lg" bgColor="gray.100" p={2} my={2}>
          <Flex>
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
              lineHeight={0}
              mr={2}
            >
              {index + 1}
            </Box>
            <IconButton
              ml="auto"
              aria-label={`Remove ${index + 1}`}
              icon={<Box as={IoCreate} size={24} color="brand.darkSky" />}
              onClick={() => setEditing(index, field)}
            />
            <IconButton
              ml={2}
              aria-label={`Remove ${index + 1}`}
              icon={<Box as={IoTrash} size={24} color="red.600" />}
              onClick={() => remove(index)}
            />
          </Flex>

          {fieldsDetails.map((data) => (
            <Flex
              // eslint-disable-next-line react/no-array-index-key
              key={`${name}.${index}.${data.name}`}
            >
              <chakra.span fontWeight="600">
                {data.name.split("_").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                &nbsp;:&nbsp;
              </chakra.span>
              <chakra.span>
                {fields[index] && (fields[index] as any)[data.name]}
              </chakra.span>
            </Flex>
          ))}
        </Box>
      ))}

      {formState !== "hidden" && (
      <>
        {fieldsDetails.map((data) => (
          <FieldsGenerator
            key={`${shadowName}.${data.name}`}
            data={{ ...data, name: `${shadowName}.${data.name}` }}
            {...{
              control, watch, setValue, ...rest,
            }}
          />
        ))}
        <Flex>
          <Button onClick={cancel}>Cancel</Button>
          <Button onClick={saveItem} ml={2} colorScheme="purple">Save</Button>
        </Flex>
      </>
      )}

      {formState === "hidden" && (
      <Button
        width="max-content"
        variant="ghost"
        colorScheme="purple"
        color="brand.darkPink"
        mt={4}
        onClick={setCreating}
      >
        {addButtonText}
      </Button>
      )}

    </Flex>
  );
}
