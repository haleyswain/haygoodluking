<template>
  <div class="cloud1"></div>
  <Home></Home>
</template>

<script>
import Home from "./views/Home";
export default {
  components: {
    Home
  }
}
</script>

<style lang="scss">
.cloud1 {
    position: absolute;
    width: 100%;
    height: 8225px;
    background: transparent url(./assets/cloud.png) 0 0px repeat-x;
    left: 0px;
    @media (max-width: 800px) {
      background: transparent url(./assets/cloud.png) 50% 0px repeat-x;
      background-size: 300px 200px;
      background-repeat: no-repeat;
      margin: 80px 80px 0 150px;
  }
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #758b9a;
  min-width: fit-content;
}
</style>
