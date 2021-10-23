import { IoChatbubbleOutline } from "react-icons/io5";
import { FaRegHospital, FaCapsules, FaStethoscope } from "react-icons/fa";

export default [
  {
    id: "people",
    Icon: IoChatbubbleOutline,
    title: (
      <>
        <b>Consulation</b>
      </>
    ),
    description: (
      <>
        Consulation with a
        <br />
        trusted doctor
      </>
    ),
  },
  {
    id: "globe",
    Icon: FaStethoscope,
    title: (
      <>
        <b>Doctor</b>
      </>
    ),
    description: (
      <>
        Thousands of doctors
        <br />
        with specific or general
        <br />
        expertise
      </>
    ),
  },
  {
    id: "business",
    Icon: FaRegHospital,
    title: (
      <>
        <b>Hospital</b>
      </>
    ),
    description: (
      <>
        Look for the hospital
        <br />
        closest to your
        <br />
        location
      </>
    ),
  },
  {
    id: "pharmacy",
    Icon: FaCapsules,
    title: (
      <>
        <b>Online pharmacy</b>
      </>
    ),
    description: (
      <>
        Find a drug that
        <br />
        matches your diseases,
        <br />
        or buy it directly
      </>
    ),
  },
];
