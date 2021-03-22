import {useContext, useEffect, useState} from 'react';
import * as Yup from 'yup';
import { GlobalContext} from '../../../../context/Provider';
import { register } from '../../../../context/actions/auth/register';
import { useHistory } from 'react-router-dom';

const useRegisterForm = () => {

  const [errorRegister, setErrorsRegister] = useState();
  const history = useHistory();

  const {
    authDispatch, 
    authState: {
      auth: {
        loading,
        error,
        data
      }
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    if (error) {
        setErrorsRegister(error.errors[0]);
    }
  }, [error])

  useEffect(() => {
    if(data){
      history.push("/auth/email-confirm");
    }
  }, [data, history])

  console.log("loading", loading);
  console.log("error", error);

  const initialValues = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      repeatPassword: '',
  };

  const SignupSchema = Yup.object({
      firstName: Yup.string()
        .max(20, 'Must be 15 characters or less')
        .required('First name required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Last name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(8, 'Must be more than 8 characters')
        .required('Password is required')
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
      repeatPassword: Yup.string()
        .required('Confirm password is required')
        .oneOf([Yup.ref('password'), null], "Passwords must match")
  });


  const OnSubmit = (values) => {
    setErrorsRegister();
    register(values)(authDispatch);
  }

  return {initialValues, SignupSchema, OnSubmit, loading, errorRegister }
}

export default useRegisterForm;