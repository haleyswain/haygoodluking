<template>
  <div class="weekend">
    <div class="header">
    </div>
    <div class="details-container">
      <img src="../assets/prty.svg" />
      <img src="../assets/reception.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Weekend',
}
</script>

<style scoped lang="scss">
.weekend {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.header {
  background: center transparent url(../assets/details-header.png) no-repeat;
  height: 250px;
  width: 590px;
  margin: auto;
}
.details-container {
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
  }
}
.details-container img {
  width: 500px;
  margin:auto;
}
</style>

