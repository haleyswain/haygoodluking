<template>
    <div class="accoms-container">
        <div class="header-container">
        </div>
        <div class="camping-message">
        </div>
        <div class="accoms-options-container">
            <div class="camper">
            </div>
            <div class="rv">
            </div>
            <div class="tent">
            </div>
            <div class="hotel">
            </div>
            <div class="grand-lodge" @click="goToGrandLodge()">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Accommodations",
  methods: {
    goToGrandLodge() {
      window.open("https://www.mcmenamins.com/grand-lodge", '_blank').focus();
    }
  },
}

</script>

<style scoped lang="scss">
.accoms-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 600px) {
      justify-content: center;
      margin-left: 20%;
  }
}
.header-container {
  background: transparent url(../assets/camping-header.png) 50% no-repeat;
  padding: 150px 250px;
  background-size: 100% 100%;
  @media (max-width: 600px) {
    padding: 85px 190px;
  }
}
.header-container img {
    height: 290px;
    width: 590px;
    @media (max-width: 600px) {
      margin: auto;
      width: 300px;
  }
}
.camper {
  background: transparent url(../assets/camper.png) 50% no-repeat;
  padding: 150px 250px;
    @media (max-width: 600px) {
      width: 170px;
      background-size: 65% 70%;
  }
}
.hotel {
  background: transparent url(../assets/hotel.png) 50% no-repeat;
  padding: 150px 250px; 
    @media (max-width: 600px) {
      width: 170px;
      background-size: 65% 80%;
  }
}
.grand-lodge {
  background: transparent url(../assets/grand-lodge.png) 50% no-repeat;
  padding: 150px 250px; 
  cursor: pointer;
  z-index: 2;
    @media (max-width: 600px) {
      width: 170px;
      background-size: 65% 80%;
  }
}
.rv {
  background: transparent url(../assets/RV.png) 50% no-repeat;
  padding: 150px 250px;
    @media (max-width: 600px) {
      width: 170px;
      background-size: 65% 80%;
  }
}
.tent {
  background: transparent url(../assets/tent.png) 50% no-repeat;
  padding: 150px 250px;
    @media (max-width: 600px) {
      width: 170px;
      background-size: 65% 80%;
  }
}
.accoms-options-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 600px) {
      flex-direction: column;
  }
}
.camping-message {
    background: transparent url(../assets/camping-message.png) 50% no-repeat;
    padding: 140px 530px;
    @media (max-width: 600px) {
      background: transparent url(../assets/camping-message1.png) 50% no-repeat;
      padding: 100px 225px;
      display: flex;
      align-content: center;
      background-size: 85%;
  }
}
</style>