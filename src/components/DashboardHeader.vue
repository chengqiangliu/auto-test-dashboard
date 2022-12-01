<template>
    <div class="header">

       
            <el-col justify="center">

                <el-page-header :icon="Expand">
    <template #title>
      <h1>
   
      </h1>
    </template>
            
            <template #content>
                <div class="text"><h2>Dashboard</h2></div>
            </template>
            
        </el-page-header>

            </el-col>
            
 
        
    </div>
  </template>
  
<style scoped>

.header{
    background-color: black;
    height: 70px;
    width: auto;
}
.text{
    color: whitesmoke;
}

.el-row{
margin: 30px;
}

.el-page-header{
    font-family: sans-serif;
    font-weight: bold;
}

</style>

  <script lang="ts" setup>
  import { Expand } from '@element-plus/icons-vue'
  </script>
  