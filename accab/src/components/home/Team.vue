<template>
  <div>
    <b-container class="py-5">
      <h2 class="highlight mb-4">Nuestro Equipo</h2>
    </b-container>
    <b-container fluid>
      <b-row>
        <b-col
          lg="3"
          class="d-flex justify-content-center align-items-center flex-column"
          v-bind:key="member.id"
          v-for="member in this.team"
        >
          <div class="team-pic" :style="teamPicStyle(member.id)"></div>
          <h3 class="mt-3">{{member.name}}</h3>
          <h5 class="highlight">{{member.title}}</h5>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Team",
  methods: {
    teamPicStyle(i) {
      return {
        backgroundImage: "url(" + require(`@/assets/team/${i}.jpg`) + ")"
      };
    }
  },
  data() {
    return {
      team: [
        {
          title: "Presidenta",
          name: "Marta",
          id: 1
        },
        {
          title: "Vicepresidente",
          name: "Manolo",
          id: 2
        },
        {
          title: "Tesorero",
          name: "Joaquín",
          id: 3
        },
        {
          title: "Secretario",
          name: "Fernando",
          id: 4
        }
      ]
    };
  }
};
</script>

<style scoped>
.team-pic {
  height: 500px;
  width: 350px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>