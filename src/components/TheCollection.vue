<template>
  <div class="collection-container">
    <div class="column is-12">
      <div class="column is-12">
        <div class="hero is-small">
          <div class="hero-body has-text-centered">
            <h2 class="title">Our {{collection.name}} Collection</h2>
            <div v-if="direct_link">
              <router-link
                  class="button is-primary"
                  :to="{name: 'collection.show', params:{id: collection.id, slug: collection.slug}}">
                View The Full Collection
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <TheProduct v-for="product in products"
                    :key="product.id"
                    :product="product"/>
      </div>
    </div>
  </div>
</template>

<script>
import TheProduct from "@/components/TheProduct";

export default {
  name: "TheCollection",
  data(){
    return{
      products: [],


    }
  },
  props:{
    collection:{type: Object, required: true,},
    direct_link: Boolean

  },
  components:{
    TheProduct,

  },
  mounted(){
    this.getproducts()
  },
  methods:{
    getproducts(){
      this.products = this.collection.ceramic_products
    }
  }

}
</script>

<style scoped>

.collection-container{
}

</style>