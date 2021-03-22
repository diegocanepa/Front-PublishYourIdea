import { Grid, TextareaAutosize, TextField  } from "@material-ui/core"

const FirstStep = () => {

    return (
        <Grid className='box-editor'>
            <TextField 
                id="title" 
                label="Title" 
                variant="outlined" 
                fullWidth
                className='box-editor__title'
                margin='normal'
            />

            <TextareaAutosize
                rows="10"
                className='box-editor__description'
                aria-label="maximum height"
                placeholder="Description of the idea"
            />
        </Grid>
    )
}

export default FirstStep;