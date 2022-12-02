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

      <el-space  style="width: auto" justify="center" :size="30" direction="horizontal" wrap=true> 
        <el-space style="width: 20"></el-space>
        <Suspense><TestDuration></TestDuration></Suspense>
    <Suspense><TestPassComponentVue></TestPassComponentVue></Suspense>
      <Suspense><logStatsVue></logStatsVue></Suspense>
  </el-space>
      <div class="Stats">
       
    
    </div> 

  <el-col>
    <Suspense><ErrorClassListVue></ErrorClassListVue></Suspense>
  </el-col>

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
  .el-space{
    display: flex;
    justify-content: center;
  
  }
  .Stats{
    display: grid;
    grid-template-columns: auto auto auto;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 10px;
    padding: 20px;
  
  }
</style>
