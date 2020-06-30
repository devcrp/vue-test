<template>
  <div class="background">
    <div class="overlay"></div>
    <video autoplay muted loop src="../../assets/background.mp4"></video>
  </div>
</template>

<script>
export default {
  name: "Background"
};
</script>

<style scoped>
.background {
  position: absolute;
  width: 100%;
  height: 80vh;
  z-index: -1;
  overflow: hidden;
}
video {
  width: 100%;
}
.overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>