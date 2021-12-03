<template>
    <div class="schedule-container">
        <div class="header-container">
        </div>
        <div class="schedule-parts-container">
            <div class="part1"></div>
            <div class="part2"></div>
            <div class="part3"></div>
            <div class="part4"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Schedule"
}

</script>

<style scoped lang="scss">
.schedule-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 600px) {
      justify-content: center;
  }
}
.header-container {
  background: transparent url(../assets/schedule-header.png) 50% no-repeat;
  padding: 150px 250px;
  background-size: 100%;
  @media (max-width: 600px) {
    padding: 85px 190px;
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
.part1 {
  background: transparent url(../assets/part1.png) 50% no-repeat;
  padding: 170px 360px;
    @media (max-width: 600px) {
      background: transparent url(../assets/part1.png) 50% no-repeat;
      background-size: 330px 200px;
      margin: auto;
      padding: 120px;
  }
}
.part2 {
  background: transparent url(../assets/part2.png) 50% no-repeat;
  padding: 170px 360px;
    @media (max-width: 600px) {
      width: 170px;
      background-size: 330px 200px;
      margin: auto;
      padding: 120px;
  }
}
.part3 {
  background: transparent url(../assets/part3.png) 50% no-repeat;
  padding: 170px 360px;
    @media (max-width: 600px) {
      width: 170px;
      background-size: 330px 200px;
      margin: auto;
      padding: 120px;
  }
}
.part4 {
  background: transparent url(../assets/part4.png) 50% no-repeat;
  padding: 170px 360px;
    @media (max-width: 600px) {
      width: 170px;
      background-size: 330px 200px;
      margin: auto;
      padding: 120px;
  }
}
</style>