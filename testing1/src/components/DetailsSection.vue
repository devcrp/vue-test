<template>
  <div
    id="details-section"
    class="home-section d-flex flex-column justify-content-center separator"
  >
    <div>
      <h1>
        I ❤️ to create and deliver beautiful code everywhere from
        <a
          class="highlight-alt"
          href="https://www.google.com/search?tbm=isch&as_q=mallorca&tbs=isz:lt,islt:4mp,sur:fmc"
          target="blank"
          >Mallorca</a
        >
      </h1>
      <div class="mt-5 mb-5">
        <TechStack />
      </div>
      <b-button variant="light" size="lg" v-on:click="$emit('skipTo', next)"
        ><i class="fas fa-arrow-down mr-3"></i>Check out my recent projects<i
          class="fas fa-arrow-down ml-3"
        ></i
      ></b-button>
    </div>
  </div>
</template>

<script>
import TechStack from "../components/home/TechStack";

export default {
  name: "DetailsSection",
  components: {
    TechStack,
  },
  props: {
    prev: String,
    next: String,
  },
};
</script>

<style scoped></style>
