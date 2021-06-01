<template>
  <section class="bg-title-page p-t-50 p-b-40 flex-col-c-m" :style="'background-image: url(' + data.image + ');'">
    <h2 class="l-text2 t-center">
      {{ data.title }}
    </h2>
    <p class="m-text13 t-center">
      {{ data.sub_title }}
    </p>
  </section>
</template>

<script>
export default {
  props: {
    data: Object
  }
}
</script>
<style lang="scss" scoped>
.bg-title-page {
  width: 100%;
  min-height: 239px;
  padding-left: 15px;
  padding-right: 15px;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: cover;
}

.flex-col-c-m {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.p-b-40 {
  padding-bottom: 40px;
}

.p-t-50 {
  padding-top: 50px;
}

.l-text2 {

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  color: white;
  line-height: 1.2;
  text-transform: uppercase;
}

.m-text13 {
  font-size: 18px;
  color: white;
  line-height: 1.8;
}

.t-center {
  text-align: center;
}
</style>
