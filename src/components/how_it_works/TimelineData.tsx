import {
  IoIosCalendar, IoIosHeart, IoIosSearch, IoIosThumbsUp,
} from "react-icons/io";

export default [
  {
    id: 1,
    title: "Register",
    description:
      "Simply register an account with basic information to create a starter profile. Your information is securely stored for all future visits.",
    Icon: IoIosSearch,
  },
  {
    id: 2,
    title: "Request",
    description:
      "Search through our network of doctors and providers for a professional with your required specialty. Request a consultation, stating your complaint and your preferred method of communication. Consultations can be carried out through video, phone, SMS text or chat.",
    Icon: IoIosCalendar,
  },
  {
    id: 3,
    title: "Attend",
    description:
      "Your doctor will attend your appointment and provide medical consultation at the scheduled date and time after reviewing your medical history. All encounters are securely stored according to HIPAA requirements to provide other healthcare providers with comprehensive notes on your welfare.",
    Icon: IoIosHeart,
  },
  {
    id: 4,
    title: "Treat",
    description:
      "Our doctors can diagnose and treat numerous non-emergency medical issues. If medically necessary, they can also provide a prescription to your pharmacy of choice. Our aim is to give you access to quality healthcare and get you feeling better as quickly as possible.",
    Icon: IoIosThumbsUp,
  },
];
