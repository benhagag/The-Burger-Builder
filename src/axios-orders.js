import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://the-burger-builder-66f55.firebaseio.com/'
});

export default instance;