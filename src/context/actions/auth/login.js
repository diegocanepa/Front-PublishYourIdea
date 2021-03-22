import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axios";
const Cookies = require('js-cookie');

export const login = ({ email, password }) => (dispatch) => {

    dispatch({
        type: LOGIN_LOADING,
    })

    axiosInstance()
        .post("/Identity/login",{ 
            email, 
            password 
        })
        .then((res) => {
            if (res.data.success) {
                Cookies.set('access_token', res.data.token);
                Cookies.set('refresh_token', res.data.refreshToken);
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data,
                });
            } else {
                dispatch({
                    type: LOGIN_ERROR,
                    payload: res.data,
                })
            }
        })
        .catch((err) => {
            dispatch({
                type: LOGIN_ERROR,
                payload: err.response? err.response : "COULD NOT CONNECT",
            });
        });
}