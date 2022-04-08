<template>
  <div id="wrapper" class="wrapper">
    <nav class="navbar">
      <the-nav></the-nav>
    </nav>
    <section class="section">
      <router-view :key="$route.path"/>
    </section>
    <footer class="footer">
      <p class="has-text-centered">This is the footer.</p>
    </footer>

  </div>

</template>

<script>
import axios from 'axios';
import theNav from "@/components/TheNav";
export default {
  data() {
    return {
      showMobileMenu: false,
      collections: [],

    }
  },
  components: {
    theNav
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




.wrapper{

}
.title{
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.subtitle{
  font-family: 'Merriweather', serif;
}
.display-button{
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}



@import '../node_modules/bulma';


</style>
