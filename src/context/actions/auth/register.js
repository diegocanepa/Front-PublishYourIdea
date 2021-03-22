import { REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS } from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axios";

export const register = ({ firstName, lastName, email, password }) => (dispatch) => {

    dispatch({
        type: REGISTER_LOADING,
    })

    axiosInstance()
        .post("/Identity/register",{ 
            firstName, 
            lastName, 
            email, 
            password 
        })
        .then((res) => {
            if (res.data.success) {
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: res.data,
                });
            } else {
                dispatch({
                    type: REGISTER_ERROR,
                    payload: res.data,
                })
            }
        })
        .catch((err) => {
            dispatch({
                type: REGISTER_ERROR,
                payload: err.response.data? err.response.data : "COULD NOT CONNECT",
            });
        });
}