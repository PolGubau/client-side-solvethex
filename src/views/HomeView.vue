<script setup lang="ts">
import DataList from '../components/DataList.vue'
</script>

<template>
  <main>
    <DataList />
  </main>
</template>


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