import React from 'react'
import Page from '../../../components/Page'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '../../../components/Stepper';
import {getStepContent, getSteps} from '../components/Steps';

import '../style/style.css';


const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.dark,
      minHeight: '100%',
      padding: theme.spacing(3)
    },
    productCard: {
      height: '100%'
    }
}));

const EditIdea = () => {
    const classes = useStyles();

    return (
        <Page
            className={classes.root}
            title="Idea Edition"
        >
            <Stepper getStepContent={getStepContent} getSteps={getSteps}/>

        </Page>
    )
}

export default EditIdea;
