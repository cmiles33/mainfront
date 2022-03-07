<template>
  <div class="all-collections">
    <section class=" hero is-small is-dark mb-6">
      <div class="hero-body has-text-centered">
        <p class="title">View All Collections</p>
      </div>
    </section>
    <div class="columns is-multiline">
      <TheCollection direct_link  v-for="collection in collections"
                     :key="collection.id"
                     :collection="collection">
      </TheCollection>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import TheCollection from "@/components/TheCollection";

export default {
  name: "AllCollectionView",

  data(){
    return{
      collections: [],
    }
  },
  components: {
    TheCollection,
  },
  mounted(){
    this.getCollections()
  },
  methods: {
    getCollections(){
      axios.get('/api/v1/collections/').then(response =>{
        this.collections = response.data
      })
          .catch(error =>{
            console.log(error)
          })
    },

  }
}
</script>

<style scoped>

</style>