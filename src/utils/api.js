// import es6Promise from 'es6-promise';
// es6Promise.polyfill();
import fetch from 'isomorphic-fetch';

const API_BASE_URL = 'http://localhost:3000';

export function fetchBudgetDomains(accessToken) {
  return fetch(`${API_BASE_URL}/api/v1/budget_domains`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    }
  ).then(function(response) {
    return response.json();
  });
}
