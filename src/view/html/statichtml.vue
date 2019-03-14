<template>
    <div class="StaticBody">
      <h1>静态布局（Static Layout）</h1>
      <div class="StaticLeft">
        <ul>
          <li><strong>布局概念</strong> 最传统、原始的Web布局设计。网页最外层容器(outer)有固定的大小,所有的内容以该容器为标准,超出宽高的部分用滚动条(overflow:scroll)来实现滚动查阅。</li>
          <li><strong>优点</strong>采用的是css2之前的写法,不存在浏览器兼容性。布局简单。</li>
          <li><strong>缺点</strong>但是移动端不可以使用pc端的页面,两个页面的布局不一致,移动端需要自己另外设计一个布局并使用不同域名呈现。</li>
          <li><strong>实现方法</strong>PC端:最外层居中,使用固定的宽(高)度,超出部分用滚动条查阅。移动端 由于静态布局不适用于手机端,所以一般都会另设计一个布局,并使用另一个域名。</li>
        </ul>
      </div>
      <div class="StaticRight">
        雪碧图 伪类
      </div>
    </div>
</template>

<script>
export default {
  name: 'statichtml'
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
  .StaticBody{
    margin: 0 auto;
    width: 1000px;
  }
  .StaticLeft{
    width: 800px;
    height: 200px;
    background-color: rgba(0,0,0,0.1);
  }
  .StaticLeft:hover{
    background-color: rgba(255,0,0,0.2);
  }
  .StaticLeft p{
    color: black;
    opacity: 1;
  }
  .StaticRight{
    position: relative;
    margin-left: 800px;
    margin-top: -200px;
    width: 200px;
    height: 200px;
    background: url("../../../static/img/css_icon.png") -10px -10px;
    opacity: 0.2;
  }
  .StaticRight:hover{
    background: url("../../../static/img/css_icon.png") -10px -230px;
    opacity: 1;
  }
  .StaticRight:active{
    background: url("../../../static/img/css_icon.png") -10px -450px;
    background-size:1100px;
    opacity: 1;
  }
</style>
