<script setup>
import DashboardHeaderVue from './DashboardHeader.vue';
import Sidebar from './Sidebar.vue'
import BreadCrumbsVue from './BreadCrumbs.vue';
import TestDuration from './TestDuration.vue'
import TestPassComponentVue from './TestPassComponent.vue';
import logStatsVue from './logStats.vue';
import ErrorClassListVue from './ErrorClassList.vue';
</script>

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
     
      <div class="Stats">
        <el-row :guttered=20 justify="start">
    <el-col :span="6"><Suspense><TestDuration></TestDuration></Suspense></el-col>
    <el-col :span="6"><Suspense><TestPassComponentVue></TestPassComponentVue></Suspense></el-col>
     <el-col :span="6"><Suspense><logStatsVue></logStatsVue></Suspense></el-col> 
          
  </el-row>

  <el-col>
    <Suspense><ErrorClassListVue></ErrorClassListVue></Suspense>
  </el-col>
      </div>
    </div>
    
</template>

<style scoped>
  .Page{
    box-sizing: border-box;
    background-color: whitesmoke;
    height:fit-content;
  }
  .el-row{
    margin: 10px;
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
    margin: 13px;
  }
</style>
