<template>
    <div>
      <h1>响应式布局（Responsive Layout）</h1>
      <div class="LiquidLeft">
        <ul>
          <li><strong>布局特点</strong>响应式布局是Ethan Marcotte在2010年5月份提出的一个概念，简而言之，就是一个网站能够兼容多个终端——而不是为每个终端做一个特定的版本。这个概念是为解决移动互联网浏览而诞生的。</li>
          <li><strong>优点</strong>面对不同分辨率设备灵活性强  能够快捷解决多设备显示适应问题</li>
          <li><strong>缺点</strong>兼容各种设备工作量大，效率低下 代码累赘，会出现隐藏无用的元素，加载时间加长 其实这是一种折中性质的设计解决方案，多方面因素影响而达不到最佳效果 一定程度上改变了网站原有的布局结构，会出现用户混淆的情况</li>
          <li><strong>实现方法</strong>查询媒介，查询到当前屏幕(媒介媒体)的宽度，针对不同的屏幕宽度设置不同的样式来适应不同屏幕。当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面。简单说，你可以设置 不同屏幕下面的不同的样式，达到适配不同的屏幕的目的。</li>
        </ul>
      </div>
      <div class="container">
        <div class="containerleft">
          <div class="icon1"></div>
        </div>
        <div class="containermain">
          <div class="icon2"></div>
        </div>
        <div class="containerright"></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Responsivehtml'
}
</script>

<style scoped>
  h1{
    text-align: center;
  }
  .LiquidLeft{
    width:1200px;
    margin: 0 auto;
    height: auto;
    background-color: rgba(192,168,1,0.2);
  }
  .container{
    width:1200px;
    margin: 0 auto;
    height:600px;
    background-color: rgba(255,0,0,0.2);

  }
  .containerleft:after{
    content: '/*大屏幕   w >= 1200*/ 当使用响应式布局时，尽量少使用after和before，因为没有覆盖重写的话，其他格式的after和before会混乱显示。此段的css会被其他分辨率的继承';
  }
  .containerleft{
    float: left;
    width: 20%;
    min-width: 200px;
    height: 600px;
    position: relative;
    margin-left: 0;
    background-color: rgba(255,0,0,0.2);
  }
  .containermain{
    float: left;
    width: 60%;
    height: 600px;
    background-color: rgba(255,0,0,0.6);
  }
  .icon1{
    width: 200px;
    height: 200px;
    background:  url('../../../static/img/css_icon.png') -890px -670px;
  }
  .icon2{
    width: 200px;
    height: 200px;
    background: url('../../../static/img/css_icon.png') -450px -670px;
  }
  .containerright{
    float: left;
    width: 20%;
    height: 600px;
    background-color: cyan;
  }
  /*媒体查询：注意and后面空格的添加*/
  /*iphone: w < 768px*/
  @media screen and (max-width: 768px){
    .LiquidLeft{
      width: 100%;
    }
    .container{
      width:100%;
      background-color: green;
    }
    .containerleft:after{
      content: '/*iphone: w < 768px*/';
    }
    .containerleft{
      width:100%;
      height: 200px;
      position: relative;
      margin-left: 0;
      background-color: rgba(255,0,0,0.2);
    }
    .containermain{
      width:100%;
      height: 400px;
      background-color: rgba(255,0,0,0.6);
    }
    .containerright{
      width: 100%;
      height: 100px;
      background-color: cyan;
    }
  }
  /*pad: w >= 768  && w< 992*/
  @media screen and (max-width: 992px) and (min-width: 768px) {
    .LiquidLeft{
      width: 750px;
    }
    .container{
      width:750px;
      background-color: blue;
    }
    .container:after{
      content: '/*pad: w >= 768  && w< 992*/';
    }
  }
  /*中等屏幕   w >= 992  && w<1200*/
  @media screen and (max-width: 1200px) and (min-width: 992px) {
    .LiquidLeft{
      width: 970px;
    }
    .container{
      width:970px;
      background-color: pink;
    }
    .container:after{
      content: '/*中等屏幕   w >= 992  && w<1200*/';
    }
  }

</style>
