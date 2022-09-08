import axios from "axios";

export default function reGetProducts(){
      
      if(!localStorage.getItem('token')){
            return
      }
      const token = localStorage.getItem('token') ?? '' ;
      console.log('Get got the token', token)
      axios.get("http://localhost:3000/",{
      headers:{
        'authorization': token
    }})
    .then((result) => {
            const products= localStorage.setItem("products", JSON.stringify(result.data.data));
            return products;
      });
}