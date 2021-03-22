import Cookies from 'js-cookie';

const isAuthenticated = () => !!Cookies.get("access_token");


export default isAuthenticated;