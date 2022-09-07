<script setup lang="ts">
    import { RouterLink } from 'vue-router'
    </script>
<template>
    <div class="about">
      <h1>La página que buscas no existe...</h1>
      <div class="linkContainer">
      <h3>Puedes probar a 
        
      </h3><RouterLink to="/" class="link">Volver a Inicio</RouterLink></div>
    </div>
  </template>
  
  <style scoped>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
    .linkContainer{
        display:flex;
        flex-direction: column;
        margin-left: 20px;
        width: fit-content;
    }
    .link{
        color: #3eaf7c;
        background-color: greenyellow;
        padding: 5px;
    }
  }
  </style>
  