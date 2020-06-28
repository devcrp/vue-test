<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">About me</router-link> |
      <router-link to="/contact">Send me a message</router-link>
    </div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

#nav {
  padding: 30px;
  z-index: 2;
  position: fixed;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #f39c12;
}

.highlight {
  color: #f48024 !important;
}
.highlight-alt {
  color: #00bc8c;
}

a.highlight-alt:hover {
  color: #00bc8c;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
