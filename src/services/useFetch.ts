// fetch.js


export function useGet(url:string) {
 let data = ''
  let error =''

  fetch(url)
    .then((res) => res.json())
    .then((json) => (data = json))
    .catch((err) => (error = err))
    
    
  return { data, error }
}

export async function getToken(body:any){
  
  const tokenGotIt = fetch('http://localhost:3000/auth',{
  method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(body)
  })
  return tokenGotIt
}
