import fetch from 'isomorphic-fetch';

/*global CONFIG*/
const {API_BASE_URL} = CONFIG;

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

export function fetchTokenInfo(accessToken) {
  return fetch(`${API_BASE_URL}/oauth/token/info`,{
    headers: Object.assign({}, headers, authHeader(accessToken))
  })
  .then(checkStatus)
  .then(parseJSON);
}

export function fetchBudgetDomains(accessToken) {
  return fetch(`${API_BASE_URL}/api/v1/budget_domains`, {
    headers: Object.assign({}, headers, authHeader(accessToken))
  })
  .then(checkStatus)
  .then(parseJSON);
}


export function fetchBudgetCategories(accessToken, budgetDomainId) {
  return fetch(`${API_BASE_URL}/api/v1/budget_domains/${budgetDomainId}/categories`, {
    headers: Object.assign({}, headers, authHeader(accessToken))
  })
  .then(checkStatus)
  .then(parseJSON);
}


export function fetchBudgetExpenses(accessToken, budgetDomainId) {
  return fetch(`${API_BASE_URL}/api/v1/budget_domains/${budgetDomainId}/expenses`, {
    headers: Object.assign({}, headers, authHeader(accessToken))
  })
  .then(checkStatus)
  .then(parseJSON);
}

export function fetchBudgetIncomes(accessToken, budgetDomainId) {
  return fetch(`${API_BASE_URL}/api/v1/budget_domains/${budgetDomainId}/incomes`, {
    headers: Object.assign({}, headers, authHeader(accessToken))
  })
  .then(checkStatus)
  .then(parseJSON);
}

export function fetchBudgetDebts(accessToken, budgetDomainId) {
  return fetch(`${API_BASE_URL}/api/v1/budget_domains/${budgetDomainId}/debts`, {
    headers: Object.assign({}, headers, authHeader(accessToken))
  })
  .then(checkStatus)
  .then(parseJSON);
}

export function fetchBudgetPlans(accessToken, budgetDomainId) {
  return fetch(`${API_BASE_URL}/api/v1/budget_domains/${budgetDomainId}/plans`, {
    headers: Object.assign({}, headers, authHeader(accessToken))
  })
  .then(checkStatus)
  .then(parseJSON);
}

export function fetchBudgetAccounts(accessToken, budgetDomainId) {
  return fetch(`${API_BASE_URL}/api/v1/budget_domains/${budgetDomainId}/accounts`, {
    headers: Object.assign({}, headers, authHeader(accessToken))
  })
  .then(checkStatus)
  .then(parseJSON);
}

export function fetchBudgetMembers(accessToken, budgetDomainId) {
  return fetch(`${API_BASE_URL}/api/v1/budget_domains/${budgetDomainId}/members`, {
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
