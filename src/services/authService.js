const BASE_URL = '/api/auth/';

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    console.log(res, '<-- response object')
    return res.json();
  })
  .then(json => {
    if(json.token) return json;
    console.log(json, '<-- the error')
    throw new Error(`${json.err}`)
  })
  .then(data => data)
}

export default {
  signup
};