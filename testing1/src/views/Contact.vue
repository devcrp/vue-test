<template>
  <div class="contact px-5">
    <VideoBackground>
      <source src="../assets/contact.mp4" type="video/mp4" />
    </VideoBackground>

    <div class="contact-section d-flex flex-column justify-content-center">
      <h1>This is an about page</h1>
    </div>
  </div>
</template>

<script>
import VideoBackground from "../components/home/VideoBackground";

export default {
  name: "Contact",
  components: {
    VideoBackground,
  },
};
</script>

<style scoped>
.contact-section {
  height: 100vh;
  position: relative;
}
</style>
