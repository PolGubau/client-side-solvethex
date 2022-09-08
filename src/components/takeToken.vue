<template>
  <p v-if="token">Tu token es {{token}}</p>

  <div v-else>
  <p>Consigue un token</p>
<form class="form">
    <div class="info">
  <input type="text" name="name" v-model="username" placeholder="Escribe tu nombre">
</div>
  <button type="submit" @click.stop.prevent="submit()" class="button">+</button>
</form>
</div>
  </template>

  <script lang="js">
import axios from 'axios'

export default{
    data(){
        return {
      username: '',
      token: undefined ,
        }
},
created(){
    const token = localStorage.getItem('token');
    if(token){
        this.token = token;
    }
},

    methods: {
        async submit(){
           
            axios.post('http://localhost:3000/auth', {
                username: this.username,
            })
            .then((res)=>{
              localStorage.setItem('token', res.data.data)
              this.token = res.data.data
            }).then(()=>{
              window.location.reload()
            })
            .catch(err =>  console.log('Error',err))
          
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