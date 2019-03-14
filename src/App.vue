<template>
  <div id="app">
      <Header style="width: 100%;"></Header>
      <router-view/>
      <Footer class="footer"></Footer>
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
  .footer{
    float: left;
    width: 100%;
    height:50px;
  }
</style>
