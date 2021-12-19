import faker from "faker";
import format from "date-fns/format";

export default Array.from(Array(10).keys()).map(
  (id) => ({
    id,
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    date: format(faker.date.past(), "MMM, dd yyyy"),
    appointmentType: faker.random.arrayElement(["Consultation", "Follow Up", "Emergency Appointment"]),
  }),
);
