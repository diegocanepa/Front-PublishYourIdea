import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Box,
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
    IconButton,
    makeStyles
} from '@material-ui/core';
import {
    Edit,
    Visibility,
    Chat,
    Delete
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {},
    avatar: {
        marginRight: theme.spacing(2)
    }
}));

const IdeaTable = ({ className, ideas, handleClickOpen, deleteIdea, ...rest }) => {
    const classes = useStyles();
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);

    const handleLimitChange = (event) => {
        setLimit(event.target.value);
    };

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <Card
            className={clsx(classes.root, className)}
            {...rest}
        >
            <PerfectScrollbar>
                <Box minWidth={1050}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <b>Title</b>
                                </TableCell>
                                <TableCell>
                                    <b>Description</b>
                                </TableCell>
                                <TableCell>
                                    <b>Date</b>
                                </TableCell>
                                <TableCell />
                                <TableCell />
                                <TableCell />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ideas.map((idea) => (
                                <TableRow
                                    hover
                                    key={idea.idIdea}
                                >   
                                    <TableCell>
                                        <Box
                                            alignItems="center"
                                            display="flex"
                                        >
                                            <Typography
                                                color="textPrimary"
                                                variant="body1"
                                            >
                                                {idea.titulo}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        {idea.descripcion}
                                    </TableCell>
                                    <TableCell>
                                        {moment(idea.fechaPublicacion).format('DD/MM/YYYY')}
                                    </TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => handleClickOpen('Edit', idea.idIdea, idea.fechaPublicacion, idea.idUsuario ,idea.titulo, idea.descripcion)}>
                                            <Edit />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => handleClickOpen('Edit', idea.idIdea, idea.fechaPublicacion, idea.idUsuario ,idea.titulo, idea.descripcion)}>
                                            <Visibility />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>
                                        <IconButton>
                                            <Delete onClick={() => deleteIdea(idea.idIdea)}/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </PerfectScrollbar>
            <TablePagination
                component="div"
                count={ideas.length}
                onChangePage={handlePageChange}
                onChangeRowsPerPage={handleLimitChange}
                page={page}
                rowsPerPage={limit}
                rowsPerPageOptions={[5, 10, 25]}
            />
        </Card>
    );
};

IdeaTable.propTypes = {
    className: PropTypes.string,
    customers: PropTypes.array.isRequired
};

export default IdeaTable;
