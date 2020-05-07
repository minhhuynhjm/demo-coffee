import axios from 'axios';
import { URL } from '../../constants';

export function LoginAuthentication(userName, passWord) {
    return axios.post(URL.LOGIN_AUTHENTICATION, {
        staff_id: userName,
        password: passWord
    })
}