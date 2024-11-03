<template>
    
    
    <div class="card" >
    <div :class="[className]" style="width: 16rem; height: 18rem;">
      <div class="card-body">
        <div  >
             <h3>{{ title }}</h3>
             <span>{{ name }}</span>
       </div>
       <div id="app">
        <h1>jnj</h1>

         <ChartCircle />
       </div>
    </div>
   
    </div>
</div>
</template>
    
    <script setup>
      //  import ChartCircle from '../views/ChartCircle';
     const props = defineProps(['title' , 'name' , 'className'])
    </script>


