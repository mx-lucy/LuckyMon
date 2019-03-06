<template>
  <div>
    <div class="canvasmain">
      <div style="width: 60px;float: right">
        <el-color-picker v-model="color1"></el-color-picker>
        <el-button @click="print">画图(左)</el-button>
        <el-button @click="chessboard">棋盘(右)</el-button>
      </div>
      <div>
        <div style="width: 812px;height: 206px;">
          <h1>canvas 元素用于在网页上绘制图形。</h1>
          <p>HTML5 的 canvas 元素使用 JavaScript 在网页上绘制图像。画布是一个矩形区域，您可以控制其每一像素。canvas 拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。</p>
        </div>
        <canvas id="myCanvas0" width="400px" height="450px" style="border:1px solid #d3d3d3;"></canvas>
        <canvas id="myCanvas1" width="400px" height="450px" style="border:1px solid #d3d3d3;"></canvas>
      </div>
      <!--<el-button @click="c0">c0</el-button>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'canvas',
  data () {
    return {
      color1: '#409EFF'
    }
  },
  methods: {
    print () {
      // var c0 = document.getElementById('myCanvas0')
      var ctx = document.getElementById('myCanvas0').getContext('2d')
      ctx.lineWidth = 10// 设置线宽
      ctx.strokeStyle = this.color1// 设置线的颜色
      document.getElementById('myCanvas0').onmousemove = function (e) {
        ctx.lineTo(e.offsetX, e.offsetY)// 划线到当前客户端的x与y座标
        // console.log(e.clientX, e.clientY) // 使用event.clientX、event.clientY定位不准确
        // console.log(e.offsetX, e.offsetY)
        ctx.stroke()// 执行画线
      }
    },
    chessboard () {
      var chiness = document.getElementById('myCanvas1')
      var chess = chiness.getContext('2d')
      var zhixian = chiness.getContext('2d')
      var hanzi = chiness.getContext('2d') // 设置汉字的绘画上下文，因为如果跟chess混在一起显示不了文字
      chess.strokeStyle = '#AFEEEE'
      zhixian.strokeStyle = '#AFEEEE'
      for (var i = 0; i < 9; i++) {
        if (i === 4) { continue }
        for (var j = 0; j < 8; j++) {
          chess.strokeRect(0 + j * 50, 0 + i * 50, 50, 50)// 前两个数代表一个坐标 ，后两个数代表一个坐标
        }
      }// 先画棋盘
      for (var i1 = 0; i1 < 2; i1++) {
        zhixian.moveTo(150, 0 + i1 * 350)
        zhixian.lineTo(250, 100 + i1 * 350)
        zhixian.stroke()
        zhixian.moveTo(250, 0 + i1 * 350)
        zhixian.lineTo(150, 100 + i1 * 350)
        zhixian.stroke()
      } // 这是线条布局
      for (var i2 = 0; i2 < 2; i2++) {
        for (var j2 = 0; j2 < 2; j2++) {
          zhixian.moveTo(45 + j2 * 300, 75 + i2 * 250)
          zhixian.lineTo(45 + j2 * 300, 95 + i2 * 250)
          zhixian.lineTo(25 + j2 * 300, 95 + i2 * 250)
          zhixian.stroke()
          zhixian.moveTo(55 + j2 * 300, 75 + i2 * 250)
          zhixian.lineTo(55 + j2 * 300, 95 + i2 * 250)
          zhixian.lineTo(75 + j2 * 300, 95 + i2 * 250)
          zhixian.stroke()
          zhixian.moveTo(25 + j2 * 300, 105 + i2 * 250)
          zhixian.lineTo(45 + j2 * 300, 105 + i2 * 250)
          zhixian.lineTo(45 + j2 * 300, 125 + i2 * 250)
          zhixian.stroke()
          zhixian.moveTo(55 + j2 * 300, 125 + i2 * 250)
          zhixian.lineTo(55 + j2 * 300, 105 + i2 * 250)
          zhixian.lineTo(75 + j2 * 300, 105 + i2 * 250)
          zhixian.stroke()
        }
      } // 炮十字
      for (var i3 = 0; i3 < 2; i3++) {
        for (var j3 = 0; j3 < 4; j3++) {
          zhixian.moveTo(5 + j3 * 100, 125 + i3 * 150)
          zhixian.lineTo(5 + j3 * 100, 145 + i3 * 150)
          zhixian.lineTo(25 + j3 * 100, 145 + i3 * 150)
          zhixian.stroke()
          zhixian.moveTo(5 + j3 * 100, 175 + i3 * 150)
          zhixian.lineTo(5 + j3 * 100, 155 + i3 * 150)
          zhixian.lineTo(25 + j3 * 100, 155 + i3 * 150)
          zhixian.stroke()
          zhixian.moveTo(395 - j3 * 100, 125 + i3 * 150)
          zhixian.lineTo(395 - j3 * 100, 145 + i3 * 150)
          zhixian.lineTo(375 - j3 * 100, 145 + i3 * 150)
          zhixian.stroke()
          zhixian.moveTo(395 - j3 * 100, 175 + i3 * 150)
          zhixian.lineTo(395 - j3 * 100, 155 + i3 * 150)
          zhixian.lineTo(375 - j3 * 100, 155 + i3 * 150)
          zhixian.stroke()
        }
      } // 兵十字
      hanzi.font = '25px sans-serif'// 字体大小也会影响的哦。
      hanzi.fillStyle = '#AFEEEE'
      hanzi.translate(60, 235)// 其实这步是这重要的，定好中心点好，旋转起来就剪刀了
      hanzi.rotate(270 * Math.PI / 180)// 我这步最后操作，等你中心点定好，移动到你自己想要的位置，再调角度
      hanzi.fillText('汉', 0, 0)
      hanzi.fillText('界', 0, 60)
      hanzi.rotate(180 * Math.PI / 180)
      hanzi.fillText('楚', -25, -280)
      hanzi.fillText('河', -25, -220)
      hanzi.restore()
    }
  }

}
</script>

<style scoped>
  .canvasmain{
    width: 900px;
    position: relative;
    left: 50%;
    margin-left: -450px;
    margin-top: 50px;
  }
  .el-button{
    float: right;
    margin-top: 10px;
  }
</style>
