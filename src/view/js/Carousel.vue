<template>
  <div style="width: 70%;margin-left: 15%;">
    <div class="block">
      <span class="demonstration">默认 Hover 指示器触发</span>
      <el-carousel height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="block">
      <span class="demonstration">Click 指示器触发</span>
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="solid">
      <ul class="oUl"></ul>
      <ol>
        <li v-for="item in 4" :key="item" v-bind:class="{onshow:true, onshow1:itemon[item]}" @click="itemchange(item)" > {{ item }}</li>
      </ol>
    </div>
  </div>
</template>

<script>
// import './demo.js'
export default {
  name: 'Carousel',
  data () {
    return {
      itemon: [false, true, false, false, false],
      items: ''
    }
  },
  methods: {
    itemchange (item) {
      if (this.itemon[item] === true) {
        this.itemon.splice(item, 1, false)
      } else {
        this.itemon.splice(item, 1, true)
      }
      console.log(this.itemon)
    },
    changebutton () {
      if (this.isbutton) {
        this.isbutton = false
      } else {
        this.isbutton = true
      }
    }
  }
}
</script>

<style scoped>
  .button1{
    padding: 10px;
    border-radius: 10px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  li {
    list-style: none;
  }
  .solid {
    width: 800px;
    height: 360px;
    margin: 90px auto 0;
    box-shadow: 1px 3px 15px #fd8fd9;
  }
  .solid ul {
    height: 100%;
  }
  .solid ol {
    position: absolute;
    left: 50%;
    width: 140px;
    height: 20px;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-around;
  }
  .onshow {
    width: 20px;
    height: 20px;
    background: black;
    box-shadow: 0 2px 5px white;
    border-radius: 50%;
    color: white;
    text-align: center;
    /*斜体 12px大小/20px行高*/
    font: italic 12px/20px 'Microsoft Yahei';
    cursor: pointer;
  }
  .onshow:active:after{
    position: relative;
    margin-left: -150px;
    margin-top:-350px;
    width: 100px;
    height: 100px;
    display: block;
    background-color: blue;
    content: 'n';
    text-align: center;
    font: italic 50px/50px 'Microsoft Yahei';
  }
  .solid ol li:hover {
    background: gray;
  }
  .onshow1{
    background: gray;
    color: red;
  }
</style>
