import NewMessage from "../../../static/DoctorDashboardIcons/NewMessages.png";
import NewPatients from "../../../static/DoctorDashboardIcons/NewPatients.png";
import LatestInvoices from "../../../static/DoctorDashboardIcons/LatestInvoices.png";
import Earnings from "../../../static/DoctorDashboardIcons/Earnings.png";
import MyServices from "../../../static/DoctorDashboardIcons/MyServices.png";
import VideoConferenceRoom from "../../../static/DoctorDashboardIcons/VideoConferenceRoom.png";
import ViewMyProfile from "../../../static/DoctorDashboardIcons/ViewMyProfile.png";

export const row1 = [
  {
    title: "New Messages",
    path: "/inbox",
    icon: NewMessage,
  },
  {
    title: "New Patients",
    path: "/patients",
    icon: NewPatients,
  },
  {
    title: "Latest Invoices",
    path: "/invoices",
    icon: LatestInvoices,
  },
  {
    title: "Latest Earnings",
    path: "/wallet",
    icon: Earnings,
  },
];

export const row2 = [
  {
    title: "My Services",
    path: "/services",
    icon: MyServices,
  },
  {
    title: "Video Conference Room",
    path: "/calls",
    icon: VideoConferenceRoom,
  },
  {
    title: "View My Profile",
    path: "/profile-settings/profile",
    icon: ViewMyProfile,
  },
];

export default { row1, row2 };
