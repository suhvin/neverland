import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import AppRouter from "./Router";

function App() {
  return (
    <ChakraProvider>
      <AppRouter />
    </ChakraProvider>
  );
}

export default App;
