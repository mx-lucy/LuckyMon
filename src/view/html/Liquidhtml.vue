<template>
    <div class="LiquidBody">
      <h1>流式布局（Liquid Layout）</h1>
      <div class="LiquidLeft">
        <ul>
          <li><strong>布局特点</strong>屏幕分辨率变化时，页面里元素的大小会变化而但布局不变</li>
          <li><strong>优点</strong>页面元素的宽度按照屏幕分辨率进行适配调整，但整体布局不变。代表作栅栏系统（网格系统）。</li>
          <li><strong>缺点</strong>如果屏幕太大或者太小都会导致元素无法正常显示</li>
          <li><strong>实现方法</strong>使用%百分比定义宽度，高度大都是用px来固定住，可以根据可视区域 (viewport) 和父元素的实时尺寸进行调整，尽可能的适应各种分辨率。往往配合 max-width/min-width 等属性控制尺寸流动范围以免过大或者过小影响阅读。左侧固定+右侧自适应;左右固定宽度+中间自适应</li>
        </ul>
      </div>
      <div class="LiquidRight"></div>
      <div class="LiquidFooter">流式布局可以和静态布局相结合，通过百分百设置宽度，同时设置最小宽度min-width，最大宽度max-width
        <div class="LiquidFooter">流式布局可以和静态布局相结合，通过百分百设置宽度，同时设置最小宽度min-width，最大宽度max-width
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Liquidhtml'
}
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  h1{
    text-align: center ;
  }
  li{
    list-style-type: none;
  }
  li strong{
    font-size: 20px;
    color: black;
  }
  li strong:hover{
    color: #999999;
  }
  .LiquidBody{
    width: 80%;
    height: auto;
    margin-left: 10%;
    margin-right: 10%;
  }
  .LiquidLeft{
    float: left;
    width: 80%;
    min-height: 200px;
    background-color: rgba(1,1,1,0.1);
  }
  .LiquidRight{
    float: left;
    width: 20%;
    height: 200px;
    background: url("../../../static/img/icon.png") -230px -450px;
    opacity: 0.2;
  }
  .LiquidRight:hover:before{
    content:'before';
  }
  .LiquidRight:hover:after{
    content:'url(../../../static/img/css_icon.png) -450px -450px';
    background: url("../../../static/img/icon.png") -450px -450px;
  }
  .LiquidFooter{
    float: left;
    width: 100%;
    background-color: rgba(0,0,255,0.1);
    text-align: center;
    color: rgba(0,0,255,0.1);
  }
  .LiquidFooter:hover{
    color: #000;
  }
</style>
