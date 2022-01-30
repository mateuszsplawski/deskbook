import { Formik } from "formik";
import {
  resetPasswordValidationSchema,
  ResetPasswordFieldset,
} from "lib/form-kit";
import { useTranslations } from "lib/translations";
import { Button } from "lib/ui-kit";
import { StyledResetPasswordForm as Form } from "./ResetPassword.styles";

type ResetPasswordFormValues = {
  email: string;
};

const initialValues: ResetPasswordFormValues = {
  email: "",
};

export const ResetPasswordForm = () => {
  const t = useTranslations();

  const handleSubmit = (values: ResetPasswordFormValues) => {
    console.log(values);
  };
  return (
    <Formik
      validationSchema={resetPasswordValidationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form noValidate>
        <ResetPasswordFieldset />
        <Button type="submit">{t("resetPasswordPage.buttonText")}</Button>
      </Form>
    </Formik>
  );
};
