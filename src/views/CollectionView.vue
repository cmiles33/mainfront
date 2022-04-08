<template>
  <div class="collection">
    <section class="hero is-small mb-6 ">
      <div class="columns">
        <div class="column is-12">
          <div class="hero-body has-text-centered">
            <div class="title">
              The {{collection.name}} Collection
            </div>
            <router-link class="button display-button mx-2"
                         :to="'/view-collection'">
              All Collections</router-link>
            <router-link class="button display-button mx-2" :to=" '/products' ">
              All Products
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <div class="columns is-multiline">
      <TheProduct special_details v-for="product in products"
                  :key="product.id"
                  :product="product"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import TheProduct from "@/components/TheProduct";


export default {
  name: "CollectionView",
  components: {TheProduct},
  data(){
    return{
      collection: [],
      products:[],
    }
  },
  mounted(){
    this.getCollection()
  },
  methods: {
    getCollection(){
      const collection_id = this.$route.params.id
      const collection_slug = this.$route.params.slug

      axios.get(`/api/v1/collections/${collection_id}/${collection_slug}`)
      .then(response =>{
        this.collection = response.data
        this.products = this.collection.ceramic_products
      })
      .catch(error =>{
        console.log(error)
      })

    }
  },

}
</script>

<style lang="scss" scoped>
$display-color-main: #333;
$display-color-invert: white;
.display-button{
  flex: 1;

  background-color: $display-color-main;
  color: $display-color-invert;
  border: 1px solid;
  text-align: center;
  text-decoration: none;
  transition: all 0.5s ease-out;
}
.display-button:hover,
.display-button:focus{
  background-color: $display-color-invert;
  color: $display-color-main;
}
.column{
  border: black solid 2px;
}

</style>