import { googleCloudString, localhostString } from './Service.js';

export async function getTimeline(token){
    return await fetch(`${localhostString}/api/post/timeline`,{
      method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
    }).then(result => result.json())
    .then(result =>{
      return result;
    })
  }

  // http://localhost:8080/api/hometimeline/timeline