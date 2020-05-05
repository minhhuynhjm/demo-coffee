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

    console.log('request');
    return config;
}, function (error) {
    // Do something with request error 
    return promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {
    console.log('response');
    return response;
}, function (error) {
    if (error.response.status === 401) {
        console.log('401', error);
        // redirect to login page
    }
    return Promise.reject(error);
});

export default axiosInstance;