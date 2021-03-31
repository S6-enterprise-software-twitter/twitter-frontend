export async function me(user){
  return await fetch('https://localhost:8001/user/me',{
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
    return await fetch(`https://localhost:8001/user/${id}`)
        .then(result=>result.json())
        .then(result =>{
            return result;
        });
}

export async function register(user){
   await fetch('https://localhost:8001/user/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
}