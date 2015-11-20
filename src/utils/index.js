export function retrieveToken(){
  return localStorage.getItem('accessToken');
}

export function saveToken(accessToken) {
  return localStorage.setItem('accessToken', accessToken);
}
