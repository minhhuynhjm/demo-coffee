import axios from '../httpIntercepter';
// import axios from 'axios'
import { URL } from '../../constants';

export function GetOrderMenu() {
    // const loginState = useSelector((state) => (state.loginReducer));
    // let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwMTgiLCJuYW1lIjoiQWNjb3VudCB0ZXN0Iiwic3RhZmZJZCI6IjEyMzQ1NiIsImlhdCI6MTU4ODgzODYxMCwiZXhwIjoxNTg4OTI1MDEwfQ.Y-v-QRm2lD9f8HdeKHUhV76g4vipnwNJuyF-g-cGp00";
    return axios.get(URL.ORDER_MENU); //, { headers: { Authorization: `Bearer ${accessToken}` } }
}