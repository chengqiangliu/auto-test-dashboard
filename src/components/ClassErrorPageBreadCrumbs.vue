<template>

    <div class="BreadCrumbs">

    <el-row>

    </el-row>
            <el-breadcrumb :separator-icon="ArrowRight">
              <div class="dashboard">
                <el-breadcrumb-item  :to="{ path: '/' }">Dashboards</el-breadcrumb-item>
            <el-breadcrumb-item :to="{name: 'classErrorPage'}">Class</el-breadcrumb-item>
              </div>
            </el-breadcrumb>
    <el-row>

    </el-row>
    </div>

  </template>
  
  <script lang="ts" setup>
  import { ArrowRight } from '@element-plus/icons-vue'
  </script>
  
  <style scoped>

  .dashboard{
    font-size: larger;
    margin-left: 120px;
  }
.BreadCrumbs{
    font-family: sans-serif;
}

</style>