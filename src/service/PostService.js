import { googleCloudString, localhostString } from './Service.js';

export async function postTweet(post,token){
  console.log(localhostString)
    return await fetch(`${localhostString}/api/post`,{
      method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          body: JSON.stringify(post)
    }).then(result => result.json())
      .then(result =>{
        return result;
      })
  }