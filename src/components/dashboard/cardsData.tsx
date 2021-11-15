import Calendar from "../../static/calendar.svg";
import Profile from "../../static/profile.svg";
import Chat from "../../static/messages.svg";
import Settings from "../../static/settings.svg";
import Specialities from "../../static/specialities.svg";
import AccountSettings from "../../static/supervised_user_circle.svg";
import AppointmentBookingSystem from "../../static/group.svg";
import Invoice from "../../static/invoice.svg";
import LogOut from "../../static/account_logout.svg";

export default [
  {
    id: "calender",
    Icon: Calendar,
    title: "Appointment",
  },
  {
    id: "profile",
    Icon: Profile,
    title: "Profile",
  },
  {
    id: "chat",
    Icon: Chat,
    title: "Chat",
  },
  {
    id: "settings",
    Icon: Settings,
    title: "Profile Setting",
  },
  {
    id: "specialities",
    Icon: Specialities,
    title: "Specialities",
  },
  {
    id: "account_settings",
    Icon: AccountSettings,
    title: "Account Settings",
  },
  {
    id: "appointment_booking_system",
    Icon: AppointmentBookingSystem,
    title: (
      <>
        Appointment
        <br />
        booking system
      </>
    ),
  },
  {
    id: "invoice",
    Icon: Invoice,
    title: "Invoice",
  },
  {
    id: "logout",
    Icon: LogOut,
    title: "Log Out",
  },
];
