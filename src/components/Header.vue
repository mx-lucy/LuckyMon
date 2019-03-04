<template>
  <div>
    <el-menu mode="horizontal"
             background-color="#409EFF"
             active-text-color="#ffd04b"
             text-color="#fff">
      <el-menu-item index="1"><img src="../assets/logo.png" style="width: 60px;"/></el-menu-item>
      <el-submenu v-for="(items,i) in this.$router.options.routes" :key="i" :index="items.path">
        <template slot="title">{{items.name}}</template>
        <el-menu-item v-for="(item,i) in items.children" :index="item.path" :key="i">
          <template slot="title">
            <router-link :to="items.path+'/'+item.path" style="display: block;">
              <!--<router-link :to="'/'+items.name+'/'+item.path">-->
              <i class="el-icon-info"></i>
              {{item.name}}
            </router-link>
          </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

</style>
