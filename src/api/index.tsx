import axios from 'axios';
axios.defaults.baseURL = 'https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/application-0-aukun/service/codetest/incoming_webhook';
axios.interceptors.request.use((config) => {return config;}, error => Promise.reject(error));
axios.interceptors.response.use(response => response.data, error => Promise.reject(error));
export default axios;