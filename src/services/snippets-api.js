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

export function getAll() {
    return fetch(BASE_URL, {mode: 'cors'})
    .then(res => res.json())
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}${id}`, {
        method: 'DELETE',
        headers: {'Authorization': `Bearer ${tokenService.getToken()}`},
    }, {mode: 'cors'})
    .then(res => res.json())
}

export function update(snippet) {
    return fetch(`${BASE_URL}${snippet._id}`, {
        method: "PUT", 
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(snippet)
    }, {mode: 'cors'})
    .then(res => res.json());
}