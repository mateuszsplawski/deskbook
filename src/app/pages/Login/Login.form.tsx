import { Formik } from "formik";
import { LoginFieldset, loginValidationSchema } from "lib/form-kit";
import { useTranslations } from "lib/translations";
import { Button } from "lib/ui-kit";
import { StyledLoginForm as Form } from "./Login.styles";

type LoginFormValues = {
  email: string;
  password: string;
};

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
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form noValidate>
        <LoginFieldset />
        <Button type="submit">{t("loginPage.buttonText")}</Button>
      </Form>
    </Formik>
  );
};
