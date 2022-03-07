<template>
  <div class="columns is-multiline">
    <div class="column is-3">
      <h1 class="title">{{product.name}}</h1>
      <p>{{product.description}}</p>
    </div>
    <div class="column is-3 has-background-black">
      <div class="gallery">
          <figure class="gallery__item gallery__item--1"  v-for="pictures in product_photos" >
            <img @mouseover="this.setMainPic(pictures.get_image_url)"
                 @click="this.setMainPic(pictures.get_image_url)"
                 v-bind:src="pictures.get_image_url">
          </figure>
      </div>
    </div>
    <div class="column is-4 has-background-black">
        <figure class="image">
          <img v-bind:src="this.picture_url">
        </figure>
    </div>
  </div>

  <section>
    <div class="columns is-multiline is-centered">
      <div class="column is-half">
        <h1 class="title">
          This be the Price Area
        </h1>
      </div>
    </div>
  </section>
</template>

<script>

import axios from 'axios'

export default {
  name: "ProductView",
  data(){
    return{
      product : {},
      product_photos: {},
      picture_url: '',

    }
  },
  mounted(){
      this.getProducts()
      this.setMainPic(this.product.get_image_url)
      //this.getProductPictures()
  },
  methods: {
    setMainPic(picture_url){
      this.picture_url = picture_url
    },
    getProducts(){
      const product_id = this.$route.params.id
      const product_slug = this.$route.params.slug

      //Axios call goes here
      axios.get(`/api/v1/products/${product_id}/${product_slug}`)
      .then(response =>{
        this.product = response.data
        this.product_photos = this.product.product_pictures
        this.setMainPic(this.product.get_image_url)
      })
      .catch(error =>{
        console.log(error)
      })

    },

  }

}
</script>

<style scoped>
#preview{

}
figure{
  width: auto;
}
.gallery {
  display: grid;
  grid-template-columns: repeat(2,2fr);
  grid-template-rows: repeat(2, 2fr);
  grid-gap:1.5rem;

}
.gallery__item {
  width: 100%;
  height: 100%;
  object-fit: cover;

  transition: 0.2s ease transform;
}
.gallery__item:hover{
  transform: scale(1.05);
}


</style>