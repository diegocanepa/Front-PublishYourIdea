import React, {useState} from 'react'
import Page from '../../../components/Page';
import Toolbar from '../../../components/Toolbar';
import IdeaModel from '../../../components/IdeaModal';
import { makeStyles } from '@material-ui/core/styles';
import IdeaTable from '../components/IdeaTable';
import {CircularProgress, Box, Backdrop} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.dark,
      minHeight: '100%',
      padding: theme.spacing(3)
    },
    productCard: {
      height: '100%'
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));


const ListIdea = ({
    ideaState,
    updateIdea,
    deleteIdea,
    addIdea,
    state:{idea:{
        loading,
        data,
        error,
}}}) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState('Add');
    const [idea, setIdea] = useState(null);

    const handleClickOpen = (mode, idIdea=null, fechaPublicacion=null, idUsuario=null, titulo=null, descripcion=null) => {
        setOpen(true);
        setMode(mode);
        setIdea({idIdea, fechaPublicacion, idUsuario, titulo, descripcion});
        console.log(idea);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = (values) => {
        handleClose();
        if(mode === "Add") {
            addIdea(values);
        }else{
            updateIdea(values);
        }
    }

    const initialValues = idea;


    return (
        <Page
            className={classes.root}
            title = "Ideas"
        >
            <Backdrop className={classes.backdrop} open={ideaState.addIdea.loading}>
                <CircularProgress color="inherit" />
            </Backdrop>

            <Toolbar handleClickOpen={handleClickOpen}/>
            { loading ? 
                <CircularProgress /> 
                : 
                <Box mt={3}>
                    <IdeaTable ideas={data} handleClickOpen={handleClickOpen} deleteIdea={deleteIdea}/>
                </Box>
            }

            <IdeaModel 
                open={open} 
                handleClose={handleClose} 
                mode={mode}
                initialValues={initialValues}
                onSubmit={onSubmit}
                ideaState={ideaState}
            />
                
        </Page>
    )
}

export default ListIdea;
