<template>
  <div>
    <a-scene>
      <!--<a-camera position='0 2 8' user-height='0'></a-camera>-->
      <a-sphere :position='moon' src="./../../../static/img/moon1.jpg" radius="1.5" segments-height="20">
        <!--<a-sphere src="./../../../static/img/earth_atmos_4096.jpg" radius="1.5" segments-height="53">-->
        <a-animation attribute="rotation"
                     dur="10000"
                     fill= "forwards"
                     to="0 360 0"
                     easing="linear"
                     repeat="indefinite"></a-animation>
      </a-sphere>
      <a-sphere position="5 1.25 -8" src="./../../../static/img/sun.jpg" radius="1.5" segments-height="20">
        <!--<a-sphere src="./../../../static/img/earth_atmos_4096.jpg" radius="1.5" segments-height="53">-->
        <a-animation attribute="rotation"
                     dur="100000"
                     fill= "forwards"
                     to="0 360 0"
                     easing="linear"
                     repeat="indefinite"></a-animation>
      </a-sphere>
      <a-sky segments-height="100" segments-width="100"  src="./../../../static/img/stars_sky_night_113553_3100x1740.jpg" color="#555" rotation="0 -90 0"></a-sky>
    </a-scene>
  </div>
</template>

<script>
import '../../../static/js/aframe.min.js'
export default {
  name: 'test',
  data () {
    return {
      moon: ''
    }
  },
  methods: {
    getmoon () {
      this.moon = '-5 1.25 -8'
      // setTimeout(this.moon = '0 0 -5', 2000)
    }
  },
  created () {
    this.getmoon()
  }
}
</script>

<style scoped>

</style>
