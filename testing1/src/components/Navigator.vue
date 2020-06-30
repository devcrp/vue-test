<template>
  <div class="sections-navigator d-flex flex-column justify-content-center">
    <b-button
      v-bind:key="section.id"
      v-for="section in this.sections"
      v-on:click="onClick(section.id)"
      class="my-1 border-0"
      v-bind:class="{ highlight: scrollPosition === section.index }"
      variant="outline-light"
      size="sm"
    >
      <i class="mr-2" v-bind:class="section.icon"></i>
      {{ section.text }}
    </b-button>
    <!-- <b-button
      class="my-1 border-0"
      variant="outline-light"
      size="sm"
      v-bind:class="{ highlight: scrollPosition === 1 }"
      >details</b-button
    >-->
  </div>
</template>

<script>
import Scroll from "../utils/Scroll";
let vh = 0;
export default {
  name: "Navigator",
  created() {
    window.onscroll = this.onScroll;
  },
  data() {
    return {
      scrollPosition: 0,
      sections: [
        {
          id: "welcome-section",
          icon: "far fa-play-circle",
          text: "welcome",
          index: 0
        },
        {
          id: "details-section",
          icon: "fas fa-qrcode",
          text: "details",
          index: 1
        },
        {
          id: "projects-section",
          icon: "fas fa-laptop-code",
          text: "projects",
          index: 2
        }
      ]
    };
  },
  methods: {
    onClick(to) {
      Scroll.doScrolling(`#${to}`, 1000);
    },
    onScroll() {
      if (vh === 0) {
        vh = document.querySelector("#welcome-section").offsetHeight;
      }
      if (vh) {
        const sectionPos = Math.round(window.scrollY / vh);
        console.log(this.scrollPosition);
        this.scrollPosition = sectionPos;
      }
    }
  }
};
</script>

<style scoped>
.sections-navigator {
  z-index: 2;
  position: fixed;
  height: 100vh;
  right: 10px;
}
.btn {
  text-align: right;
}
.btn:focus {
  box-shadow: none;
}
</style>
