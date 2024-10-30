import { Box } from "@chakra-ui/react";
import React from "react";
import AppOne from "./components/AppOne";

const App = () => (
  <Box margin="1.2rem">
    <Box>Catalog Item</Box>
    <Box>
      <AppOne />
    </Box>
  </Box>
);

export default App;
