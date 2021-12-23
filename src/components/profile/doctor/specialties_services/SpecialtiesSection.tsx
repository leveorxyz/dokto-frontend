import { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Select,
  IconButton,
  Button,
} from "@chakra-ui/react";

import { IoTrashOutline, IoAddCircle } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";

type Profession = {
  name: string;
  professionCode: string;
  services: string[];
};

type Service = {
  name: string;
  price: number;
};

type ProfessionalServices = {
  name: string;
  professionCode: string;
  services: Service[];
}

const dummyAllProfessions: Profession[] = [
  {
    name: "Cardiologist",
    professionCode: "cardiologist",
    services: ["Cardiac catheterization", "Cardiac electrophysiology", "Cardiac imaging", "Cardiac electrophysiology"],
  },
  {
    name: "Dentist",
    professionCode: "dentist",
    services: ["Dental implant", "Dental checkup", "Dental services"],
  },
];

const dummyProfessionalServices: ProfessionalServices[] = [
  {
    name: "Cardiologist",
    professionCode: "cardiologist",
    services: [
      { name: "Cardiac catheterization", price: 200 },
      { name: "Cardiac electrophysiology", price: 80 },
    ],
  },
];

const SpecialtiesSection = () => {
  const [
    professionalServices,
    setProfessionalServices,
  ] = useState<ProfessionalServices[]>(dummyProfessionalServices);

  return (
    <Box bg="white" borderRadius="0.5rem" p={6}>
      <Heading as="h3" fontSize="lg" fontWeight={400} color="brand.darkPink">Offered Services</Heading>

      {professionalServices?.map((professionalService) => (
        <Box
          key={professionalService.name}
          bg="rgba(112, 2, 199, 0.03)"
          rounded="lg"
          my={6}
          p={6}
        >
          <Flex wrap="nowrap" py={2}>
            <Select
              borderColor="brand.darkPink"
              _hover={{ borderColor: "brand.darkPink" }}
              isDisabled
              isReadOnly
            >
              <option value={professionalService.name}>{professionalService.name}</option>
            </Select>

            <IconButton
              icon={<IoTrashOutline size="1.5rem" />}
              aria-label={`Delete ${professionalService.name}`}
              variant="solid"
              bg="#ff0000"
              color="white"
              ml={3}
              _hover={{ opacity: 0.8 }}
            />
          </Flex>

          <Flex justifyContent="flex-end" py={2}>
            <Button
              bg="brand.darkPink"
              color="white"
              _hover={{ bg: "brand.darkPink", opacity: 0.8 }}
            >
              Add Services
            </Button>
          </Flex>

          {professionalService.services.map((service) => (
            <Flex
              key={`${professionalService.name}-${service}`}
              bg="white"
              wrap="nowrap"
              p={2}
              my={2}
              alignItems="center"
              rounded="lg"
              borderWidth={1}
              borderStyle="solid"
              borderColor="brand.darkPink"
            >
              <Box>{service.name}</Box>
              <Box ml="auto">{service.price}</Box>
              <IconButton
                icon={<FiEdit size="1.2rem" />}
                size="sm"
                aria-label={`Edit ${service.name}`}
                variant="solid"
                bg="#3DE0FF"
                color="white"
                ml={3}
                _hover={{ opacity: 0.8 }}
              />
              <IconButton
                icon={<IoTrashOutline size="1.2rem" />}
                size="sm"
                aria-label={`Delete ${service.name}`}
                variant="solid"
                bg="#ff0000"
                color="white"
                ml={3}
                _hover={{ opacity: 0.8 }}
              />
            </Flex>
          ))}

          <Button
            bg="#7002C7"
            color="white"
            _hover={{ bg: "#7002C7", opacity: 0.8 }}
            leftIcon={<IoAddCircle size="1.2rem" />}
            my={3}
          >
            Add New Profession
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default SpecialtiesSection;
