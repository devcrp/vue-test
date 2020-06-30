<template>
  <div id="app">
    <div id="nav" class="d-flex align-items-center justify-content-between">
      <router-link class="brand-text" to="/">accab</router-link>
      <router-link to="/help">¿necesitas ayuda?</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Montserrat", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
.highlight {
  color: #dc143c;
}
body {
  background-color: #e5e5e5 !important;
}
</style>

<style scoped>
#nav {
  padding: 15px;
  position: absolute;
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

.brand-text {
  color: #dc143c !important;
  font-size: 1.2rem;
}
</style>
