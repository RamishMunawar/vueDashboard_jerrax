<template>
  
    <div class="card" style="width: 15.5rem;">
      <div class="card-body">
        <div  class="d-flex flex-wrap justify-content-between align-items-center border-bottom">
        <div>
          <font-awesome-icon :icon="['fas', imgsrc]" />
        </div>
        <div>
          <span class="card-title ">{{ title }}</span>
          <h3>{{value}}</h3>
        </div>
      </div>
      <div class="d-flex gap-3 align-items-center pt-2">
        <font-awesome-icon :icon="['fas', reloadIcon]" />
        <span>{{Updates}}</span>
      </div>
    
        <!-- <h6 class="card-subtitle mb-2 text-muted">{{ title }}</h6> -->
        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a> -->
      </div>
    </div>

    </template>
    
    <script setup>
     const props = defineProps(['imgsrc' , 'title' , 'value', 'Updates' ,'reloadIcon'])
    </script>