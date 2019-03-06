<template>
  <div id="app">
      <Header style="width: 100%;"></Header>
      <router-view/>
      <Footer style="width: 100%;"></Footer>
    <!--<img src="./assets/logo.png">-->
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
</style>
