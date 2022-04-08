<template>
  <div class="home">
    <section class="hero is-small is-dark mb-6">
      <div class="columns">
        <div class="column is-6">
          <div class="hero-body has-text-left">
            <p class="title mb-6">
              Welcome to Ceramic Haven
            </p>
            <p class="subtitle">
              Where all your Ceramic Dreams come true.
            </p>
          </div>
          <div class="columns">
            <div class="column is-6">
              <div class="hero-body has-background-grey-dark">
                <p class="title">
                  About Us
                </p>
                <p class="subtitle">
                  We are people trying to establish our place in the pure ceramic world

                </p>
                <p class="subtitle">
                  Interested in a custom made order?
                  Get in contact with us here:

                </p>
                <a class="display-button button display-button
                    is-fullwidth">Contact Us</a>
              </div>
            </div>
            <div class="column is-6">
              <div class="hero-body has-text-centered has-background-grey-light">
                <p class="title">
                  Details
                </p>
                <a class="display-button button is-fullwidth my-2">
                  learn about our processes
                </a>
                <a class="display-button button  is-fullwidth">
                  Our team
                </a>
              </div>
            </div>
          </div>
          <div class="columns ">
            <div class="column is-6">
              <div class="hero-body">
                <router-link class="button is-large is-fullwidth display-button" :to=" '/products' ">
                  View All Products
                </router-link>
              </div>
            </div>
            <div class="column is-6">
              <div class="hero-body">
                <router-link class="button is-large is-fullwidth display-button" :to="'/view-collection'">View All Collections</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="columns is-multiline">
            <div class="column is-9">
              <div class="hero-body display-section has-background-grey">
                <figure :class="{'mytrans-active': nextPic}"
                        class="mytrans">
                  <img v-bind:src="this.mainPhoto" :alt="'display'">
                </figure>
              </div>
              <div :class="{ 'info-trans-active': nextPic }"
                   class="info-trans hero-body has-background-grey-light">

                <a class="display-button button is-fullwidth">
                  View Product
                </a>
                <a class="display-button button is-fullwidth my-2">
                  View Collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="columns is-multiline">
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
      nextPic: false,
      mainPhoto: '',
      mainDisplay: {},
      displayIndex: 0
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
  watch:{
    nextPic(){
      if(this.nextPic === true){
        this.displayIndex +=1
        if (this.displayIndex >= this.latestProducts.length)
        {
          this.displayIndex = 0
        }
        this.mainPhoto = this.latestProducts[this.displayIndex].get_image_url
        setTimeout(() =>{
          this.nextPic = false
        },10000)
      }
      else{
        setTimeout(() =>{
          this.nextPic = true
        },3000)
      }

    }
  },

  methods: {
    getLatestProducts(){
      axios.
          get('/api/v1/latest-products/')
      .then(response =>{
        this.latestProducts = response.data
        this.mainPhoto = this.latestProducts[0].get_image_url
        this.displayIndex = 0
        this.nextPic = true;
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
    },
    getNextPhoto(){
      this.nextPic = true
      setTimeout(() =>{
        this.nextPic = false
      }, 3500)
    }
  }

}
</script>

<style lang="scss" scoped>

$display-color-main: #333;
$display-color-invert: white;

.home{
  margin: 0;
  padding: 0;

}

.mytrans{
  width: auto;
  image-rendering: smooth;
  object-fit: cover;
  display: block;
  opacity: 0;
  transition: opacity, background;
  transition-duration: 2s;
}
.mytrans-active{
  opacity: 100%;
}

.info-trans{
  opacity: 0;
  transition: opacity;
  transition-duration: 2s ;
}
.info-trans-active{
  opacity: 100%;
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

.nextdisplayphoto{
  animation-duration: 2s;
  animation-name: slidein;
}

@keyframes slidein{
  from{
    margin-left: 50%;
    width:500px;
    image-rendering: smooth;
    object-fit: cover;
    display: block;
  }
  to{
    margin-left: 0%;
    width: 500px;
    image-rendering: smooth;
    object-fit: cover;
    display: block;
  }
}
</style>