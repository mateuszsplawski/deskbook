import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./routes/Router.component";
import { Layout } from "lib/ui-kit";
import { GlobalStyles } from "lib/shared";

export const App = () => {
  return (
    <>
      <ChakraProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Layout>
            <Router />
          </Layout>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
};
