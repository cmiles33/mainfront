<template>
  <div class="column is-6 my-3 special-box" v-if="special_details">
      <div class="columns">
        <div class="column-6">
          <div class="box">
            <router-link :to="{name: 'product.show', params: {id: product.id, slug: product.slug}}">
              <figure class="image mb-4">
                <img v-bind:src="product.get_image_url" alt="{{product.name}}">
              </figure>
            </router-link>
            <div class="columns">
              <div class="column is-6 has-text-centered">
                <p class="subtitle my-2">${{product.price}}</p>
              </div>
              <div class="column is-6 has-text-centered">
                <router-link class="button display-button  is-full" :to="{name: 'product.show', params: {id: product.id, slug: product.slug}}">
                  <h2>View Product</h2>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-6 mx-3">
          <h1 class="title">
            {{product.name}}
          </h1>
          <p class=" subtitle is-5">
            {{product.description}}
          </p>
        </div>
      </div>
  </div>
  <div v-else class="column is-3">
      <div class="box box-animated">
        <router-link :to="{name: 'product.show', params: {id: product.id, slug: product.slug}}">
          <figure class="image mb-4">
            <img v-bind:src="product.get_image_url" alt="{{product.name}}">
          </figure>
        </router-link>
        <h3 class="is-size-4">{{product.name}}</h3>
        <p class="is-size-6 has-text-grey">${{product.price}}</p>
        <router-link class="button display-button" :to="{name: 'product.show', params: {id: product.id, slug: product.slug}}">
          <h2>View Product</h2>
        </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: "TheProduct",
  props:{
    product:{type: Object, required: true,},
    special_details: Boolean,

  }
}
</script>

<style lang="scss" scoped>
$display-color-main: #333;
$display-color-invert: white;

.image{

  margin-top: -1.25rem;
  margin-left: -1.25rem;
  margin-right: -1.25rem;
}
.box{
  background-color: #e6e6e6;
  border-radius: 4px;
}
.picture-box{
  background-color: #e6e6e6 ;
}
.box-animated{
  transition: 0.2s ease transform, background-color;
}
.box-animated:hover{
  transform: scale(1.06);
  background-color: orange;
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


.special-box{
  border: black solid 2px;

}



</style>