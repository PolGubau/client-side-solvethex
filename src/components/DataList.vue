<template>
  <div v-if="result" class="content">
      <!-- <FormElement /> -->
   <div v-for="producto in result" :key="producto.id">
    <Producto 
    :id="producto.id"
    :name="producto.name"
    :stock="producto.stock"
    />
    </div>
   
  </div>
  <div v-else class="content">
    <p>Loading...</p>
  </div>  
  <div v-if="noToken" class="content">
    <div>
    Parece que no tienes un token aún
  </div>
  </div>
</template>


<script lang="js">
import Producto from "./ProductElement.vue";
import reGetProducts from "@/services/reGetProducts";      
reGetProducts()



export default {
    data:() => ({
        result: null,
        noToken: false
    }),
    
    created() {
      reGetProducts()

        const products =localStorage.getItem('products');
        if(!products){
            this.noToken = true;
        }else{
          this.noToken = false;

        const productsJson = JSON.parse(products ? products : '');
        
        console.log(productsJson)
        
        this.result = productsJson
      }
      },
      

    
    components: {
        Producto
}

      
};



</script>




<style scoped>
.content{
  display: flex;
    flex-direction: row;
    gap:10px;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;}

</style>
