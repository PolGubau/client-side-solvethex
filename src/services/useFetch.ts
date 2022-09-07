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




export function usePost(url:string,body:any){
  let error=''
let data=''

  fetch(url,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(body)
  })
  .then((res) => res.json())
  .then((json) => (data = json))
  .catch((err) => (error = err))

  return { data, error }
}


import { ref, isRef, unref, watchEffect } from 'vue'

export function useFetchBig(url:string) {
  const data = ref(null)
  const error = ref(null)

  function doFetch() {
    // reset state before fetching..
    data.value = null
    error.value = null
    // unref() unwraps potential refs
    fetch(unref(url))
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((err) => (error.value = err))
  }

  if (isRef(url)) {
    // setup reactive re-fetch if input URL is a ref
    watchEffect(doFetch)
  } else {
    // otherwise, just fetch once
    // and avoid the overhead of a watcher
    doFetch()
  }

  return { data, error }
}