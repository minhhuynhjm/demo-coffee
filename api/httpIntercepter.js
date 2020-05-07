import axios from 'axios';
import promise from 'promise';
import { AsyncStorage } from 'react-native';
import { useSelector, useDispatch } from "react-redux";

var axiosInstance = axios.create();
const getAsyncStorage = async (key) => {
    try {
        const store = await AsyncStorage.getItem('persist:root');
        const obj = JSON.parse(store);
        return JSON.parse(obj[key]);
    } catch (error) {
        console.log(error)
    }
}

axiosInstance.interceptors.request.use(async (config) => {
    const loginState = await getAsyncStorage("loginReducer");
    // let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwMTgiLCJuYW1lIjoiQWNjb3VudCB0ZXN0Iiwic3RhZmZJZCI6IjEyMzQ1NiIsImlhdCI6MTU4ODgzODYxMCwiZXhwIjoxNTg4OTI1MDEwfQ.Y-v-QRm2lD9f8HdeKHUhV76g4vipnwNJuyF-g-cGp00";
    let accessToken = loginState.user.access_token;
    config.headers = { 'Authorization': accessToken }
    return config
}, error => {
    return Promise.reject(error)
})

axiosInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response.status === 401) {
        console.log("redirect to login page")
        // redirect to login page
    }
    return Promise.reject(error);
});

export default axiosInstance;