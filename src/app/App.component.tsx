import { GlobalStyles } from "../lib/ui-kit/components/GlobalStyles/GlobalStyles.component";
import { Router } from "./routes/Router.component";
import { Layout } from "../lib/ui-kit";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

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
