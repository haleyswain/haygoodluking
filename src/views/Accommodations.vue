<template>
    <div class="accoms-container">
        <div class="header-container">
        </div>
        <div class="camping-message">
        </div>
        <div class="accoms-options-container">
            <div class="rv">
            </div>
            <div class="tent">
            </div>
            <div class="hotel" @click="goToHotel()">
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
    },
    goToHotel() {
      window.open("https://www.ihg.com/staybridge/hotels/us/en/hillsboro/pdxhn/hoteldetail", '_blank').focus();
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
.hotel {
  background: transparent url(../assets/hotel.png) 50% no-repeat;
  padding: 150px 250px;
  background-size: 100% 100%;
  cursor: pointer;
    @media (max-width: 600px) {
      background: transparent url(../assets/hotel.png) 50% no-repeat;
      background-size: 330px 200px;
      margin: auto;
  }
}
.hotel:hover {
  border: 5px solid #E09F3E;
}
.grand-lodge {
  background: transparent url(../assets/grand-lodge.png) 50% no-repeat;
  padding: 150px 250px;
  background-size: 100% 100%;
  cursor: pointer;
    @media (max-width: 600px) {
      background: transparent url(../assets/grand-lodge.png) 50% no-repeat;
      background-size: 330px 200px;
      margin: auto;
  }
}
.grand-lodge:hover {
  border: 5px solid #E09F3E;
}
.rv {
  background: transparent url(../assets/camper.png) 50% no-repeat;
  padding: 150px 250px;
  background-size: 100% 100%;
    @media (max-width: 600px) {
      background: transparent url(../assets/camper.png) 50% no-repeat;
      background-size: 330px 200px;
      margin: auto;
      margin-left: 40px;
  }
}
.tent {
  background: transparent url(../assets/tent.png) 50% no-repeat;
  padding: 150px 250px;
  background-size: 100% 100%;
    @media (max-width: 600px) {
      background: transparent url(../assets/tent.png) 50% no-repeat;
      background-size: 330px 200px;
      margin: auto;
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
    background: transparent url(../assets/camping-message-3.png) 50% no-repeat;
    padding: 160px 530px;
    @media (max-width: 600px) {
      background: transparent url(../assets/camping-message-3.png) 50% no-repeat;
      background-size: 73%;
      display: flex;
      align-content: center;
      padding: 105px 246px;
  }
}
</style>