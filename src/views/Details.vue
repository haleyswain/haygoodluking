<template>
  <div class="weekend">
    <div class="header">
    </div>
    <div class="details-container">
      <div class="details-ceremony-time" />
      <div class="details-reception" />
      <div class="details-registry" @click="navigateToRegistry()" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Details',
  methods: {
    navigateToRegistry() {
      window.open("https://www.honeyfund.com/wedding/swain-philips-07-16-2022", '_blank').focus();
    }
  }
}
</script>

<style scoped lang="scss">
.weekend {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-right: none;
  @media (max-width: 600px) {
    margin-right: 15%;
  }
}
.header {
  background: center transparent url(../assets/details-header.png) no-repeat;
  height: 250px;
  width: 100vw;
  @media (max-width: 600px) {
    background-size: 85%;
    margin: auto;
  }
}
.details-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
}

.details-ceremony-time {
  background: center transparent url(../assets/ceremony-time.png) no-repeat;
  padding: 90px 190px;
  background-size: 100% 100%;
  @media (max-width: 600px) {
      background: transparent url(../assets/ceremony-time.png) 30% no-repeat;
      background-size: 100% 100%;
      margin: auto;
  }
}
.details-reception {
  background: center transparent url(../assets/reception-dinner1.png) no-repeat;
  padding: 90px 190px;
  background-size: 100% 100%;
    @media (max-width: 600px) {
      background: transparent url(../assets/reception-dinner1.png) 30% no-repeat;
      background-size: 100% 100%;
      margin: auto;
  }
}
.details-registry {
  background: center transparent url(../assets/gift.png) no-repeat;
  background-size: 100% 100%;
  padding: 90px 190px;
  cursor: pointer;
    @media (max-width: 600px) {
      background: transparent url(../assets/gift.png) 30% no-repeat;
      background-size: 100% 100%;
      margin: auto;
  }
}
.details-registry:hover {
  border: 5px solid #E09F3E;
}
</style>

