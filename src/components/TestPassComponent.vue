<script setup>
import { ArrowRightBold } from '@element-plus/icons-vue';
import Chart from 'chart.js/auto';
import { onMounted } from 'vue';



import {ref} from 'vue';

let b=ref(); 
 await fetch('https://jsonplaceholder.typicode.com/todos')
 .then(function(response) {
   return response.json();
 }).then(function(data) {
   b.value = data[89]['id']; // this will be a string
 });

const data = {
  datasets: [{
    
    data: [b['_value'],100-b['_value']],
    backgroundColor: [
      '#67C23A',
      '#F56C6C'
    ],
    hoverOffset: 4,
    innerWidth:1,
    radius: 80,
    indexAxis:'y'
  }]
};

const config = {
  type: 'doughnut',
  data: data,
  
};

    onMounted(()=>{
        const myChart=new Chart(
            document.getElementById("myChart"),
            config,
        )
        myChart.resize(200, 200);

    });

</script>

<template>
    <div class="TestDuration">

    
    <el-space> <el-col><h4>Test Passed %</h4></el-col></el-space>
    
    <el-row>
        
    </el-row>
    
    <el-space>
        
    <canvas id="myChart">
    </canvas>
    </el-space>
    
   
    </div>
  
</template>



<style scoped>

.el-space{
    display: flex;
    justify-content: center;
  }
.TestDuration{
    background-color: white;
    width: max-content;
    height:300px;
    border-radius: 5px;
    box-shadow: 1px 1px 5px 1px rgb(223, 242, 255);

}
h4{
    font-family:sans-serif;
    color: darkcyan;
}
</style>
