export guardian from './guardian';
export paginator from './paginator';
export * as api from './api';

export function retrieveToken(){
  return localStorage.getItem('accessToken');
}

export function saveToken(accessToken) {
  return localStorage.setItem('accessToken', accessToken);
}

export function removeToken() {
  return localStorage.removeItem('accessToken');
}
