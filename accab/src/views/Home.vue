<template>
  <div class="home">
    <Background />
    <div class="content">
      <h1>
        Estamos para
        <span class="highlight">ayudarte</span>
      </h1>
    </div>
    <div class="panel">
      <h2>novedades</h2>
    </div>
  </div>
</template>

<script>
import Background from "../components/home/Background";

export default {
  name: "Home",
  components: {
    Background
  }
};
</script>

<style scoped>
.content {
  padding-top: 175px;
  margin-bottom: 250px;
}
h1 {
  color: white;
  font-size: 4rem;
}
h2 {
  text-align: left;
  font-weight: bold;
}
.panel {
  padding: 20px;
  width: 100%;
  max-width: 1024px;
  background-color: white;
  margin: auto;
  height: 800px;
}
</style>
