import axios from 'axios';
import promise from 'promise';

// Add a request interceptor 
var axiosInstance = axios.create();

axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent 
    //If the header does not contain the token and the url not public, redirect to login  
    var accessToken = 'access-token';

    //if token is found add it to the header
    if (accessToken) {
        config.headers.authorization = 'Bearer ' + accessToken;
    }

    return config;
}, function (error) {
    // Do something with request error 
    return promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {
}, function (error) {
    if (error.response.status === 401) {
        // redirect to login page
    }
    return Promise.reject(error);
});

export default axiosInstance;