import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import DialogTitle from '@material-ui/core/DialogTitle';
import SaveIcon from '@material-ui/icons/Save';

import './style.css'
import { Formik } from 'formik';



const TitleMode = (mode) => {
    switch (mode) {
        case 'Add':     
            return ['Add Idea', 'Agregar']
        case 'Edit':     
            return ['Edit Idea', 'Modificar']
        case 'View':     
            return ['View Idea', '']
        default:
            break;
    }
}

const IdeaModel = ({
    open, 
    handleClose, 
    mode, 
    initialValues, 
    onSubmit,
}) => {
    
    return (
        <div>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            
            
            
            <DialogTitle id="form-dialog-title"><h3>{TitleMode(mode)[0]}</h3></DialogTitle>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
            >
                { formik => (
                    <form onSubmit={formik.handleSubmit}>
                        <DialogContent className="dialog-content">        
                            <TextField 
                                id="titulo" 
                                placeholder="Title"
                                variant="outlined" 
                                fullWidth
                                className='textfield__title'
                                margin='normal'
                                disabled={mode === 'View'}
                                required
                                onChange={formik.handleChange}
                                value={formik.values.titulo}
                            />
                            <TextareaAutosize
                                    rows="7"
                                    id="descripcion"
                                    className='textarea__description'
                                    aria-label="maximum height"
                                    placeholder="Description of the idea"
                                    disabled={mode === 'View'}
                                    required
                                    onChange={formik.handleChange}
                                    value={formik.values.descripcion}
                            />
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={() => handleClose()} color="primary">
                            Volver
                        </Button>
                        { mode !== 'View' && 
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                type="submit"
                                startIcon={<SaveIcon />}
                            >
                                {TitleMode(mode)[1]}
                            </Button>
                        }

                        
                        </DialogActions>
                    </form>
                )}
            </Formik>
        </Dialog>
        </div>
    );
}

export default IdeaModel;