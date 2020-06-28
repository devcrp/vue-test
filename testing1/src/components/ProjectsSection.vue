<template>
  <div
    id="projects-section"
    class="home-section d-flex flex-column justify-content-center separator"
  >
    <StepBackButton
      v-bind:to="prev"
      v-on:skipTo="(elId) => $emit('skipTo', elId)"
    />
    <h1>Lately I've been working on</h1>
  </div>
</template>

<script>
import StepBackButton from "./home/StepBackButton";

export default {
  name: "ProjectsSection",
  props: {
    prev: String,
  },
  components: {
    StepBackButton,
  },
};
</script>
