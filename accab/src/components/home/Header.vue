<template>
  <div>
    <div class="background-cover">
      <!-- <div class="background"></div> -->
      <video autoplay loop muted src="../../assets/background2.mp4" class="background-video"></video>
      <div
        class="background-video-overlay d-flex align-items-center justify-content-center flex-column px-4"
      >
        <h1>
          Estamos para
          <span class="highlight bg-white">ayudarte</span>
        </h1>
        <h2>Contacta con nosotros si sufres o conoces a alguien que sufra una cardiopatía congénita</h2>
      </div>
    </div>
    <div class="placeholder"></div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
h1 {
  color: white;
  font-size: 6rem;
}
h2 {
  color: white;
}

.placeholder,
.background-cover {
  height: 70vh;
  z-index: 0;
}
.background-cover {
  position: absolute;
  width: 100%;
  z-index: 1 !important;
  border-bottom-right-radius: 50%;
  overflow: hidden;
}
.background-video {
  min-height: 100%;
  min-width: 100%;
}
.background-video-overlay {
  position: absolute;
  top: 0px;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}
.background {
  height: 100%;
  width: 100%;
  background-image: url("~@/assets/background1.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
</style>