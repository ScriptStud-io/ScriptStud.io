import tokenService from '../services/tokenService';
const BASE_URL = '/api/snippets/';

export function create(snippet) {
    return fetch(BASE_URL, {
          method: "POST",
          headers: {
              'content-type': 'application/json', 
              'Authorization': `Bearer ${tokenService.getToken()}`
          },
          body: JSON.stringify(snippet)
    }, {mode: "cors"})
    .then(res => res.json());
}