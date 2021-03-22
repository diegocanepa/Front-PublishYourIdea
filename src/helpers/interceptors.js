import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import axiosInstance from './axios';

const setAuthInterceptors = (axiosInstance, history) => {
    /*axiosInstance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if(!error.response) {
                return Promise.reject(error);
            }
            if (error.response.status === 401) {
                logOut(history);
            }else{
                return Promise.reject(error);
            }
        }
    )*/
    
    axiosInstance.interceptors.request.use(request => {
        const baseURL = process.env.REACT_APP_BACKEND_URL;
        const apiName = request.url.replace(baseURL, '');
    
        if (apiName !== '/Identity/login' && apiName !== '/Identity/register' && apiName !== '/Identity/refresh'){
            // The exp time is on seconds
            const token = Cookies.get('access_token');
            // If token is undefined it's a server side request;
            if (!token) return request;
            const decoded = jwtDecode(token);
            //We convert todays date to seconds
            const timeNow = new Date().getTime() / 1000;
            // If token is expired, we update it
            if (decoded.exp < timeNow) {
                return getNewToken()
                    .then( (data) => {
                        if (data.success) {
                            request.headers.Authorization = `Bearer ${data.token}`;
                            Cookies.set('access_token', data.token);
                            Cookies.set('refresh_token', data.refreshToken);
                            return request;
                        }else{
                            logOut(history);
                            return request;
                        }
                        
                    })
                    .catch ( (err) => {
                        Promise.reject(err);
                    })
            }  
        }
        return request;
    })
} 

const logOut = (history) => {
    if (history){
        history.push("/auth/login")
    }else{
        window.location = "/auth/login";
    }
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
}

const getNewToken = () => {
    const token = Cookies.get('access_token');
    const refreshToken = Cookies.get('refresh_token');

    return new Promise((resolve, reject) => {
        axiosInstance()
            .post("/Identity/refresh", {token, refreshToken})
            .then( (response) => {
                resolve(response.data);
            })
            .catch( (err) => {
                reject(err);
            })
    })
}


export default setAuthInterceptors;