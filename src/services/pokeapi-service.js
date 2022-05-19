import api from './api';

class pokeApi {
  pokemon(data) {
    return api.get(data);
  } 
}

export default new pokeApi();