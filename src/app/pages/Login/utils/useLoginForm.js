import {useContext, useEffect, useState} from 'react';
import * as yup from 'yup';
import { GlobalContext} from '../../../../context/Provider';
import {login}  from '../../../../context/actions/auth/login';
import { useHistory } from 'react-router-dom';

const useLoginForm = () => {
    const [errorLogin, setErrorsRegister] = useState();
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
        if (data) {
            if (data.user){
                history.push("/api/ideas");
            }
        }
    }, [data, history])
    

    const OnSubmit = (values) => {
        login(values)(authDispatch);
    };


    const SigninSchema = yup.object({
        email: yup.string()
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup.string()
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Passord is required'),
    });

    const initialValues = {
        email: '',
        password: '',
    };


    return { SigninSchema, initialValues, OnSubmit, loading, error, errorLogin };
}


export default useLoginForm; 

