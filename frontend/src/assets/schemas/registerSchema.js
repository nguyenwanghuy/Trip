import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  fullname: yup.string().required('Please enter a fullname'),
  email: yup
    .string()
    .email('please enter a valid email')
    .required('Please enter your email'),
  password: yup.string().min(5).required('Please enter your password'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Please enter your confirm password'),
});
