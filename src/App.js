import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Content from "./Components/Content/content";

function App() {
  return (
    <ChakraProvider>
      <Content />
    </ChakraProvider>
  );
}

export default App;
