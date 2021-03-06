import React, { useContext } from 'react';
import { Formik } from 'formik';
import { Redirect } from 'react-router-dom';
import RenderSignInForm from '@hotel/components/SignIn/RenderSignInForm';
import * as Yup from 'yup';
import { AuthContext } from '../../context/AuthProvider';
import { FORGET_PASSWORD_PAGE } from '../../settings/constant';

const initialValues = {
  username: '',
  password: '',
  rememberMe: false,
};

const getLoginValidationSchema = () => {
  return Yup.object().shape({
    username: Yup.string().required('Username is Required!'),
    password: Yup.string()
      .min(6, 'Password has to be longer than 6 characters!')
      .max(20, 'Too Long!')
      .required('Password is required!'),
  });
};

export default () => {
  const { signIn, loggedIn, error } = useContext(AuthContext);

  if (loggedIn) return <Redirect to={{ pathname: '/' }} />;

  const handleSubmit = formProps => {
    signIn(formProps);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      render={props => (
        <RenderSignInForm
          {...props}
          error={error}
          forgetPasswordLink={FORGET_PASSWORD_PAGE}
        />
      )}
      validationSchema={getLoginValidationSchema}
    />
  );
};
