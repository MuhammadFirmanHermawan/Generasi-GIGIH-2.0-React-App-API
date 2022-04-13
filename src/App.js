import React from "react";
import "./App.css";
import "./components/spotify-app/style.css";
import Spotify from "./components/spotify-app/index";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Spotify />
    </ChakraProvider>
  );
}

export default App;
