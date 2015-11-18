// import es6Promise from 'es6-promise';
// es6Promise.polyfill();
import fetch from 'isomorphic-fetch';

const {API_BASE_URL} = CONFIG

const ENDPOINT_MAPPER  = {
  '/api/v1/budget_domains': fetchBudgetDomains
};

function authHeader(accessToken) {
  return {
    'Authorization': `Bearer ${accessToken}`
  };
}

const headers = {
  'Content-Type': 'application/json'
};

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

export function call(endpoint, {accessToken = undefined, authorization}) {
  const apiCaller = ENDPOINT_MAPPER[endpoint];
  if (typeof apiCaller !== 'function') {
    throw new Error('Endpoint does not exist');
  }
  if (authorization === true) {
    if (typeof accessToken !== 'string') {
      throw new Error('Access Token required');
    }
    return  apiCaller(accessToken);
  } else {
    return  apiCaller();
  }
}

export function fetchTokenInfo(accessToken) {
  return fetch(`${API_BASE_URL}/oauth/token/info`,{
    headers: Object.assign({}, headers, authHeader(accessToken))
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
    headers: Object.assign({}, headers, authHeader(accessToken))
  })
  .then(checkStatus)
  .then(parseJSON);
}

export function authenticate(username, password) {
  return fetch(`${API_BASE_URL}/oauth/token`, {
    method: 'post',
    body: JSON.stringify({
      grant_type: 'password',
      username,
      password
    }),
    headers: headers
  })
  .then(checkStatus)
  .then(parseJSON);
}
