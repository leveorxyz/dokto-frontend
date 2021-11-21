import React, { useState } from "react";
import {
  Calendar, View, dateFnsLocalizer, DateLocalizer,
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  startOfWeek, getDay, format, parse,
} from "date-fns";
import {
  useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody,
  ModalFooter, Button, FormControl, FormErrorMessage, FormLabel, Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

type EventData = {
  title: string;
  description: string;
  startDate:Date;
  endDate:Date;

};

interface props {
    dateLocalizer: DateLocalizer;
}

const allViews: View[] = ["agenda", "day", "week", "month"];

const locales = {
  // eslint-disable-next-line global-require
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

class CalendarEvent {
    title: string;

    allDay: boolean;

    start: Date;

    end: Date;

    desc: string;

    resourceId?: string;

    tooltip?: string;

    constructor(_title: string, _start: Date, _endDate: Date, _allDay?: boolean,
      _desc?: string, _resourceId?: string) {
      this.title = _title;
      this.allDay = _allDay || false;
      this.start = _start;
      this.end = _endDate;
      this.desc = _desc || "";
      this.resourceId = _resourceId;
    }
}

function SelectableCalendar({ dateLocalizer }:props) {
  const [events] = useState([] as unknown as CalendarEvent[]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register, handleSubmit, reset, formState: { errors },
  } = useForm<EventData>();

  const handleSelect = ({ start, end }: any) => {
    onOpen();
    console.log(start, end);

    reset({
      startDate: format(start, "yyyy-MM-dd'T'HH:mm") as unknown as Date,
      endDate: format(end, "yyyy-MM-dd'T'HH:mm") as unknown as Date,
    });
  };

  const onSubmit = (data:any) => {
    console.log(data);
    // TODO store data with Recoil
  };

  return (
    <>
      <Calendar
        selectable
        localizer={dateLocalizer}
        events={events}
        defaultView="month"
        views={allViews}
        defaultDate={new Date()}
        // onSelectEvent={() => onOpen()}
        onSelectSlot={handleSelect}
        startAccessor="start"
        endAccessor="end"
        titleAccessor="title"
      />
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Event</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit(onSubmit)}>
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
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} type="submit">
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default function Availability() {
  return (
    <div style={{ height: "100vh" }}>
      <SelectableCalendar dateLocalizer={localizer} />

    </div>

  );
}
