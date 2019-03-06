<template>
  <div>
    <div style="width: 70%;margin-left: 15%;">
      <div class="maindiv" v-bind:class="{ red: backgroundColorred , green:backgroundColorgreen}">
        <div class="testdiv" v-bind:class="{ location: islocation , rotate:isrotate, translation :istranslation ,animation:isanimation}">this is a div</div>
      </div>
      <div style="width: 20%;">
        <el-button @click="changebackgroundColor">更换背景颜色</el-button>
        <el-button @click="changelocation">{{thislocation}}</el-button>
        <el-button @click="changetranslation">{{thistranslation}}</el-button>
        <el-button @click="changerotate">{{thisrotate}}</el-button>
        <el-button @click="changeanimation">{{thisanimation}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'change',
  data () {
    return {
      backgroundColorred: true,
      backgroundColorgreen: '',
      islocation: '',
      isrotate: '',
      istranslation: '',
      isanimation: '',
      thislocation: '居中',
      thisrotate: '平移（循环）',
      thistranslation: '旋转',
      thisanimation: '动画'
    }
  },
  methods: {
    changelocation () {
      if (this.islocation) {
        this.islocation = false
        this.thislocation = '居中'
      } else {
        this.islocation = true
        this.thislocation = '停止'
      }
    },
    changerotate () {
      if (this.isrotate) {
        this.isrotate = false
        this.thisrotate = '平移（循环）'
      } else {
        this.isrotate = true
        this.thisrotate = '停止'
      }
    },
    changetranslation () {
      if (this.istranslation) {
        this.istranslation = false
        this.thistranslation = '旋转'
      } else {
        this.istranslation = true
        this.thistranslation = '停止'
      }
    },
    changeanimation () {
      if (this.isanimation) {
        this.isanimation = false
        this.thisanimation = '动画'
      } else {
        this.isanimation = true
        this.thisanimation = '停止'
      }
    },
    changebackgroundColor () {
      if (this.backgroundColorred) {
        this.backgroundColorred = false
        this.backgroundColorgreen = true
      } else if (this.backgroundColorgreen) {
        this.backgroundColorgreen = false
      } else {
        this.backgroundColorred = true
      }
    }
  }
}
</script>

<style scoped>
  div{
    width: 100%;
    float: left;
  }
  .el-button{
    float: left;
    margin: 10px;
    onclick: color black;
  }
  .maindiv{
    width: 80%;
    height: 800px;
  }
  .testdiv{
    width: 100px;
    height: 100px;
    border: 1px solid;
  }
  .red{
    background: radial-gradient(red , orange , yellow );
  }
  .green{
    background: linear-gradient(to right, red, orange, yellow, violet);
  }
  .location{
    position: relative;
    top: 50%;
    left: 50%;
    margin-left:-50px;
    margin-top:-50px;
    text-align: center;
    line-height: 100px;
  }
  .rotate{
    transform: rotate(360deg);
    transition:transform 2s linear 1s;
  }
  .translation{
    position:relative;
    animation:myfirst1 5s linear 1s infinite alternate;
  }
  .animation{
    position:relative;
    animation:myfirst 5s linear 2s infinite alternate;
  }
  @keyframes myfirst1 {
    0%   {background:yellow; left:0; top:100px;}
    100% {background:yellow; left:100%; top:100px;}
  }
  @keyframes myfirst {
    0%   {background:yellow; left:0px; top:0px;}
    25%  {background:orange; left:50%; top:0px;}
    50%  {background:red; left:50%; top:200px;}
    75%  {background:orange; left:0px; top:200px;}
    100% {background:yellow; left:0px; top:0px;}
  }
</style>
