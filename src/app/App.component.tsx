import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./routes/Router.component";
import { GlobalStyles } from "lib/shared";
import { TranslationProvider } from "lib/translations";

export const App = () => {
  return (
    <>
      <ChakraProvider>
        <GlobalStyles />
        <BrowserRouter>
          <TranslationProvider>
            <Router />
          </TranslationProvider>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
};
