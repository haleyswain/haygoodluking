<template>
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

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #758b9a;
  min-width: 100vw;
  max-width: 100vw;
  position: absolute;
}
html {
  min-width: 100%;
  max-width:100%;
}
</style>
