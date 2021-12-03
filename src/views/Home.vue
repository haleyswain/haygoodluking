<template>
  <div class="container">
    <div id="nav">
      <a @click="navigateToWeekend"><img src="../assets/details.png"></a>
      <a @click="navigateToLodging"><img src="../assets/accommodations-nav.png"></a>
      <a @click="navigateToSchedule"><img src="../assets/schedule-nav.png"></a>
    </div>
    <div class="section1">
      <div class="date"></div>
      <div class="illustration"></div>
      <div class="location"></div>
      <div class="location-address"></div>
    </div>
    <div class="section2" ref="weekend">
      <Details />
    </div>
    <div class="section3" ref="lodging" id="lodging">
      <Accommodations />
    </div>
    <div class="section4" ref="schedule" id="schedule">
      <Schedule />
    </div>
  </div>
</template>

<script>
import Details from "./Details";
import Accommodations from "./Accommodations";
import Schedule from "./Schedule";
export default {
  name: 'Home',
  components: {
    Details,
    Accommodations,
    Schedule
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
        el.scrollIntoView({behavior: 'smooth'});
      }
    },
    navigateToSchedule() {
        const el = document.getElementById("schedule");
        if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({behavior: 'smooth'});
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 600px) {
      max-width: 100vw;
      min-width: 100vw;
  }
}
.section1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
}
.date {
  background: transparent url(../assets/date.png) 50% no-repeat;
  padding: 150px;
}
.illustration {
  background: transparent url(../assets/illustration.png) 50% no-repeat;
  padding: 110px;
  background-size: 65%;
}
.location {
    background: transparent url(../assets/vernonia-springs.png) 50% no-repeat;
    padding: 170px;
      @media (max-width: 600px) {
        background-size: 80%;
        padding: 175px 250px;
    }
}
.cloud1 {
    height: 100%;
    background: transparent url(../assets/cloud.png) 50% repeat-x;
    padding: 100px;
    @media (max-width: 600px) {
      background-repeat: no-repeat;
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
    flex-wrap: wrap;
    padding-right: 25px;
  }
}
#nav a img {
  height: 60px;
  top: 50px;
  position: relative;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  width: 70px;
  height: 50px;
}
</style>
