import { GlobalStyles } from "../lib/ui-kit/components/GlobalStyles/GlobalStyles.component";
import { Router } from "./routes/Router.component";
import { Layout } from "../lib/ui-kit";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Router />
      </Layout>
    </>
  );
};
