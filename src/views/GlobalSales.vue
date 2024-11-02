<template>
  
    <div class="card" style="">
      <div class="card-body">
        <div  class="d-flex flex-wrap justify-content-between align-items-center border-bottom">
         <div>

             <h3>Global Sales by Top Locations</h3>
             <span>All products that were shipped</span>
         </div>
        
       </div>
    </div>
        <!-- <h6 class="card-subtitle mb-2 text-muted">{{ title }}</h6> -->
        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a> -->
    
    </div>

    </template>
    
    <script setup>
     const props = defineProps(['imgsrc' , 'title' , 'value', 'Updates' ,'reloadIcon'])
    </script>