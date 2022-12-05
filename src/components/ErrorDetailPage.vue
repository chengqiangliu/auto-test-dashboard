<template>
    <Suspense><DashboardHeader></DashboardHeader></Suspense>
    <el-row>    <ClassErrorDetailsBreadCrumbsVue></ClassErrorDetailsBreadCrumbsVue>
</el-row>
    {{pro}}
    <Suspense><ErrorDetails></ErrorDetails></Suspense>
</template>>

<script setup>
import DashboardHeader from './DashboardHeader.vue'
import ClassErrorDetailsBreadCrumbsVue from './ClassErrorDetailsBreadCrumbs.vue';
import ErrorDetails from './ErrorDetails.vue'
import { ref } from 'vue';
const pro= defineProps({
    params : {}
})

let c=ref(pro)
console.log(pro['errorDetails'])
</script>