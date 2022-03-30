<template>
    <div class="FAQ-container">
        <div class="header-container">
        </div>
        <div class="FAQ-parts-container">
            <div class="FAQ1"></div>
            <div class="FAQ2"></div>
            <div class="FAQ3"></div>
            <div class="FAQ4"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: "FAQ"
}

</script>

<style scoped lang="scss">
.FAQ-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 600px) {
      justify-content: center;
  }
}
.header-container {
  background: transparent url(../assets/FAQHeader.png) 50% no-repeat;
  padding: 150px 250px;
  background-size: 100%;
  @media (max-width: 600px) {
    padding: 85px 190px;
  }
}
.FAQ1 {
  background: transparent url(../assets/FAQ1.png) 50% no-repeat;
  padding: 170px 360px;
    @media (max-width: 600px) {
      background: transparent url(../assets/FAQ1.png) 50% no-repeat;
      background-size: 330px 200px;
      margin: auto;
      padding: 90px;
  }
}
.FAQ2 {
  background: transparent url(../assets/FAQ2.png) 50% no-repeat;
  padding: 170px 360px;
    @media (max-width: 600px) {
      width: 170px;
      background-size: 330px 200px;
      margin: auto;
      padding: 90px;
  }
}
.FAQ3 {
  background: transparent url(../assets/FAQ3.png) 50% no-repeat;
  padding: 150px 360px;
    @media (max-width: 600px) {
      width: 170px;
      background-size: 330px 200px;
      margin: auto;
      padding: 90px;
  }
}
.FAQ4 {
  background: transparent url(../assets/FAQ4.png) 50% no-repeat;
  padding: 170px 360px;
    @media (max-width: 600px) {
      width: 170px;
      background-size: 330px 200px;
      margin: auto;
      padding: 90px;
  }
}
</style>