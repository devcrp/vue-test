<template>
  <b-container class="py-5 alt-container" fluid>
    <h2 class="highlight mb-4">Últimos eventos</h2>
    <b-container>
      <div
        class="d-flex justify-content-center align-items-center flex-column"
        v-bind:key="event.id"
        v-for="event in this.events"
      >
        <b-row class="w-100 mb-3">
          <b-col lg="3">
            <div class="event-pic" :style="eventPicStyle(event.id)"></div>
          </b-col>
          <b-col>
            <h4 class>{{event.title}}</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at vestibulum elit. Fusce pharetra, elit a commodo interdum, ante ante varius urna, at tristique turpis lacus a leo. Donec tempus orci eu efficitur facilisis. Vestibulum vehicula nisl massa, et blandit elit eleifend sed. Curabitur lacinia varius ante nec euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vitae urna vitae nulla faucibus consequat. Nulla nunc lacus, ultricies eget nisl eget, consequat sollicitudin nisl. Donec libero nisi, tempus sed nibh et, aliquam aliquet felis. Sed vulputate pulvinar vestibulum. Pellentesque non metus gravida, malesuada urna a, cursus metus. Etiam ut imperdiet eros. Nam quis tincidunt massa, nec facilisis ex. Curabitur gravida tellus ac libero scelerisque vehicula.</p>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <div class="d-flex justify-content-center mt-4">
      <b-btn variant="light" size="lg">Visita nuestro blog</b-btn>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Events",
  methods: {
    eventPicStyle(i) {
      return {
        backgroundImage: "url(" + require(`@/assets/events/${i}.jpg`) + ")"
      };
    }
  },
  data() {
    return {
      events: [
        {
          title: "Fiesta pijama",
          id: 1
        },
        {
          title: "Aniversario asociación",
          id: 2
        },
        {
          title: "14 de febrero",
          id: 3
        }
      ]
    };
  }
};
</script>

<style scoped>
.event-pic {
  height: 250px;
  width: 100%;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>