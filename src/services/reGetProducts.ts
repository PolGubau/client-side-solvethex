import axios from "axios";

export default function reGetProducts(){
      
      if(!localStorage.getItem('token')){
            return
      }
      
      
      
     axios.get("http://localhost:3000/").then((result) => {
           const products= localStorage.setItem("products", JSON.stringify(result.data.data));
           return products;
        });
}