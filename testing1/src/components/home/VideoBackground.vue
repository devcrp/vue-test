<template>
  <div>
    <video autoplay muted loop id="background-video">
      <source src="../../assets/background.mp4" type="video/mp4" />
    </video>
    <div id="overlay"></div>
  </div>
</template>

<script>
export default {
  name: "VideoBackground",
};
</script>

<style scoped>
#overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: -1;
  background-color: black;
  opacity: 0.5;
}
#background-video {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
