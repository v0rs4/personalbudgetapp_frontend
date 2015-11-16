// import es6Promise from 'es6-promise';
// es6Promise.polyfill();
import fetch from 'isomorphic-fetch';

const API_BASE_URL = 'http://localhost:3000';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

export function fetchTokenInfo(accessToken) {
  return fetch(`${API_BASE_URL}/oauth/token/info`,{
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
  .then(response => {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }).then(response => {
    return response.json();
  });
}

export function fetchBudgetDomains(accessToken) {
  return fetch(`${API_BASE_URL}/api/v1/budget_domains`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  }).then(response => {
    return response.json();
  });
}

export function authenticate(username, password) {
  return fetch(`${API_BASE_URL}/oauth/token`, {
    method: 'post',
    body: JSON.stringify({
      grant_type: 'password',
      username,
      password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(checkStatus)
  .then(parseJSON);
}
