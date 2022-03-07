<template>
  <div class="column is-3">
    <div class="box">
      <figure class="image mb-4">
        <img v-bind:src="product.get_image_url" alt="{{product.name}}">
      </figure>
      <h3 class="is-size-4">{{product.name}}</h3>
      <p class="is-size-6 has-text-grey">${{product.price}}</p>
      <router-link class="button is-primary" :to="{name: 'product.show', params: {id: product.id, slug: product.slug}}">
        <h2>View Product</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheProduct",
  props:{
    product:{type: Object, required: true,}
  }
}
</script>

<style scoped>

.image{

  margin-top: -1.25rem;
  margin-left: -1.25rem;
  margin-right: -1.25rem;
}
.box{
  background-color: wheat;
  border-radius: 4px;
  transition: 0.2s ease transform;

}
.box:hover{
  transform: scale(1.05);
}


</style>