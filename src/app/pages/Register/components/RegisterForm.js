import React from 'react';
import {Link} from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';
import {Grid, Backdrop, CircularProgress, Button, Avatar, Typography} from '@material-ui/core';
import MySnackbar from '../../../components/SnackBar';

import TextFieldInput from '../../../components/MyTextField';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(6, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));



const RegisterForm = ({form:{initialValues, SignupSchema, OnSubmit, loading, errorRegister}}) => {
  const classes = useStyles();


  return (
    <div className={classes.paper}>

      <MySnackbar severity="error" message={errorRegister}/>

      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Formik
        initialValues = {initialValues}
        validationSchema = {SignupSchema}
        onSubmit = {OnSubmit}
      >
        { formik => (
          <form className={classes.form} onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextFieldInput
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextFieldInput
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextFieldInput
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextFieldInput
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextFieldInput
                  variant="outlined"
                  required
                  fullWidth
                  name="repeatPassword"
                  label="Confirm Password"
                  type="password"
                  id="repeatPassword"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/auth/login">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
        </form>
        )}
      </Formik>
    </div>
  )
}

export default RegisterForm;