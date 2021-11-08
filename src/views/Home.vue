<template>
  <div class="container">
    <div class="cloud1"></div>
    <div id="nav">
      <a @click="navigateToWeekend"><img src="../assets/details.png"></a>
      <a @click="navigateToLodging"><img src="../assets/accommodations-nav.png"></a>
    </div>
    <div class="section1">
      <div class="date"></div>
      <div class="location"></div>
    </div>
    <div class="section2" ref="weekend">
      <Weekend />
    </div>
    <div class="section3" ref="lodging" id ="lodging">
      <Accommodations />
    </div>
  </div>
</template>

<script>
import Weekend from "./Weekend";
import Accommodations from "./Accommodations";
export default {
  name: 'Home',
  components: {
    Weekend,
    Accommodations
  },
  methods: {
    navigateToWeekend() {
        const el = this.$refs.weekend;
        if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({behavior: 'smooth'});
      }
    },
    navigateToLodging() {
        const el = document.getElementById("lodging");
        if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollTop = 0;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  width: auto;
  margin: 0px auto;
  position: relative;
  overflow: visible;
  z-index: 2;
}
.section1 {
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.date {
  background: transparent url(../assets/date.png) no-repeat;
  height: 95%;
  width: 50%;
  position: relative;
  top: 215px;
  right: 15%;
  @media (max-width: 600px) {
    margin: auto;
    padding: 70px;
    top: 30px;
    right: 7%;
  }
}
.location {
    background: transparent url(../assets/Vernonia-Springs.png) no-repeat;
    height: 45%;
    width: 50%;
    position: relative;
    left: 25%;
    @media (max-width: 600px) {
      background: transparent url(../assets/Vernonia-Springs.png) 40% no-repeat;
      margin: auto;
      height: 60%;
      width: 50%;
      left: 0%;
      top: 50px;
  }
}
.cloud1 {
    position: absolute;
    width: 100%;
    height: 8225px;
    background: transparent url(../assets/cloud.png) 0 0px repeat-x;
    left: 0px;
    @media (max-width: 600px) {
      background: transparent url(../assets/cloud.png) 50% 0px repeat-x;
      background-size: 300px 200px;
      background-repeat: no-repeat;
      top: 80px;
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#nav {
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
  }
}
#nav a img {
  height: 100px;
  top: 50px;
  position: relative;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  width: 100px;
  height: 50px;
}
</style>
