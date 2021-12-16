import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function TextFormatter() {
  const [value, setValue] = useState("");

  return (
    <Box p="4">
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </Box>
  );
}
