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
      <div><br></div>
       <div>
         <BreadCrumbsVue>/</BreadCrumbsVue>
       </div>
      <div class="Stats">
        <Suspense><TestDuration></TestDuration></Suspense>
      <Suspense><TestPassComponentVue></TestPassComponentVue></Suspense>
      <Suspense><logStatsVue></logStatsVue></Suspense>
      </div>

    
    </div> 

  <el-col>
    <Suspense><ErrorClassListVue></ErrorClassListVue></Suspense>
  </el-col>
    
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
 
  .el-space{
  
    
  }
  .Stats{
    display: flex;
    padding: 20px;
    gap: 10px;
    justify-content: center;
    flex-direction: row;
  }
</style>
