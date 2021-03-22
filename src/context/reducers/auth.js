import { LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_LOADING,
         REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS } from "../../constants/actionTypes";

const auth = (state, {payload, type}) => {
    switch (type) {
        case LOGIN_ERROR:
            return {
                ...state,
                auth: {
                    ...state.auth,
                    loading: false,
                    error: payload,
                }
            };

        case LOGIN_LOADING:
            return {
                ...state,
                auth: {
                    ...state.auth,
                    error: false,
                    loading: true,
                }
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                auth: {
                    ...state.auth,
                    loading: false,
                    error: false,
                    data: payload,
                }
            };

        case REGISTER_LOADING:
            return {
                ...state,
                auth: {
                    ...state.auth,
                    error: false,
                    loading: true,
                }
            };

        case REGISTER_SUCCESS:
            return {
                ...state,
                auth: {
                    ...state.auth,
                    loading: false,
                    error: false,
                    data: payload,
                }
            };

        case REGISTER_ERROR:
            return {
                ...state,
                auth: {
                    ...state.auth,
                    loading: false,
                    error: payload,
                }
            };

        default:
            return state;
    }
};


export default auth;