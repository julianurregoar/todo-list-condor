import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import { signFomrSchema } from '../../utils/formikSchemas';
import { SignForm } from '../../components';
import { UserContext } from '../../context/UserContext';

const Login = () => {
  const { user, login } = useContext(UserContext);
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: signFomrSchema,
    onSubmit: (values) => {
      login(values);
    },
  });

  if (user) {
    return <Redirect push to="/tasks" />;
  }

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
