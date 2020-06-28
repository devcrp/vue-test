<template>
  <div
    id="welcome-section"
    class="home-section d-flex flex-column justify-content-center"
  >
    <div>
      <h1>Hello, my name is Carlos</h1>
      <h1 class="highlight">Another Full Stack Developer 🔥</h1>
      <b-tooltip
        target="my-name"
        title="Tooltip title"
        triggers="hover"
        variant="light"
        placement="top"
      >
        aka @devcrp
      </b-tooltip>

      <div class="mt-4 mb-5">
        <SocialIcons />
      </div>

      <b-button variant="light" size="lg" v-on:click="$emit('skipTo', next)"
        ><i class="fas fa-arrow-down mr-3"></i>But there's more!<i
          class="fas fa-arrow-down ml-3"
        ></i
      ></b-button>
    </div>
  </div>
</template>

<script>
import SocialIcons from "./home/SocialIcons";

export default {
  name: "WelcomeSection",
  components: {
    SocialIcons,
  },
  props: {
    next: String,
  },
};
</script>

<style scoped>
h1 {
  font-size: 4rem;
}
</style>
