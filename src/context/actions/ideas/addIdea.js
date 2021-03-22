import { ADD_IDEA_ERROR, ADD_IDEA_LOADING, ADD_IDEA_SUCCESS } from "../../../constants/actionTypes";
import { CONNECTION_ERROR } from "../../../constants/api";
import axiosInstance from "../../../helpers/axios";

const addIdea = (history, {
    idIdea=0,
    titulo,
    descripcion,
    fechaPublicacion,
    idUsuario,
}) => (dispatch) => {
    dispatch({
        type: ADD_IDEA_LOADING
    })
    axiosInstance(history)
        .post("/Idea",{
            idIdea,
            titulo,
            descripcion,
            fechaPublicacion,
            idUsuario
        })
        .then( (res) => {
            dispatch({
                type: ADD_IDEA_SUCCESS,
                payload: res.data,
            })
        })
        .catch((err) => {
            dispatch({
                type: ADD_IDEA_ERROR,
                payload: err.response ? err.response.data : CONNECTION_ERROR
            })
        })
}

export default addIdea;