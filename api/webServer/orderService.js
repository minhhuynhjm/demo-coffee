import axios from '../httpIntercepter';
import { URL } from '../../constants';


export function GetOrderMenu() {
    return axios.get(URL.ORDER_MENU);
}