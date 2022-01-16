import { Field } from "formik";
import { Input } from "lib/ui-kit";

export const EmailField = () => {
  return <Field name="email" label="Email" as={Input} />;
};
