import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import { Divider, Avatar, Grid, Paper,TextareaAutosize,Button } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));


const ThirdStep = () => {
    const classes = useStyles();

    const [comments, setComments] = useState([])


    return (
        <Grid>
            <Paper style={{ padding: "40px 20px" }}>
                <TextareaAutosize
                    rows="10"
                    className='box-editor__description'
                    aria-label="maximum height"
                    placeholder="Description of the idea"
                />
                <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.button}
                        startIcon={<SaveIcon />}
                    >
                        Publicar
                    </Button>
                {comments.length > 1 &&
                    <Grid>
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item>
                                <Avatar alt="Remy Sharp" />
                            </Grid>
                            <Grid justifyContent="left" item xs zeroMinWidth>
                                <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
                                <p style={{ textAlign: "left" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                        </p>
                                <p style={{ textAlign: "left", color: "gray" }}>
                                    posted 1 minute ago
                        </p>
                            </Grid>
                        </Grid>
                        <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item>
                                <Avatar alt="Remy Sharp" />
                            </Grid>
                            <Grid justifyContent="left" item xs zeroMinWidth>
                                <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
                                <p style={{ textAlign: "left" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                        </p>
                                <p style={{ textAlign: "left", color: "gray" }}>
                                    posted 1 minute ago
                        </p>
                            </Grid>
                        </Grid>
                    </Grid>
                }
            </Paper>
        </Grid>
    )
};


export default ThirdStep;
