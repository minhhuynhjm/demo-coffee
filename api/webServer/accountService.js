import axios from 'axios';
import { URL } from '../../constants';
import { useSelector } from "react-redux";

const loginState = useSelector((state) => (state.loginReducer));
export function LoginAuth(userName, passWord) {
    return axios.post(URL.LOGIN, {
        username: userName,
        password: passWord
    })
}