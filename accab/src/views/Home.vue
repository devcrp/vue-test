<template>
  <div class="home">
    <Header />

    <WhoWeAre />

    <Events />

    <Team />
  </div>
</template>

<script>
import Header from "../components/home/Header";
import Events from "../components/home/Events";
import WhoWeAre from "../components/home/WhoWeAre";
import Team from "../components/home/Team";

export default {
  name: "Home",
  components: {
    Header,
    Events,
    WhoWeAre,
    Team
  }
};
</script>

<style>
h2 {
  text-align: center;
}
</style>
