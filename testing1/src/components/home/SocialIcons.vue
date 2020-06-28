<template>
  <div class="social-icons d-flex justify-content-between">
    <a id="github-link" href="https://github.com/devcrp" class="github"
      ><i class="fab fa-github"></i
    ></a>
    <!-- <b-tooltip
      target="github-link"
      title="Tooltip title"
      triggers="hover"
      variant="light"
      placement="left"
    >
      Tooltip title
    </b-tooltip> -->

    <a
      id="stackoverflow-link"
      href="https://stackexchange.com/users/15729630"
      class="stackoverflow"
      ><i class="fab fa-stack-overflow"></i
    ></a>

    <a
      id="linkedin-link"
      href="https://www.linkedin.com/in/crlsrp/"
      class="linkedin"
      ><i class="fab fa-linkedin"></i
    ></a>
  </div>
</template>

<script>
export default {
  name: "SocialIcons",
};
</script>

<style scoped>
.social-icons {
  max-width: 150px;
  margin: auto;
}
.social-icons i {
  font-size: 2rem;
}
.social-icons a {
  color: white;
}
.social-icons a.linkedin:hover {
  color: #0077b7;
}
.social-icons a.stackoverflow:hover {
  color: #f48024;
}
.social-icons a.github:hover {
  color: black;
}
</style>
