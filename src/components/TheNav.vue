<template>
  <div class="my-nav subtitle" id="myTopnav">
    <router-link class="display-button" :to="'/'">Ceramic Haven</router-link>
    <router-link class="display-button" :to=" '/products' ">
      All Products
    </router-link>
    <router-link class="display-button" :to="'/view-collection'">Collections</router-link>
    <a class="display-button">About Us</a>
    <a class="icon" @click="navFunction">
      <i class="fa fa-bars"></i>
    </a>
  </div>
</template>

<script>
function myFunction() {


}
export default {
  name: "TheNav",
  methods: {
    navFunction(){
      var x = document.getElementById("myTopnav");
      if (x.className === "my-nav") {
        x.className += " responsive";
      } else {
        x.className = "my-nav";
      }
    }
  }
}
</script>

<style lang="scss" scoped>

$display-color-main: #333;
$display-color-invert: white;

.my-nav{
  overflow: hidden;
  background-color: white;
  border-bottom: black solid 2px;
  border-top: black solid 2px;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 5px 5px;
}
.my-nav a{
  float: left;
  display:block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.my-nav .icon{
  display: none;

}


.display-button{
  flex: 1;
  background-color: $display-color-invert;
  color: $display-color-main;
  text-align: center;
  text-decoration: none;
  transition: all 0.5s ease-out;
}
.display-button:hover,
.display-button:focus{
  background-color: $display-color-main;
  color: white;
}
.router-link-active{
  background-color: orange;
  color: white;
}

@media screen and (max-width: 600px) {
  .my-nav a:not(:first-child) {display: none;}
  .my-nav a.icon {
    float: right;
    display: block;
    padding-right: 20px;
  }
}

@media screen and (max-width: 600px) {
  .my-nav.responsive {position: relative;}
  .my-nav.responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .my-nav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>