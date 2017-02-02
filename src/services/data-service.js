import 'whatwg-fetch';

export function getMenus() {
  console.log("1"); 
  return get('menus');
}

export function getUser(id) {
  console.log("11"); 
  return get('user/'+id);
}

export function getUsers() {
  console.log("11"); 
  return get('users');
}

function get(url) {
  console.log("2"+url); 
  return fetch(url).then(onSuccess, onError);
}

function onSuccess(response) {
  console.log("3"); 
  return response.json();
}

function onError(error) {
  console.log("4"); 
  console.log(error); // eslint-disable-line no-console
}
