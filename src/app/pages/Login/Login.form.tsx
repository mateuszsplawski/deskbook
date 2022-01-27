import { Formik } from "formik";
import { LoginFieldset } from "lib/form-kit";
import { useTranslations } from "lib/translations";
import { Button } from "lib/ui-kit";
import { StyledLoginForm as Form } from "./Login.styles";

interface LoginFormValues {
  email: string;
  password: string;
}

const initialValues: LoginFormValues = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const t = useTranslations();

  const handleSubmit = (values: LoginFormValues) => {
    console.log(values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <LoginFieldset />
        <Button type="submit">{t("loginPage.buttonText")}</Button>
      </Form>
    </Formik>
  );
};
