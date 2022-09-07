
    
    
<template>
  <div class="product"> 
    <div class="info">
      <p><span class="bold">Nombre:</span> {{name}}</p>
      <p><span class="bold">Stock: </span>{{stock}}</p>
    </div>
    <div>
      <button class="delete" @click="handleDelete">X</button>
    </div>    
  </div>

  </template>
  
    <script lang="ts">
import reGetProducts from '@/services/reGetProducts';

      export default {
     props: {
       id:Number,
       name:String,
       stock:Number
     }, methods:{
      async handleDelete(){
        console.log('trying to delete ', this.id)
            await fetch(`http://localhost:3000/${this.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                
            }).then(()=>reGetProducts())
            .catch(err => console.log(err))
        }
     }
   }
     </script>
  
  
  

  <style scoped>
  .product {
    background-color: hsla(160, 100%, 37%, 1);
    border: 1px solid    hsla(160, 100%, 37%, 1);
min-height:80px;
    display: flex;
    gap: 10px;
    color: white;
    width: fit-content;
    min-width: 300px;
    max-width: 600px;
    gap:10px;
    border-radius: 20px;
    padding: 10px 20px;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    
  }
  .bold{
    font-weight: bold;
  }
  .info{
    display: flex;
    flex-direction: column
  }
  .delete{
    border-radius: 20px;
    border:none;
    outline:none;
    width:30px;
    height:30px;
  }
  .delete:hover{
    cursor: pointer;
    transform: scale(0.9);
    background-color: rgb(213, 216, 214);
  }
  </style>
  
  
