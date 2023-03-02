import axios from 'axios';

const askMeClient = axios.create();

askMeClient.interceptors.request.use((request) => {
  console.log('interceptors request: ', request);
  return request;
}, (error) => {
  console.log('interceptors request error: ', error.message);
  return Promise.reject(error);
});

askMeClient.interceptors.response.use((response) => {
  console.log('interceptors response: ', response);
  return response.data;
}, (error) => {
  console.log('interceptors response error: ', error.message);
  console.log(`code: ${error.response.status}, data: ${error.response.data}`);
  return Promise.reject(error);
});

const apiMethods = {
  /*
  askQuestion (query) {
    const api = '/askQuestion';
    return askMeClient.get(query ? (api + query) : api);
  },
  */
  askQuestion: body => askMeClient.put('/askQuestion', body)
};

export default apiMethods;
