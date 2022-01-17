import { Field } from "formik";
import { useTranslations } from "lib/translations";
import { Input } from "lib/ui-kit";

export const PasswordField = () => {
  const t = useTranslations();

  return (
    <Field name="password" label={t("formFields.passwordLabel")} as={Input} />
  );
};
