import React from "react";
import {
  Calendar, View, dateFnsLocalizer, DateLocalizer,
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  startOfWeek, getDay, format, parse,
} from "date-fns";
import {
  useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody,
  ModalFooter, Button, FormControl, FormErrorMessage, FormLabel, Input, Textarea, Box,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import eventsAtom, { EventData } from "../atoms/events.atom";

interface props {
    dateLocalizer: DateLocalizer;
}

const allViews: View[] = ["agenda", "day", "week", "month"];

const locales = {
  "en-US": import("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function SelectableCalendar({ dateLocalizer }:props) {
  const [events, setEvents] = useRecoilState(eventsAtom);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register, handleSubmit, reset, formState: { isSubmitting, errors },
  } = useForm<EventData>(
    { mode: "onBlur" },
  );

  const handleSelect = ({ start, end }: any) => {
    onOpen();

    reset({
      startDate: format(start, "yyyy-MM-dd'T'HH:mm") as unknown as Date,
      endDate: format(end, "yyyy-MM-dd'T'HH:mm") as unknown as Date,
    });
  };

  const onSubmit = (data:any) => {
    onClose();
    setEvents((prev:any) => [...prev, data]);
  };

  const formatStartAccessor = (event:EventData) => new Date(event.startDate);

  const formatEndAccessor = (event:EventData) => new Date(event.endDate);

  return (
    <>
      <Calendar
        selectable
        localizer={dateLocalizer}
        events={events}
        defaultView="month"
        views={allViews}
        defaultDate={new Date()}
        onSelectEvent={() => onOpen()}
        onSelectSlot={handleSelect}
        startAccessor={formatStartAccessor}
        endAccessor={formatEndAccessor}
        titleAccessor="title"
      />
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>Add Event</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>

              <FormControl isInvalid={!!errors.title} my={6}>
                <FormLabel htmlFor="title" color="primary.dark">Title</FormLabel>
                <Input
                  type="text"
                  {...register("title", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                  name="title"
                  placeholder="Title"
                />
                <FormErrorMessage>
                  {errors.title && errors.title.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.description} my={6}>
                <FormLabel htmlFor="description" color="primary.dark">Description</FormLabel>

                <Textarea
                  {...register("description", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                  placeholder="Description"
                  size="sm"
                />
                <FormErrorMessage>
                  {errors.description && errors.description.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.startDate} my={6}>
                <FormLabel htmlFor="startDate" color="primary.dark">Start Date</FormLabel>
                <Input
                  type="datetime-local"
                  {...register("startDate", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                  name="startDate"
                  placeholder="Start Date"
                />
                <FormErrorMessage>
                  {errors.startDate && errors.startDate.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.endDate} my={6}>
                <FormLabel htmlFor="endDate" color="primary.dark">End Date</FormLabel>
                <Input
                  type="datetime-local"
                  {...register("endDate", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                  name="endDate"
                  placeholder="End Date"
                />
                <FormErrorMessage>
                  {errors.endDate && errors.endDate.message}
                </FormErrorMessage>
              </FormControl>
            </ModalBody>

            <ModalFooter display="flex" justifyContent="space-between">
              <Button variant="ghost" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                type="submit"
                bg="brand.darkPink"
                color="white"
                _hover={{ opacity: 0.85 }}
                _focus={{ opacity: 0.85 }}
                isLoading={isSubmitting}
              >
                Save
              </Button>
            </ModalFooter>
          </form>

        </ModalContent>
      </Modal>
    </>
  );
}

export default function Availability() {
  return (
    <Box height="90vh" padding={6}>
      <SelectableCalendar dateLocalizer={localizer} />
    </Box>

  );
}
