<template>

    <div class="BreadCrumbs">

    <el-row>

    </el-row>
            <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">Dashboard</el-breadcrumb-item>
            <el-breadcrumb-item :to="{path: '/classErrorPage/1'}">Class</el-breadcrumb-item>
            <el-breadcrumb-item>Error</el-breadcrumb-item>
            </el-breadcrumb>
    <el-row>

    </el-row>
    </div>

  </template>
  
  <script lang="ts" setup>
  import { ArrowRight } from '@element-plus/icons-vue'
  const df=defineProps({
      params : {}
  })
  console.log(df)

  </script>
  
  <style scoped>
.BreadCrumbs{
    font-family: sans-serif;
}

</style>