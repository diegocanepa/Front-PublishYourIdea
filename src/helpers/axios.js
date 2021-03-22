import axios from "axios";
import Cookies from "js-cookie";
import setAuthInterceptors from './interceptors';

const axiosInstance = (history = null) => {
    const baseURL = process.env.REACT_APP_BACKEND_URL;
    let headers = {};
      
    const accessToken = Cookies.get('access_token');
    if (accessToken) {
        headers.Authorization = `Bearer ${accessToken}`;
    }

    const axiosInstance = axios.create({
        baseURL: baseURL,
        headers,
    });

    setAuthInterceptors(axiosInstance, history);
    return axiosInstance;
}

export default axiosInstance;