
    
    
<template>
  <div class="product"> 
    <div class="info">
      <p><span class="bold">Nombre:</span> {{name}}</p>
      <p><span class="bold">Stock: </span>{{stock}}</p>
    </div>
    <div class="buttonsContainer">
      <button class="button" @click="handleEdit">Edit</button>
      <button class="button delete" @click="handleDelete">Delete</button>
    </div>    
  </div>

  </template>
  
    <script lang="js">
import reGetProducts from '@/services/reGetProducts';

      export default {
     props: {
       id:Number,
       name:String,
       stock:Number
     }, methods:{
      handleEdit(){
        this.$router.push(`/edit/${this.id}`)
      },
      async handleDelete(){
        console.log('trying to delete ', this.id)
            await fetch(`http://localhost:3000/${this.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                
            }).then(()=>{reGetProducts(); window.location.reload()})
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
  .buttonsContainer{
    display: flex;
    flex-direction: column;
    width: fit-content;
    gap:2px
    
  }
  .button{
    background-color: rgb(255, 255, 255);
color:black;
    border-radius: 20px;
    border:none;
    padding: 0px 10px;
    width: 100%;
    outline:none;

  }
  .delete{
    background-color: rgb(218, 47, 47);
    color:white;
  }
  
  .button:hover{
    cursor: pointer;
    transform: scale(0.9);
    background-color: rgb(213, 216, 214);
  }
  .delete:hover{
    background-color: rgb(255, 147, 147);
    color:white;
  }
  </style>
  
  
