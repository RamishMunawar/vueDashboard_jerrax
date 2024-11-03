<template>
    <div class="mt-4" >
    <div class="accordion" id="accordionPanelsStayOpenExample" >
  <div class="accordion-item color_profile">
      <h2 class="accordion-header d-flex mb-2" id="panelsStayOpen-headingOne">
          <img class="img_logo" src="../assets/images.png" alt="">
          <button class="accordion-button p-0 px-3 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
            Ramish Munawar
            <div>
  </div>
      </button>
    </h2>
    <div class="border-bottom">
    <div id="panelsStayOpen-collapseOne" v-for="items in profileName" :key="items" class="accordion-collapse collapse  text-white " aria-labelledby="panelsStayOpen-headingOne">
      <RouterLink class="router_color d-flex align-items-center gap-4">
            <span class="px-2  py-2">{{ items.shortName }}</span>{{ items.name }}
            <!-- <div class="arrow"></div> -->
        </RouterLink>
  
    </div>
    
</div>
  </div>

</div>
    </div>
  </template>


<script setup>

const profileName= [
    { name:"My Profile", shortName: "MP"  },
    { name:"Edit Profile", shortName: "EP" },
    { name:"Settings", shortName: "S"}
]

</script>
  
  <style>

  </style>
  