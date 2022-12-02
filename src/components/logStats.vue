<script setup>
import { Chart } from 'chart.js';
import { onMounted } from 'vue';
const data = {
  labels: ['Tests Passed','Tests Failed','Tests Skipped','Test Coverage'],
  datasets: [{
    label: '',
    data: [65, 59, 80, 81, 100],
    backgroundColor: [
      '#67C23A',
      '#F56C6C',
      '#E6A23C',
      '#409EFF',
 
    ],
    borderWidth: 1,
    barThickness: 18,
    borderRadius:4

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

<style scoped>
.logStats{
background-color: white;
height: 280px;
width:500px;
border-radius: 5px;
box-shadow: 1px 1px 5px 1px rgb(223, 242, 255);
padding: 10px;

}

</style>

