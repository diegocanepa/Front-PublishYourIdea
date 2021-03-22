import React from 'react';
import {Avatar, Button, FormControlLabel, Checkbox, Grid, Typography, Backdrop, CircularProgress} from '@material-ui/core';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';

import TextFieldInput from '../../../components/MyTextField';
import MySnackbar from '../../../components/SnackBar';

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(8, 4),
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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));


const LoginForm = ({form:{initialValues, SigninSchema, OnSubmit, loading, errorLogin}}) => {
    const classes = useStyles();

    

    return (
        <div className={classes.paper}>

            <MySnackbar severity="error" message={errorLogin}/>

            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="inherit" />
            </Backdrop>

            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Formik
                initialValues={initialValues}
                validationSchema={SigninSchema}
                onSubmit={OnSubmit}
            >
                {formik => (
                    <form className={classes.form} onSubmit={formik.handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextFieldInput
                                    variant="outlined"
                                    name="email"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextFieldInput
                                    type="password"
                                    variant="outlined"
                                    name="password"
                                    required
                                    fullWidth
                                    id="password"
                                    label="Password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign In
                            </Button>
                        </Grid>
                    </form>
                )}
            </Formik>
            <br />
            <Grid container>
                <Grid item xs>
                    <Link to='/auth/register' variant="body2">
                        Forgot password?
                    </Link>
                </Grid>
                <Grid item>
                    <Link to='/auth/register' >
                        Don't have an account? Sign Up
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}

export default LoginForm;