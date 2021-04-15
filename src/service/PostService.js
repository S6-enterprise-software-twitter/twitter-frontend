export async function postTweet(post,token){
    return await fetch('http://localhost:8081/post',{
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