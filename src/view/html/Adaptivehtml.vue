<template>
    <div>
      <h1>自适应布局（Adaptive Layout）</h1>
      <div class="AdaptiveLeft">
        <ul>
          <li><strong>布局特点</strong>分别为不同的屏幕分辨率定义布局。布局切换时页面元素发生改变，但在每个布局中，页面元素不随窗口大小的调整发生变化。你可以把自适应布局看作是静态布局的一个系列。</li>
          <li><strong>优点</strong>元素大小不变</li>
          <li><strong>缺点</strong>大小不变，布局改变可能会造成布局混乱</li>
          <li><strong>实现方法</strong>就是说你看到的页面，里面元素的位置会变化而大小不会变化；</li>
        </ul>
      </div>
      <div class="Adaptivemain">
        <div v-for="(item,index) in 8" :key="index" class="list">
          <div class="icon1"></div>
            {{item}}
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Adaptivehtml'
}
</script>

<style scoped>
  h1{text-align: center;}
  .list{
    width: 200px;
    height: 300px;
    text-align: center;
    float: left;
  }
  .AdaptiveLeft{
    width: 600px;
    height: auto;
    margin: 0 auto;
    border: 1px dashed rgba(77,0,55,0.2);
    border-radius: 10px;
    text-align: left;
  }
  .AdaptiveLeft li{
    list-style-type: none;
    padding: 5px;
  }
  .icon1{
    width: 200px;
    height: 200px;
    z-index: -1;
    background: url('../../../static/img/icon.png') -890px -670px;
  }
  .icon1:hover{
    background-color: rgba(0,0,0,0.5);
    /*opacity: 0.5;*/
  }
  .icon1:active:after{
    display: block;
    width: 200px;
    height: 200px;
    content: "this is active after";
    text-align: center;
    font-size: 2em;
    color: white;
    background-color: red;
    opacity: 0.5;
  }

</style>
