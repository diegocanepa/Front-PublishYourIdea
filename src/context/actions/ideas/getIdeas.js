import axiosInstance from "../../../helpers/axios"
import {IDEAS_LOAD_SUCCESS, IDEAS_LOAD_ERROR, IDEAS_LOADING} from '../../../constants/actionTypes';
import {CONNECTION_ERROR} from '../../../constants/api';

export const getIdeas = (history, idUser) => (dispatch) => {
    dispatch({
        type: IDEAS_LOADING,
    })
    axiosInstance(history)
        .get(`/Idea/${idUser}`)
        .then( (res) => {
            dispatch({
                type: IDEAS_LOAD_SUCCESS,
                payload: res.data,
            })
        })
        .catch((err)=> {
            dispatch({
                type: IDEAS_LOAD_ERROR,
                payload: err.response ? err.response.data : CONNECTION_ERROR,
            })
        })
}

export default getIdeas;