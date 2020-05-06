import axios from '../httpIntercepter';
import { URL } from '../../constants';
import managementData from '../../mock_data/managementData';


export function GetUserManagement() {
    // console.log(URL.USER_MANAGEMENT);
    return managementData;
    // return axios.get(URL.USER_MANAGEMENT);
}