import { Field } from "formik";

import { useTranslations } from "lib/translations";
import { Input } from "lib/ui-kit";

export const EmailField = () => {
  const t = useTranslations();

  return <Field name="email" label={t("formFields.emailLabel")} as={Input} />;
};
