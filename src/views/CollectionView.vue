<template>
  <div class="collection">
    <section class=" hero is-small mb-6">
      <div class="hero-body has-text-centered">
        <p class="title"> The {{collection.name}} Collection</p>
      </div>
    </section>
    <div class="columns is-multiline">
      <TheProduct v-for="product in products"
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

<style scoped>

</style>