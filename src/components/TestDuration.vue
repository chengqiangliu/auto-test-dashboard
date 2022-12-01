<template>
    <div class="clock">
    <div class="text"><h3>
        Test Duration 
    </h3></div>


      <div class="column">
        <div class="row">
          <h1 class="clocktext">{{a}}</h1>
          <h1 class="number"> hr</h1>
        </div>
        <div class="row">
          <h1 class="clocktext">{{b}}</h1>
          <h1 class="number"> min</h1>
        </div>
      </div>
    
  
    </div>
</template>

<script setup>
import {ref} from 'vue';
const a = ref();

await fetch('https://jsonplaceholder.typicode.com/todos')
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    a.value = data[4]['id']; // this will be a string
  });

// a.value = await response.json()["hour"];
const b= ref();

await fetch('https://jsonplaceholder.typicode.com/todos')
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    b.value = data[46]['id']; // this will be a string
  });

</script>

<style scoped>



.clock{
  align-items: center;
  width: 350px;
  display: flex;
  height: 300px;
  box-sizing: border-box;
  background-color: white;
  flex-direction: column;
  border-radius: 10px;
  font-family:  sans-serif;
  gap: 20px;
  box-shadow: 1px 1px 1px 1px lightgray;

  
}

.clock .text h3{
  color: darkcyan;
}
.column{
    display: flex;
    flex-direction: column;
}

.row{
    display: flex;
    flex-direction: row;
    gap: 10px;
}
.number{
    display: flex;
    flex-direction: column;
    font-weight:bolder;
    color: darkgray;
  }

.text{
  color: black;
}

</style>