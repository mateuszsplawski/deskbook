import { Formik, FormikHelpers } from "formik";
import { useAuthentication } from "lib/authentication";

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
  const { register } = useAuthentication();

  const handleSubmit = async (
    { email, password }: RegisterFormValues,
    { resetForm }: FormikHelpers<RegisterFormValues>
  ) => {
    try {
      await register({ email, password });
      resetForm();
    } catch (e) {
      // toast error
    }
  };
  return (
    <Formik
      validationSchema={registerValidationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, dirty }) => (
        <Form noValidate>
          <RegisterFieldset />
          <Button isLoading={isSubmitting} isDisabled={!dirty} type="submit">
            {t("registerPage.buttonText")}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
