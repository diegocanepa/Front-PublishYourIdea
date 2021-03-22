import { UPDATE_IDEA_ERROR, UPDATE_IDEA_LOADING, UPDATE_IDEA_SUCCESS } from "../../../constants/actionTypes"
import { CONNECTION_ERROR } from "../../../constants/api"
import axiosInstance from "../../../helpers/axios"

const updateIdea = (history, {
    idIdea,
    titulo,
    descripcion,
    fechaPublicacion,
    idUsuario,
}) => (dispatch) => {

    axiosInstance(history)
        .put("/Idea", {
            idIdea,
            titulo,
            descripcion,
            fechaPublicacion,
            idUsuario 
        })
        .then((res) => {
            dispatch({
                type: UPDATE_IDEA_SUCCESS,
                payload: res.data,
            })
        })
        .catch( (err) => {
            dispatch({
                type: UPDATE_IDEA_ERROR,
                payload: err.response ? err.response.data : CONNECTION_ERROR
            })
        })
}

export default updateIdea;