import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  lastName: Yup.string().required(),
  firstName: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
});

export const initialValues = {
  lastName: '',
  firstName: '',
  email: '',
  password: '',
};
