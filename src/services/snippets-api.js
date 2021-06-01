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

/** IMPORTANT!  function getAll() is deprecated in the deployed app because it will ignore privacy
 *              settings and allow a user to see snippets created by other users which have been
 *              marked private.  It's still here for use in development and testing but should not
 *              be used in any deployed version of the app.  As a general index function, use
 *              function getAllVisibleToUser().  This will return all public snippets and a user's
 *              own private snippets.
 */

export function getAll() {
    return fetch(`${BASE_URL}`, {mode: 'cors'})
        .then(res => res.json())
}

export function getAllVisibleToUser(userid) {
    return fetch(`${BASE_URL}user/visible/${userid}`, {mode: 'cors'})
        .then(res => res.json())
}

// TODO: add authorization token once public-private is working
export function getAllByCurrentUser(userid) {
    return fetch(`${BASE_URL}user/${userid}`, {mode: 'cors'})
        .then(res => res.json())
}

// TODO: add authorization token once public-private is working
export function getPrivateByCurrentUser(userid) {
    return fetch(`${BASE_URL}user_private/${userid}`, {mode: 'cors'})
        .then(res => res.json())
}

export function getAllPublic() {
    return fetch(`${BASE_URL}public`, {mode: 'cors'})
        .then(res => res.json())
}

export function getOne(id) {
    return fetch(`${BASE_URL}${id}`, {mode: 'cors'})
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