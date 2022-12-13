<template>

    <div class="BreadCrumbs">

    <el-row>

    </el-row>
            <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item  class="homepage"   :to="{ path: '/' }">Dashboard</el-breadcrumb-item>
            <el-breadcrumb-item></el-breadcrumb-item>
           
            </el-breadcrumb>
    <el-row>

    </el-row>
    </div>

  </template>
  
  <script lang="ts" setup>
  import { ArrowRight } from '@element-plus/icons-vue'
  </script>
  
  <style scoped>

  .homepage{
    padding-left: 120px;
  }
.BreadCrumbs{
    font-family: sans-serif;
}

</style>