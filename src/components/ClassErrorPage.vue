<template>
    <div class="Page">
    <DashboardHeaderVue></DashboardHeaderVue>
  <el-col>
    <el-row>
    <ClassErrorPageBreadCrumbsVue></ClassErrorPageBreadCrumbsVue>
  </el-row>
  <el-row>
     <h3> Class ID:{{errorName['errorClassId']}}</h3>
  </el-row>
  <el-row>

  </el-row>
  </el-col>
  <Suspense><ErrorList></ErrorList></Suspense>
  </div>
  
</template>

<script setup>
import DashboardHeaderVue from './DashboardHeader.vue';
import ClassErrorPageBreadCrumbsVue from './ClassErrorPageBreadCrumbs.vue';
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