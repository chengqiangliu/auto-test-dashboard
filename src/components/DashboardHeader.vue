<template>
    <div class="header">

       
            <el-col justify="space-evenly">

                <el-page-header :icon="Expand" justify="space-between">
                    <el-col>
                        
                    </el-col>
                    <template #icon />

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
    background-color: #409EFF;
    height: 90px;
    border-radius: 2px;
}
.text{
    color: white;
}

.el-row{
margin: 30px;
}

.el-page-header{
    font-family: sans-serif;
    font-weight: bold;
}

.el-col{
    padding: 10px;
    margin: 10px;
}

</style>

  <script lang="ts" setup>
  import { Expand } from '@element-plus/icons-vue'
  </script>
  