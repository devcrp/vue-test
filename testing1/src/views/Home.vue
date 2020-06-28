<template>
  <div class="home px-5">
    <VideoBackground />
    <Navigator />

    <WelcomeSection v-on:skipTo="onSkipSection" next="details-section" />
    <DetailsSection
      v-on:skipTo="onSkipSection"
      prev="welcome-section"
      next="projects-section"
    />
    <ProjectsSection v-on:skipTo="onSkipSection" prev="details-section" />
  </div>
</template>

<script>
import VideoBackground from "../components/home/VideoBackground";
import Navigator from "../components/Navigator";
import WelcomeSection from "../components/WelcomeSection";
import DetailsSection from "../components/DetailsSection";
import ProjectsSection from "../components/ProjectsSection";
import Scroll from "../utils/Scroll";

export default {
  name: "Home",
  components: {
    VideoBackground,
    WelcomeSection,
    DetailsSection,
    Navigator,
    ProjectsSection,
  },
  methods: {
    onSkipSection: (elId) => {
      Scroll.doScrolling(`#${elId}`, 1000);
    },
  },
};
</script>

<style>
.home-section {
  height: 100vh;
  position: relative;
}
</style>
