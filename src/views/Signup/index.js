import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import { signFomrSchema } from '../../utils/formikSchemas';
import { SignForm } from '../../components';
import { UserContext } from '../../context/UserContext';

const Signup = () => {
  const { user, signup } = useContext(UserContext);
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: signFomrSchema,
    onSubmit: (values) => {
      signup(values);
    },
  });

  if (user) {
    return <Redirect push to="/tasks" />;
  }

  return (
    <SignForm
      title="Signup"
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      values={values}
      errors={errors}
    />
  );
};

export default Signup;
