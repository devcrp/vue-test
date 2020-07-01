<template>
  <div id="app">
    <div id="nav" class="d-flex align-items-center justify-content-between">
      <router-link class="brand-text" to="/">accab</router-link>
      <div>
        <router-link to="/help" class="px-3 highlight">colabora</router-link>
        <router-link to="/contact" class="px-3">contacto</router-link>
        <router-link to="/blog" class="px-3">blog</router-link>
        <router-link to="/help" class="pl-3">¿necesitas ayuda?</router-link>
      </div>
    </div>
    <div class="content">
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Montserrat", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}
.highlight {
  color: #dc143c !important;
}
.alt-container {
  background-color: #dc143c;
}
.alt-container .highlight,
.alt-container p,
.alt-container h3,
.alt-container h4 {
  color: white !important;
}
</style>

<style scoped>
#nav {
  z-index: 3;
  position: fixed;
  width: 100%;
  top: 0px;
  left: 0px;
  padding: 15px;
  background-color: white;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

.brand-text {
  color: #dc143c !important;
  font-size: 1.2rem;
}
.content {
  /*navbar height*/
  margin-top: 58px;
}
</style>
