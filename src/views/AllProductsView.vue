<template>
  <div id="all-products">
    <section class="hero is-small mb-6">
      <div class="hero-body has-text-centered">
        <h1 class="title">
          All our Products.
        </h1>
      </div>
    </section>
      <div class="columns is-multiline product-container">
          <TheProduct v-for="product in latestProducts"
                      :key="product.id"
                      :product="product"/>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import TheProduct from "@/components/TheProduct";
export default {
  name: "AllProductsView",
  components: {TheProduct},
  data(){
    return{
      latestProducts: [],

    }
  },
  mounted() {
    this.getLatestProducts()
  },
  methods: {
    getLatestProducts(){
      axios.
      get('/api/v1/latest-products/')
          .then(response =>{
            this.latestProducts = response.data
          })
          .catch(error =>{
            console.log(error)
          })
    },
  },


}
</script>

<style scoped>

.product-container{
  border-style: solid;
  border-color: black;
  border-width: 1px;

}
.column{
  border-style: solid;
  border-color: black;
  border-width: 3px;
}


</style>