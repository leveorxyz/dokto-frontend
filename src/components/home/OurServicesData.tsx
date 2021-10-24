import Chat from "../../static/Group 129.svg";
import Hospital from "../../static/Group 131.svg";
import Capsule from "../../static/Group 133.svg";
import Stethoscope from "../../static/stethoscope.svg";

export default [
  {
    id: "people",
    Icon: Chat,
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
    Icon: Stethoscope,
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
    Icon: Hospital,
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
    Icon: Capsule,
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
