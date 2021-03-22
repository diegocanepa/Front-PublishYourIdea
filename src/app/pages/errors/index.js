import { Grid } from '@material-ui/core';
import React from 'react';
import './style/style.css'

const ErrorPage = () => {
    return (
        <div className="root">
            <Grid container
                  justify="center"
                  alignItems="center"
                  className="grid-conteiner"
            >
                <Grid item xs={10} sm={8} md={6} lg={4} className="grid-item">
                    <h1 className='error-title'>Well, you broke the internet!</h1>
                    <h5 className='error-description'>Just kidding, looks like we have an internal issue, please try again in couple minutes</h5>
                </Grid>
            </Grid>           
        </div>
    );
}

export default ErrorPage;