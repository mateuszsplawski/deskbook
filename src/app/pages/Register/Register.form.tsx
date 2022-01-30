import { Formik } from "formik";
import { registerValidationSchema, RegisterFieldset } from "lib/form-kit";
import { useTranslations } from "lib/translations";
import { Button } from "lib/ui-kit";
import { StyledRegisterForm as Form } from "./Register.styles";

type RegisterFormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

const initialValues: RegisterFormValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

export const RegisterForm = () => {
  const t = useTranslations();

  const handleSubmit = (values: RegisterFormValues) => {
    console.log(values);
  };
  return (
    <Formik
      validationSchema={registerValidationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form noValidate>
        <RegisterFieldset />
        <Button type="submit">{t("registerPage.buttonText")}</Button>
      </Form>
    </Formik>
  );
};
