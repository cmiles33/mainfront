<template>
  <div id="wrapper">
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item"><strong>Ceramic Haven</strong></router-link>
        <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu"
        @click="showMobileMenu = !showMobileMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" id="navbar-menu" v-bind:class="{'is-active': showMobileMenu}">
        <div class="navbar-end">
          <div class="navbar-item ">Collections: </div>
          <router-link class="navbar-item" :to="{name: 'collection.show_all'}">View All</router-link>
          <router-link class="navbar-item" v-for="collection in collections"
                       :key="collection.id"
                       :to="{name: 'collection.show', params:{id: collection.id, slug: collection.slug}}">
            {{collection.name}}
          </router-link>
          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/log-in" class="button is-light">Log In</router-link>
              <router-link to="/cart" class="button is-success">
                <span class="icon"> <i class="fas fa-shopping-cart"></i></span>
                <span>Cart</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <section class="section">
      <router-view :key="$route.path"/>
    </section>

    <footer class="footer">
      <p class="has-text-centered">Muh Mega LEks</p>
    </footer>

  </div>

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      showMobileMenu: false,
      collections: [],

    }
  },
  mounted() {
    this.getCollections()
  },
  methods:{
    getCollections(){
      axios.get('/api/v1/collections/').then(response =>{
        this.collections = response.data
      })
          .catch(error =>{
            console.log(error)
          })
    }
  },


}
</script>

<style lang="scss">
@import '../node_modules/bulma';


</style>
