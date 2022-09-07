<template>
<form class="form">
    <div class="info">
  <input type="text" name="name" v-model="name" placeholder="Nombre del producto">
  <input type="number" name="stock" v-model="stock" placeholder="Stock del producto">
</div>
  <button type="submit" @click.stop.prevent="submit()" class="button">+</button>
</form>

  </template>

  <script lang="js">
import reGetProducts from "@/services/reGetProducts";
  import axios from 'axios';
  
export default {
    data(){
        return {
          id: this.$route.params.id,

      name: 'Loading...',
      stock: undefined ,
        }
},
    
    created() {
      reGetProducts()
      axios.get(`http://localhost:3000/${this.id}`)
      .then(res => {
        this.name = res.data.name
        this.stock = res.data.stock
      })
      .catch(err => console.log(err))
    },
    
    methods: {
        async submit(){
            await fetch(`http://localhost:3000/${this.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: this.name,
                    stock: this.stock
                })
            }).catch(err => console.log(err))
            this.name='';
            this.stock=undefined;
            reGetProducts()
            //redirect to home
            this.$router.push('/')
        }
    }

}

  </script>
  
  
  <style>
    .form{
    background-color: white;
    border: 1px solid    hsla(160, 100%, 37%, 1);
    display: flex;
    gap: 10px;
    min-height:80px;

    color: white;
    width: fit-content;
    min-width: 300px;
    max-width: 600px;
    border-radius: 20px;
    padding: 10px 20px;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    }
    .info{
    display: flex;
    flex-direction: column;
    gap:7px;
  }
  input{
    border: 1px solid    hsla(160, 100%, 37%, 1);
    height: 25px;
    padding: 0px 10px;
    border-radius: 10px;
        

  }
  .button{
    background-color: hsla(160, 100%, 37%, 1);
color:white;
    border-radius: 20px;
    border:none;
    outline:none;
    width:30px;
    height:30px;
  }
  .button:hover{    
    cursor: pointer;
    transform: scale(0.9);
    background-color: rgb(0, 99, 66);
  }
  </style>