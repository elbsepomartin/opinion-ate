import axios from 'axios';

const client = axios.create({
    baseURL: 'https://outside-in-dev-api.herokuapp.com/PP4wXOuq2B8IVELqL6MinvgflXEGw1A6',
});

const api = {
    loadRestaurants() {
        return client.get('/restaurants').then(response => response.data);
    },
  };
  
  export default api;