<template>
  <Header />
  <Home />
  <Map />
  <Footer />
</template>

<script>
  import Header from '@/components/Header.vue';
  import Home from '@/components/Home.vue';
  import Map from '@/components/Map.vue';
  import Footer from '@/components/Footer.vue';

  export default {
    components: {
      Header,
      Home,
      Map,
      Footer
    }
  }
</script>

<style lang="scss" scoped>

</style>