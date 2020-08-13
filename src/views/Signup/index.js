import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { signFomrSchema } from '../../utils/formikSchemas';
import { SignForm } from '../../components';
import { UserContext } from '../../context/UserContext';

const Signup = () => {
  const { signup } = useContext(UserContext);
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
