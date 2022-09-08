

<template>
  <main>
    <TakeToken /> 
  </main>
</template>



<script lang="ts">
  import TakeToken from '../components/TakeToken.vue'
  
   export default {
        components: { TakeToken} 
   }
    
    </script>

<style scoped>
main {
  display: flex;
  gap:3rem;
  
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    flex-wrap: wrap;
    align-content: flex-start;
}
</style>