import Calendar from "../../static/calendar.svg";
import Chat from "../../static/messages.svg";
import Settings from "../../static/settings.svg";
import Specialties from "../../static/specialties.svg";
import AccountSettings from "../../static/supervised_user_circle.svg";
import AppointmentBookingSystem from "../../static/Schedulesettings.svg";
import Patientlist from "../../static/Patientlist.svg";
import Payout from "../../static/Payout.svg";
import Invoice from "../../static/invoice.svg";
import LogOut from "../../static/account_logout.svg";

export default [
  {
    id: "settings",
    Icon: Settings,
    title: "Profile Settings",
    path: "/profile-settings",
  },
  {
    id: "inbox",
    Icon: Chat,
    title: "Inbox",
    path: "/inbox",
  },
  {
    id: "specialties",
    Icon: Specialties,
    title: (
      <>
        Specialties &amp;
        <br />
        Services
      </>
    ),
    path: "/specialties-services",
  },
  {
    id: "calendar",
    Icon: Calendar,
    title: "Appointments",
    path: "/appointments",
  },
  {
    id: "schedule-settings",
    Icon: AppointmentBookingSystem,
    title: "Schedule Settings",
    path: "/schedule-settings",
  },
  {
    id: "patient-list",
    Icon: Patientlist,
    title: "Patient List",
    path: "/patient-list",
  },
  {
    id: "payouts-settings",
    Icon: Payout,
    title: "Payouts Settings",
    path: "/payouts-settings",
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
