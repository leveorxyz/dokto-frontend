import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const PatientEncounters = () => (
  <Box>
    <Link to="/patients/assessment-and-diagnosis"><Button m="2rem">Assessment and Diagnosis</Button></Link>
    <Link to="/patients/plan-of-care"><Button m="2rem">Plan of Care</Button></Link>
    <Link to="/patients/patient-procedure"><Button m="2rem">Patient Procedure</Button></Link>
    <Link to="/patients/functional-and-cognitive-status"><Button m="2rem">Functional And Cognitive Status</Button></Link>
    <Link to="/patients/chief-complaints-and-HPI"><Button m="2rem">Chief Complaints and HPI</Button></Link>
  </Box>
);

export default PatientEncounters;
