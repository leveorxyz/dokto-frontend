import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const PatientEncounters = () => (
  <Box>
    <Link to="/patients/assessment-and-diagnosis"><Button m="2rem">Assessment and Diagnosis</Button></Link>
    <Link to="/patients/plan-of-care"><Button m="2rem">Plan of Care</Button></Link>
    <Link to="/patients/patient-procedure"><Button m="2rem">Patient Procedure</Button></Link>
  </Box>
);

export default PatientEncounters;