<template>
  <div class="back-button">
    <b-button variant="outline-light" v-on:click="$emit('skipTo', to)" size="sm"
      ><i class="fas fa-arrow-up mr-3"></i>Step back<i
        class="fas fa-arrow-up ml-3"
      ></i
    ></b-button>
  </div>
</template>

<script>
export default {
  name: "StepBackButton",
  props: {
    to: String,
  },
};
</script>

<style scoped>
.back-button {
  position: absolute;
  top: 30px;
  width: 100%;
}
</style>
