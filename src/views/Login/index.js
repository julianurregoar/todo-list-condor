import React from 'react';
import { useFormik } from 'formik';
import { signFomrSchema } from '../../utils/formikSchemas';
import { SignForm } from '../../components';

const Login = () => {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: signFomrSchema,
    onSubmit: async (values) => {
      console.log('login', values);
    },
  });

  return (
    <SignForm
      title="Login"
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      values={values}
      errors={errors}
    />
  );
};

export default Login;
