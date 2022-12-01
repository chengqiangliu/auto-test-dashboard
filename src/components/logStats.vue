<script setup>
import { Chart } from 'chart.js';
import { onMounted } from 'vue';
const data = {
  labels: ['Tests Passed','Tests Failed','Tests Skipped',],
  datasets: [{
    label: '',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
 
    ],
    borderWidth: 1
  }]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    indexAxis: 'y',
    plugins: {
                legend: {
                    display: false
                }
            }

  },
  responsive: true,
    maintainAspectRatio: false

};

onMounted(()=>{
        const myChart=new Chart(
            document.getElementById("logStats"),
            config,
        )
        myChart.resize(200,200);
    });

</script>


<template>
  <div class="logStats">
    <canvas id="logStats"></canvas>
  </div>
</template>

<style>
.logStats{
background-color: white;
height: 300px;
width:600px;
border-radius: 5px;
box-shadow: 1px 1px 1px 1px lightgray;

}

</style>

