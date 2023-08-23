import * as Yup from 'yup';

export const signupSchema = Yup.object({
    email: Yup.string().email().required('Please fill out the required fields'),
    password: Yup.string().min(6).max(16).required('Enter Password'),
    confirm_password: Yup.string().required('Please fill out the required fields').oneOf([Yup.ref('password'), null], 'Passwords must match'),
});