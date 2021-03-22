import { makeStyles, Grid, Paper, CssBaseline } from '@material-ui/core';
import React from 'react';
import RegisterForm from '../components/RegisterForm';
import UseRegisterForm from '../utils/useRegisterForm';
import '../style/style.css'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://images.wallpaperscraft.com/image/lamp_outlet_idea_electricity_120422_3840x2160.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
}));

const RegisterPage = () => {
    const classes = useStyles();


    return (
        
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item className="grid-content" xs={12} sm={8} md={5} component={Paper} elevation={6} square >
                    <RegisterForm form={UseRegisterForm()}/>
            </Grid>
        </Grid>
    )
}

export default RegisterPage;