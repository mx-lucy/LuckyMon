<template>
    <div>
      <h1>弹性布局（rem/em布局）</h1>
      <h1>弹性布局(Flex Layout)</h1>
      <p><a href="http://layout.imweb.io/article/flexbox.html">Flexbox</a>,作者在网上找了很多博客，比较觉得，这篇写的最好。</p>
      <p>Flexbox布局是最合适的一个应用程序的组件，以及小规模的布局，而网格布局是用于较大规模的布局。</p>
      <div class="wrapfirst">
        <div style="order:1"><img src="../../../static/img/flex.png" style="width: 40em;"></div>
        <div class="div1" style="order:2">
          <pre>
            &lt;div class&#x3D;&quot;wrap&quot;&gt;
              &lt;div class&#x3D;&quot;div&quot; style&#x3D;&quot;order:2&quot;&gt;&lt;h2&gt;item 2&lt;&#x2F;h2&gt;&lt;&#x2F; div&gt;
              &lt;div class&#x3D;&quot;div&quot; style&#x3D;&quot;order:3&quot;&gt;&lt;h2&gt;item 3&lt;&#x2F;h2&gt;&lt;&#x2F; div&gt;
              &lt;div class&#x3D;&quot;div&quot; style&#x3D;&quot;order:1&quot;&gt;&lt;h2&gt;item 1&lt;&#x2F;h2&gt;&lt;&#x2F; div&gt;
            &lt;&#x2F; div&gt;
            .wrap{
              height: 800px;
              display: flex;
              justify-content: space-around;
              align-items: center;}
            .wrap div{
              width: 15em;
              height: 15em;
              text-align: center;
              line-height: 15em;
              background-color: rgba(192,168,1,0.1);}
          </pre>
        </div>
      </div>
      <div class="wrap">
        <div class="div2" style="order:2">
          <div class="circlemenu" >
            <div class="item" v-for="(item,index) in 8" :key="index">{{item}}</div>
          </div>
        </div>
        <div class="div0" style="order:3">
          <div></div>
          <h2>item 3</h2>
        </div>
        <div class="div0" style="order:1">
          <div></div>
          <h2>item 1</h2>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'elastichtml'
}
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  div{
     border: 1px dashed blueviolet;
   }
  h1{
    text-align: center;
  }
  .wrapfirst{
    display: flex;
  }
  .div1{
    flex-grow: 2;
    color: white;
  }
  .div1:hover{
    color: black;
  }
  .wrap{
    height: 800px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .div0{
    flex-shrink: 2;
    width: 15em;
    height: 15em;
    text-align: center;
    line-height: 15em;
    background-color: rgba(192,168,1,0.1);
  }
  .div0 div:after{
    float: left;
    margin-top: 20%;
    margin-left: 10%;
    content:"";
    display:block;
    background:url("../../../static/img/css_icon.png") -445px -225px;
    background-size: 550px;
    width: 100px;
    height: 100px;
  }
  .div2{
    flex-shrink: 1;
    width: 30em;
    height: 30em;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .circlemenu{
    width: 20em;
    height: 20em;
    border-radius: 10em;
    border: 2px dashed cyan;
  }
  .item{
    position: relative;
    width: 1em;
    height: 1em;
    border-radius: 0.5em;
    border: 1px dashed cyan;
  }
  .item:hover{
    width: 1.3em;
    height: 1.3em;
    border-radius: 0.65em;
  }
  .item:hover:after{
    content: "this is item";
    display: block;
    margin-left: -30%;
    margin-top: 80%;
    width: 100px;
    color: cyan;
    transition: all 0.5s ease;
  }
  .item:active{
    width: 1em;
    height: 1em;
    border-radius: 0.5em;
    background-color: blue;
    transition: all 0.5s ease;
  }
  .item:nth-of-type(1) {
    margin-left: 47%;
    margin-top: -3%;
  }
  .item:nth-of-type(2) {
    margin-left: 80%;
    margin-top: 7%;
  }
  .item:nth-of-type(3) {
    margin-left: 97%;
    margin-top: 33%;
  }
  .item:nth-of-type(4) {
    margin-left: 80%;
    margin-top: 32%;
  }
  .item:nth-of-type(5) {
    margin-left: 49%;
    margin-top: 6%;
  }
  .item:nth-of-type(6) {
    margin-left: 20%;
    margin-top: -13%;
  }
  .item:nth-of-type(7) {
    margin-left: -3%;
    margin-top: -45%;
  }
  .item:nth-of-type(8) {
    margin-left: 9%;
    margin-top: -42%;
   }
</style>
