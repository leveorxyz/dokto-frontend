export type CalendarEvent = {
  id: string | number;
  type: string;
  doctorName: string;
  date: string;
  time: string;
  bgColor: string;
  textColor: string;
};

export const Events: CalendarEvent[] = [
  {
    id: 1,
    type: "Dentist",
    doctorName: "John Doe",
    date: "2020-12-01",
    time: "10:00 PM",
    bgColor: "#16D090",
    textColor: "white",
  },
  {
    id: 2,
    type: "Radiography",
    doctorName: "John Doe",
    date: "2020-12-05",
    time: "10:00 PM",
    bgColor: "#FF6760",
    textColor: "white",
  },
  {
    id: 3,
    type: "Orphopedic",
    doctorName: "John Doe",
    date: "2020-12-20",
    time: "10:00 PM",
    bgColor: "#FAC032",
    textColor: "black",
  },
];

export default Events;
