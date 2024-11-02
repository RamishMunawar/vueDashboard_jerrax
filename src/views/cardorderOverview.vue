<template>
    
    
    <div class="card" >
    <div :class="[className]" style="width: 16rem; height: 18rem;">
      <div class="card-body">
        <div  >
             <h3>{{ title }}</h3>
             <span>{{ name }}</span>
       </div>
       
    </div>
        <!-- <h6 class="card-subtitle mb-2 text-muted">{{ title }}</h6> -->
        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a> -->
    
    </div>
</div>
    </template>
    
    <script setup>
     const props = defineProps(['title' , 'name' , 'className'])
    </script>


