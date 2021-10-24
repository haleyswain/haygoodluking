<template>
    <div class="accoms-container">
        <div class="header-container">
            <img src="../assets/accoms.svg">
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
        </div>
    </div>
</template>

<script>

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
.header-container img {
    height: 350px;
    width: 500px;
    @media (max-width: 600px) {
      margin: auto;
  }
}
.camper {
  background: transparent url(../assets/camper.png) 50% no-repeat;
  padding: 150px 250px;
    @media (max-width: 600px) {
      width: 170px;
  }
}
.hotel {
  background: transparent url(../assets/hotel.png) 50% no-repeat;
  padding: 150px 250px; 
}
.rv {
  background: transparent url(../assets/RV.png) 50% no-repeat;
  padding: 150px 250px;
}
.tent {
  background: transparent url(../assets/tent.png) 50% no-repeat;
  padding: 150px 250px;
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
</style>