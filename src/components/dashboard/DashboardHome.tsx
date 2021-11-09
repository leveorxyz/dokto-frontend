import React from "react";
import {
  Box, Grid, Image,
} from "@chakra-ui/react";
import Typography from "@material-ui/core/Typography";
import Calendar from "../../static/calendar.svg";
import Profile from "../../static/profile.svg";
import Chat from "../../static/messages.svg";
import Settings from "../../static/settings.svg";
import Specialities from "../../static/specialities.svg";
import AccountSettings from "../../static/supervised_user_circle.svg";
import AppointmentBookingSystem from "../../static/group.svg";
import Invoice from "../../static/invoice.svg";
import LogOut from "../../static/account_logout.svg";

import CardDashboardHome from "./CardDashboardHome";

const facts = [
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

const DashboardHome = () => (
  <div>
    <Box py={12} bg="rgba(255, 255, 255, 0.35)">
      <Box mx={[3, 3, "10%", "10%"]}>
        <Box pb="10" color="#11142D" fontSize="4xl" fontWeight="bold">Dashboard</Box>
        <Grid
          templateColumns={{
            sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)", base: "repeat(1, 1fr)",
          }}
          gap={12}
        >
          {facts.map(({ id, Icon, title }) => (
            <CardDashboardHome
              key={id}
              icon={<Image src={Icon} />}
              title={title}
            />
          ))}
        </Grid>
        <Typography variant="h1" color="secondary" align="center">Create new</Typography>
      </Box>
    </Box>
  </div>
);

export default DashboardHome;
