<template>
  <div>
    <Header/>
    <Snackbar/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Snackbar from '~/components/core/Snackbar.vue'

export default {
  head: {
    link: [
      {rel: 'stylesheet', href: '/libs/index/bootstrap.min.css'},
      {rel: 'stylesheet', href: '/css/style.css'}
    ],
  },
  components: {
    Header, Footer, Snackbar
  },
}
</script>
