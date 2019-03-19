<template>
  <div>
    <div class="main">
      <div id="myChart" class="charts"><a href="https://www.echartsjs.com/examples/index.html?theme=light#chart-type-bar3D"></a></div>
      <div id="myChart1" class="charts"></div>
      <div id="myChart2" class="charts"></div>
      <div id="myChart3" class="charts"></div>
    </div>
    <div class="main">
      <div id="myChart4" class="charts"></div>
      <div id="myChart5" class="charts"></div>
      <div id="myChart6" class="charts"></div>
      <div id="myChart7" class="charts"></div>
    </div>
  </div>
</template>

<script>
// let echarts = require('echarts/lib/echarts')
// require('echarts/lib/chart/bar')
// require('echarts/lib/component/tooltip')
// require('echarts/lib/component/title')
export default {
  name: 'echarts',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'

    }
  },
  mounted () {
    this.drawLine()
    this.drawLine1()
    this.drawLine2()
    this.drawLine3()
    this.drawLine4()
    this.drawLine5()
    this.drawLine6()
    this.drawLine7()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart')) // 绘制图表
      myChart.setOption({
        title: { text: 'ECharts' },
        tooltip: {},
        xAxis: { data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'] },
        yAxis: {},
        series: [{ name: '销量', type: 'bar', data: [5, 20, 36, 10, 10, 20]
        }]
      })
    },
    drawLine1 () {
      let myChart1 = this.$echarts.init(document.getElementById('myChart1')) // 绘制图表
      myChart1.setOption({
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [5, 20, 36, 10, 10, 20],
          type: 'line',
          areaStyle: {}
        }]
      })
    },
    drawLine2 () {
      let myChart2 = this.$echarts.init(document.getElementById('myChart2')) // 绘制图表
      myChart2.setOption({
        angleAxis: {
        },
        radiusAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四'],
          z: 10
        },
        polar: {
        },
        series: [{
          type: 'bar',
          data: [1, 1, 2, 1],
          coordinateSystem: 'polar',
          name: '衬衫',
          stack: 'a'
        }, {
          type: 'bar',
          data: [2, 4, 6, 8],
          coordinateSystem: 'polar',
          name: '羊毛衫',
          stack: 'a'
        }, {
          type: 'bar',
          data: [10, 12, 6, 8],
          coordinateSystem: 'polar',
          name: '雪纺衫',
          stack: 'a'
        }, {
          type: 'bar',
          data: [1, 2, 3, 4],
          coordinateSystem: 'polar',
          name: '裤子',
          stack: 'a'
        }, {
          type: 'bar',
          data: [1, 2, 3, 4],
          coordinateSystem: 'polar',
          name: '高跟鞋',
          stack: 'a'
        }, {
          type: 'bar',
          data: [2, 4, 6, 8],
          coordinateSystem: 'polar',
          name: '袜子',
          stack: 'a'
        }],
        legend: {
          show: true,
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        }
      })
    },
    drawLine3 () {
      let myChart3 = this.$echarts.init(document.getElementById('myChart3')) // 绘制图表
      myChart3.setOption({
        // backgroundColor: '#2c343c',
        title: {},
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        // visualMap: {
        //   show: false,
        //   min: 0,
        //   max: 40,
        //   inRange: {
        //     colorLightness: [0, 1]
        //   }
        // },
        series: [
          {
            name: '贩卖类型',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
              { value: 15, name: '衬衫' },
              { value: 20, name: '羊毛衫' },
              { value: 36,
                name: '雪纺衫'
              },
              { value: 10,
                name: '裤子',
                label: {
                  normal: {
                    formatter: '{a|{a}\n}{b|{b} }{c|{c}}',
                    backgroundColor: 'rgb(242,242,242)',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    padding: [4, 10],
                    lineHeight: 26,
                    position: 'right',
                    distance: 20,
                    rich: {
                      a: {
                        align: 'center',
                        color: '#fff',
                        fontSize: 18,
                        textShadowBlur: 2,
                        textShadowColor: '#000',
                        textShadowOffsetX: 0,
                        textShadowOffsetY: 1,
                        textBorderColor: '#333',
                        textBorderWidth: 2
                      },
                      b: {
                        color: '#333'
                      },
                      c: {
                        color: '#ff8811',
                        textBorderColor: '#000',
                        textBorderWidth: 1,
                        fontSize: 22
                      }
                    }
                  }
                } },
              { value: 10, name: '高跟鞋' },
              { value: 20, name: '袜子' }
            ].sort(function (a, b) { return a.value - b.value }),
            roseType: 'angle',
            // roseType: 'radius',
            // label: {
            //   normal: {
            //     textStyle: {
            //       color: 'rgba(255, 255, 255, 0.3)'
            //     }
            //   }
            // },
            // labelLine: {
            //   normal: {
            //     lineStyle: {
            //       color: 'rgba(255, 255, 255, 0.3)'
            //     },
            //     smooth: 0.2,
            //     length: 10,
            //     length2: 20
            //   }
            // },
            // itemStyle: {
            //   normal: {
            //     color: '#c23531',
            //     shadowBlur: 200,
            //     shadowColor: 'rgba(0, 0, 0, 0.5)'
            //   }
            // },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
              return Math.random() * 200
            }
          }
        ]
      })
    },
    drawLine4 () {
      let myChart4 = this.$echarts.init(document.getElementById('myChart4')) // 绘制图表
      myChart4.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        dataZoom: [
          { // 这个dataZoom组件，默认控制x轴。
            type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
            start: 10, // 左边在 10% 的位置。
            end: 60 // 右边在 60% 的位置。
          },
          { // 这个dataZoom组件，默认控制x轴。
            type: 'inside', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
            start: 10, // 左边在 10% 的位置。
            end: 60 // 右边在 60% 的位置。
          },
          {
            type: 'slider',
            yAxisIndex: 0,
            start: 30,
            end: 80
          },
          {
            type: 'inside',
            yAxisIndex: 0,
            start: 30,
            end: 80
          }

        ],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['周一', '周二', '周三', '周四']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            type: 'bar',
            data: [1, 1, 2, 1],
            name: '衬衫'
          },
          {
            type: 'bar',
            data: [2, 4, 6, 8],
            name: '羊毛衫',
            markLine: {
              lineStyle: {
                normal: {
                  type: 'dashed'
                }
              },
              data: [
                [{ type: 'min' }, { type: 'max' }]
              ]
            }
          }, {
            type: 'bar',
            data: [10, 12, 6, 8],
            name: '雪纺衫'
          },
          {
            type: 'bar',
            data: [1, 2, 3, 4],
            name: '裤子'
          }, {
            type: 'bar',
            data: [1, 2, 3, 4],
            name: '高跟鞋'
          }, {
            type: 'bar',
            data: [2, 4, 6, 8],
            name: '袜子'
          }
        ]
      })
    },
    drawLine5 () {
      let myChart5 = this.$echarts.init(document.getElementById('myChart5')) // 绘制图表
      myChart5.setOption({
        tooltip: {},
        legend: {
          data: ['周一', '周二', '周三', '周四']
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: '衬衫', max: 12 },
            { name: '羊毛衫', max: 12 },
            { name: '雪纺衫', max: 12 },
            { name: '裤子', max: 12 },
            { name: '高跟鞋', max: 12 },
            { name: '袜子', max: 12 }
          ]
        },
        series: [{
          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [
            {
              value: [1, 2, 10, 1, 1, 2],
              name: '周一'
            },
            {
              value: [1, 2, 12, 2, 2, 4],
              name: '周二'
            },
            {
              value: [2, 6, 6, 3, 3, 6],
              name: '周三'
            },
            {
              value: [1, 8, 8, 4, 4, 8],
              name: '周四'
            }
          ]
        }]
      })
    },
    drawLine6 () {
      let myChart6 = this.$echarts.init(document.getElementById('myChart6')) // 绘制图表
      myChart6.setOption({
        series: {
          type: 'sunburst',
          data: [{
            value: 20,
            name: '羊毛衫',
            children: [{
              value: 2,
              name: '周一'
            }, {
              value: 4,
              name: '周二'
            },
            {
              value: 6,
              name: '周三'
            },
            {
              value: 8,
              name: '周四'
            }]
          }, {
            value: 36,
            name: '雪纺衫',
            children: [{
              value: 10,
              name: '周一'
            }, {
              value: 12,
              name: '周二'
            },
            {
              value: 6,
              name: '周三'
            },
            {
              value: 8,
              name: '周四'
            }]
          }, {
            value: 10,
            name: '裤子',
            children: [{
              value: 1,
              name: '周一'
            }, {
              value: 2,
              name: '周二'
            },
            {
              value: 3,
              name: '周三'
            },
            {
              value: 4,
              name: '周四'
            }]
          }]
        }
      })
    },
    drawLine7 () {
      var data = []
      for (var i = 0; i <= 360; i++) {
        var t = i / 180 * Math.PI
        var r = Math.sin(2 * t) * Math.cos(2 * t)
        data.push([r, i])
      }
      let myChart7 = this.$echarts.init(document.getElementById('myChart7')) // 绘制图表
      myChart7.setOption({
        title: {
          text: ''
        },
        legend: {
          data: ['line']
        },
        polar: {
          center: ['50%', '54%']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        angleAxis: {
          type: 'value',
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [{
          coordinateSystem: 'polar',
          name: 'line',
          type: 'line',
          showSymbol: false,
          data: data
        }],
        animationDuration: 2000
      })
    }
  }
}
</script>

<style scoped>
  .main{
    display: flex;
    justify-content: space-around;
  }
.charts{
  width: 400px;
  height: 400px;
}
</style>
