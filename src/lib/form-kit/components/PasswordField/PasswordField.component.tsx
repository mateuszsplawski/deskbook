import { Field } from "formik";
import { Input } from "lib/ui-kit";

export const PasswordField = () => {
  return <Field name="password" label="Password" as={Input} />;
};
