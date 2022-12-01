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
    
    data: [b,b],
    backgroundColor: [
      'rgb(118, 255, 100)',
      'rgb(250, 71, 55)'
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
    <el-row>
    <el-col :span="8"></el-col>
    <el-col :span="8"><h3>Test Pass %</h3>
    
    </el-col>
    <el-col :span="8"></el-col>
    </el-row>
    <el-row>
        
    </el-row>
    
    <el-row justify="center">
        
    <el-col :span="14"><canvas id="myChart"></canvas></el-col>
    </el-row>

    <el-row>

    </el-row>
    
   
    </div>
  
</template>



<style scoped>
.TestDuration{
    background-color: white;
    width:350px;
    height:300px;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 1px lightgray;

}
h3{
    font-family: sans-serif;
    color: darkcyan;
}
</style>
