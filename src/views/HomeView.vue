<template>
  <div class="home">
    <section class="hero is-medium is-dark mb-6">
      <div class="hero-body has-text-centered">
        <p class="title mb-6">
          Welcome to Ceramic Haven
        </p>
        <p class="subtitle">
          Where all your Ceramic Dreams come true.
        </p>
      </div>
    </section>

    <div class="columns is-multiline">
      <div class="column is-12">
        <div class="hero is-small">
          <div class="hero-body hero-buttons">
            <a class="button is-info is-medium is-fullwidth">View All Products</a>
            <a class="button is-link is-medium is-fullwidth">View All Collection</a>
          </div>
        </div>
      </div>
      <TheCollection direct_link v-for="collection in collections"
                     :key="collection.id"
                     :collection="collection"/>

    </div>


  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import TheProduct from "@/components/TheProduct";
import TheCollection from "@/components/TheCollection";

export default {
  name: 'HomeView',
  data(){
    return{
      latestProducts: [],
      collections: [],

    }

  },
  components: {
    TheProduct,
    TheCollection,
  },
  mounted() {
    this.getLatestProducts()
    this.getCollections()
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
    getCollections(){
      axios.get('/api/v1/collections/').then(response =>{
        this.collections = response.data
      })
      .catch(error =>{
        console.log(error)
      })
    }
  }

}
</script>

<style scoped>
.home{
  background-color: wheat;

}
.hero{


}
</style>