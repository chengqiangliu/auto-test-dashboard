<script setup>
import HelloWorld from './components/HelloWorld.vue'
import DashboardHeaderVue from './components/DashboardHeader.vue';
import Sidebar from './components/Sidebar.vue'
import BreadCrumbsVue from './components/BreadCrumbs.vue';
import TestDuration from './components/TestDuration.vue'
import TestPassComponentVue from './components/TestPassComponent.vue';
import logStatsVue from './components/logStats.vue';
</script>

<template>
    
    <div class="Page">
    
        <DashboardHeaderVue></DashboardHeaderVue>
      <el-row>
        <BreadCrumbsVue></BreadCrumbsVue>
      </el-row>

      <div class="Stats">
        <el-row justify="space-evenly">
    <el-col :span="6"><Suspense><TestDuration></TestDuration></Suspense></el-col>
    <el-col :span="6"><Suspense><TestPassComponentVue></TestPassComponentVue></Suspense></el-col>
     <el-col :span="10"><Suspense><logStatsVue></logStatsVue></Suspense></el-col> 
  
  </el-row>
      </div>
    </div>
    
</template>

<style scoped>
  .Page{
    box-sizing: border-box;
    background-color: whitesmoke;
  }
  .el-row{
    margin: 20px;
  }
  .placeholder{
    background-color: black;
    box-sizing: border-box;
    height: 50px;
    width: 50px;
    justify-content: center;
    align-items: center;
  }
  .el-col{
    margin: 2px;
  }
</style>
