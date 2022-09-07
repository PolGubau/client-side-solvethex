import axios from "axios";

export default function reGetProducts(){
     axios.get("http://localhost:3000/").then((result) => {
           const products= localStorage.setItem("products", JSON.stringify(result.data.data));
           return products;
        });
}