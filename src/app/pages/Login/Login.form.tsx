import { Formik, Form } from "formik";
import { LoginFieldset } from "lib/form-kit";
import { Button } from "lib/ui-kit";

interface LoginFormValues {
  email: string;
  password: string;
}

const initialValues: LoginFormValues = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const handleSubmit = (values: LoginFormValues) => {
    console.log(values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <LoginFieldset />
        <Button type="submit" />
      </Form>
    </Formik>
  );
};
