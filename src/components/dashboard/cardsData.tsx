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
    id: "profile",
    Icon: Profile,
    title: "Profile",
    path: "/profile",
  },
  {
    id: "inbox",
    Icon: Chat,
    title: "Inbox",
    path: "/inbox",
  },
  {
    id: "settings",
    Icon: Settings,
    title: "Profile Settings",
    path: "/profile-settings",
  },
  {
    id: "specialities",
    Icon: Specialities,
    title: (
      <>
        Specialities &amp;
        <br />
        Services
      </>
    ),
    path: "/specialities-services",
  },
  {
    id: "calendar",
    Icon: Calendar,
    title: "Appointments",
    path: "/appointments",
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
    path: "/appointment_booking_system",
  },
  {
    id: "invoice",
    Icon: Invoice,
    title: "Invoices",
    path: "/invoice",
  },
  {
    id: "account_settings",
    Icon: AccountSettings,
    title: "Account Settings",
    path: "/account-settings",
  },
  {
    id: "logout",
    Icon: LogOut,
    title: "Log Out",
    path: "/logout",
  },
];
