/* eslint-disable max-len */
import React, { useState } from "react";
import {
  Calendar, View, momentLocalizer, DateLocalizer,
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const allViews: View[] = ["agenda", "day", "week", "month"];

interface props {
    dateLocalizer: DateLocalizer;
}

class CalendarEvent {
    title: string;

    allDay: boolean;

    start: Date;

    end: Date;

    desc: string;

    resourceId?: string;

    tooltip?: string;

    constructor(_title: string, _start: Date, _endDate: Date, _allDay?: boolean, _desc?: string, _resourceId?: string) {
      this.title = _title;
      this.allDay = _allDay || false;
      this.start = _start;
      this.end = _endDate;
      this.desc = _desc || "";
      this.resourceId = _resourceId;
    }
}

function SelectableCalendar({ dateLocalizer }:props) {
  const [events, setEvents] = useState([
    { start: moment(), end: moment().add(1, "hours"), title: "test" },
  ] as unknown as CalendarEvent[]);

  const handleSelect = ({ start, end }: any) => {
    const title = window.prompt("New Event name");

    if (title) {
      const newEvent = {} as CalendarEvent;
      newEvent.start = moment(start).toDate();
      newEvent.end = moment(end).toDate();
      newEvent.title = title;

      // Erroneous code
      // events.push(newEvent)
      // setEvents(events)
      setEvents([
        ...events,
        newEvent,
      ]);
    }
  };

  return (
    <>
      <div>
        <strong>
          Click an event to see more info, or drag the mouse over the calendar
          to select a date/time range.
        </strong>
      </div>
      <Calendar
        selectable
        localizer={dateLocalizer}
        events={events}
        defaultView="month"
        views={allViews}
        defaultDate={new Date(2020, 4, 21)}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={handleSelect}
        startAccessor="start"
        endAccessor="end"
        titleAccessor="title"
      />
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
