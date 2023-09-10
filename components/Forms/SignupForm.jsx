import { signup } from '@api/identity';
import { Email, Input, Password, Recaptcha } from '@components/Fields';
import { Fieldset, Submit } from '@components/Formik';
import { initialValues, validationSchema } from '@models/signup';
import { Field, Form, Formik } from 'formik';
import { useRef } from 'react';

const SignupForm = () => {
  const ref = useRef(null);
  const handleSubmit = async (values) => {
    await signup(ref, values);
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className="space-y-4">
        <Fieldset name="lastName" label="Your last name">
          <Field id="lastName" name="lastName" as={Input} autoFocus />
        </Fieldset>

        <Fieldset name="firstName" label="Your first name">
          <Field id="firstName" name="firstName" as={Input} />
        </Fieldset>

        <Fieldset name="email" label="Your email">
          <Field id="email" name="email" as={Email} />
        </Fieldset>

        <Fieldset name="password" label="Your password">
          <Field id="password" name="password" as={Password} />
        </Fieldset>

        <Submit className="button full primary">Signup</Submit>
        <Recaptcha ref={ref} />
      </Form>
    </Formik>
  );
};

export default SignupForm;
