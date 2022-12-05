<template>
    <div class="Page">

    <DashboardHeaderVue></DashboardHeaderVue>
  <el-row>
    
  </el-row>
  <el-col>
    <el-row>
    <BreadCrumbsVue></BreadCrumbsVue>
  </el-row>
  <el-row>
     <h3> Class ID:{{errorName['myprop']}}</h3>
  </el-row>
  <el-row>

  </el-row>
  </el-col>
  <Suspense><ErrorList></ErrorList></Suspense>
  </div>
  
</template>

<script setup>
import DashboardHeaderVue from './DashboardHeader.vue';
import BreadCrumbsVue from './BreadCrumbs.vue';
import ErrorList from './ErrorList.vue'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
const props = defineProps({
  myErrorNo: String
})
const ro= useRoute();

let errorName=ref(ro.params)

</script>

<style>

.el-row h3{
    font-family: sans-serif;
}
.el-row{
    margin: 10px;
  }
</style>