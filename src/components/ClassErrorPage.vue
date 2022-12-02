<template>
    <div class="Page">
    
    <DashboardHeaderVue></DashboardHeaderVue>
  <el-row>
    
  </el-row>
  <el-col>
    <el-row>
    <BreadCrumbsVue></BreadCrumbsVue>
  </el-row>

  </el-col>

  </div>
</template>

<script setup>
import DashboardHeaderVue from './DashboardHeader.vue';
import BreadCrumbsVue from './BreadCrumbs.vue';
</script>

<style>
.el-row{
    margin: 10px;
  }
</style>