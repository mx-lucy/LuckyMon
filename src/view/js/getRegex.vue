<template>
  <div>
    <div style="width: 60%;margin-left: 20%;">
      <div>
        <h2>生成正则表达式</h2>
        <div style="width: 200px;height: 60px;">
          <template>
            <el-radio v-model="getstart" label="">开头不匹配</el-radio>
            <el-radio v-model="getstart" label="^">开头匹配</el-radio>
          </template>
        </div>
        <div style="width: 200px;height: 60px;">
          <template>
            <el-radio v-model="getend" label="">结尾不匹配</el-radio>
            <el-radio v-model="getend" label="$">结尾匹配</el-radio>
          </template>
        </div>
        <el-button @click="addData">添加正则表达式</el-button>
        <!--<div v-for="(value, key) in object">-->
        <!--</div>-->
        <el-select v-model="listdata.type">
          <el-option v-for="(item, index) in list"
                     :key="index"
                     :value="item.value"
                     :label="item.label"></el-option>
        </el-select>
        <el-select v-model="listdata.num">
          <el-option v-for="(item, index) in list1"
                     :key="index"
                     :value="item.value"
                     :label="item.label"></el-option>
        </el-select>
        {{getstart}}{{getData}}{{getend}}
      </div>
      <div>
        <h2>正则表达式解析</h2>
        <el-input v-model="inputdata" style="width: 200px;"></el-input>
        <el-button @click="analyzedata">解析</el-button>
        {{returndata}}
      </div>
      <div><p>本页面引入数据来自于static/data.json ，数据量较少，仅能解析有对应数据的正则表达式。由于时间所限，生成和解析的方式对数据限制较高，大量数据解析需要重新优化</p></div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'getRegex',
  data () {
    return {
      getstart: '',
      getend: '',
      list: {},
      list1: {},
      listdata: {
        type: '',
        mun: ''
      },
      Redata: {},
      inputdata: '',
      returndata: '',
      getData: ''
    }
  },
  methods: {
    addData () {
      this.Redata[this.Redata.length + 1] = this.listdata.type + '' + this.listdata.num
      this.getData = this.Redata[this.Redata.length + 1]
    },
    getchooseList () {
      this.$http.get('./../../static/data.json').then(res => {
        this.list = res.data.list // 接口+参数
        this.list1 = res.data.list1
      })
    },
    analyzedata () {
      for (var i = 0; i < this.list.length; i++) {
        for (var j = 0; j < this.list.length; j++) {
          if (this.inputdata === this.list[i].value + '' + this.list1[i].value) {
            this.returndata = this.list[i].label + '' + this.list1[i].label
          }
        }
      }
    }
  },
  created () {
    this.getchooseList()
  }
}
</script>

<style scoped>

</style>
