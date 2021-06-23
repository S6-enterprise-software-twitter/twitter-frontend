import { googleCloudString, localhostString } from './Service.js';

export async function me(user){
  return await fetch(`${localhostString}/api/user/me`,{
    method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
  }).then(result => result.json())
    .then(result =>{
      return result;
    })
}

export async function findById(id){
    return await fetch(`${localhostString}/api/user/${id}`)
        .then(result=>result.json())
        .then(result =>{
            return result;
        });
}

export async function register(user){
   await fetch(`${localhostString}/api/user/register`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
}

export async function getAll(){
  return await fetch(`${localhostString}/api/user`, {
      method: 'GET',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
  }).then(response => response.json())
}