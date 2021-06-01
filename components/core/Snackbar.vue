<template>
  <v-app>
    <v-snackbar v-model="show" color="success" :timeout="timeout" top>
      {{ message }}
      <v-btn text @click="show = false">Закрыть</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      message: '',
      color: '',
      timeout: 3000
    }
  },

  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'snackbar/SHOW_MESSAGE') {
        this.message = state.snackbar.content
        this.color = state.snackbar.color
        this.timeout = state.snackbar.timeout
        this.show = true
      }
    })
  }
}
</script>
<style>
.v-snack--top {
  padding-top: 0 !important;
}
</style>
