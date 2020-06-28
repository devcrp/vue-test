<template>
  <div>
    <h3>My tech stack</h3>
    <h2>
      <b-badge class="mx-2 netcore">.NET Core</b-badge>
      <b-badge class="mx-2 bg-info">.NET Framework</b-badge>
      <b-badge class="mx-2 bg-warning">SQL Server</b-badge>
      <b-badge class="mx-2 vue">VueJS</b-badge>
      <b-badge class="mx-2 react">ReactJS</b-badge>
      <b-badge class="mx-2 bg-danger">Entity Framework</b-badge>
      <b-badge class="mx-2 bg-primary">Azure</b-badge>
    </h2>
  </div>
</template>

<script>
export default {
  name: "TechStack",
};
</script>

<style scoped>
.netcore {
  background-color: #621ee5;
}
.vue {
  background-color: #42b983;
}
.react {
  background-color: #61dafb;
  color: black;
}
</style>
