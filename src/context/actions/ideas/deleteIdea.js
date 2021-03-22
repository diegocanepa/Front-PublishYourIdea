import { DELETE_IDEA_ERROR, DELETE_IDEA_LOADING, DELETE_IDEA_SUCCESS, IDEAS_LOAD_SUCCESS } from "../../../constants/actionTypes"
import { CONNECTION_ERROR } from "../../../constants/api"
import axiosInstance from "../../../helpers/axios"

const deleteIdea = (history, idIdea) => (dispatch) =>{
    dispatch({
        type: DELETE_IDEA_LOADING,
        payload: idIdea
    })

    axiosInstance(history)
        .delete(`/Idea/${idIdea}`)
        .then((res) => {
            dispatch({
                type: DELETE_IDEA_SUCCESS,
                payload: idIdea 
            })
        })
        .catch( (err) => {
            dispatch({
                type: DELETE_IDEA_ERROR,
                payload: err.response ? err.response.data : CONNECTION_ERROR,
            })
        })
}

export default deleteIdea;