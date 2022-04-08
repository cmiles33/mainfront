<template>
  <div class="collection-container">
    <div class="column is-12">
      <div class="column is-12">
        <div class="hero is-small">
          <div class="columns">
            <div class="column is-6">
              <div class="hero-body">
                <h1 class="title">
                  Our {{collection.name}} Collection
                </h1>
                <div class="subtitle my-2 ">
                  <router-link class="button display-button"
                               :to="{name: 'collection.show', params: {id: collection.id, slug: collection.slug} }">
                    View The Full Collection
                  </router-link>
                </div>
              </div>
            </div>
            <div class="column is-6">
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

<style lang="scss" scoped>

$display-color-main: #333;
$display-color-invert: white;


.collection-container{
  border: black solid 2px;
}

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


</style>