import { forgot } from '@api/identity';
import { Email, Recaptcha } from '@components/Fields';
import { Fieldset, Submit } from '@components/Formik';
import { initialValues, validationSchema } from '@models/forgot';
import { Field, Form, Formik } from 'formik';
import { useRef } from 'react';

const ForgotForm = () => {
  const ref = useRef(null);
  const handleSubmit = async (values) => {
    await forgot(ref, values);
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className="space-y-4">
        <Fieldset name="email" label="Your email">
          <Field id="email" name="email" as={Email} autoFocus />
        </Fieldset>
        <Submit className="button full primary">Send password reset email</Submit>
        <Recaptcha ref={ref} />
      </Form>
    </Formik>
  );
};

export default ForgotForm;
