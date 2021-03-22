import React from 'react';
import Grid from '@material-ui/core/Grid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {Link} from 'react-router-dom';
import './style/style.css';


const MailConfirm = ({ handleLogin, email }) => {

    return (
        <Grid item xs={12} className="card-content">
            <MailOutlineIcon className="icon" />
            <h1 className="card-title">Confirm your email address!</h1>
            <p className="card-description">
                A confirmation e-mail has been sent
                            <br /><br />
                            Check your inbox and click on the "Confirm my email" link to confirm your email address.
                        </p>
            <br />
            <Grid item>
                <Link to="/auth/login">
                    Already have an account? Sign in
                </Link>
            </Grid>
        </Grid>

    );
}


export default MailConfirm;