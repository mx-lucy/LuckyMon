<template>
  <div>
    <a-scene>
      <a-entity>
        <a-entity position="3 2 -10" geometry="primitive: sphere" material="src: ./static/img/moon1.jpg"></a-entity>
        <a-animation attribute="rotation" dur="10000" fill="forwards" to="0 0 360" repeat="indefinite"></a-animation>
      </a-entity>
      <!--<a-camera position='0 2 8' user-height='0'></a-camera>-->
      <a-sphere position='0 0 -8' src="./static/img/earth_atmos_4096.jpg" radius="1.5" segments-height="20">
        <!--<a-sphere src="./../../../static/img/earth_atmos_4096.jpg" radius="1.5" segments-height="53">-->
        <a-animation attribute="rotation"
                     dur="10000"
                     fill= "forwards"
                     to="0 360 0"
                     easing="linear"
                     repeat="indefinite"></a-animation>
      </a-sphere>
      <a-sky segments-height="100" segments-width="100"  src="./static/img/stars_sky_night_113553_3100x1740.jpg" color="#555" rotation="0 -90 0"></a-sky>
      <!--<a-sky segments-height="100" segments-width="100" color="#555" rotation="0 -90 0"></a-sky>-->
    </a-scene>
  </div>
</template>

<script>
import '../../../static/js/aframe.min.js'
export default {
  name: 'earth'
}
</script>

<style scoped>
</style>
