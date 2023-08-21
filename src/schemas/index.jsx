import * as Yup from 'yup';

export const inputValidation = Yup.object({
    input: Yup.string().required('Please fill the required fields'),
});