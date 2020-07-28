import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Você deve digitar um email válido')
    .matches(/^\S+@\S+\.\S+$/g)
    .min(1)
    .required('O campo email é requerido')
});

export default validationSchema;
