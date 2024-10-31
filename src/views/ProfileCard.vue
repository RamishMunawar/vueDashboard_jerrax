<template>
    <div class="mt-4" >
    <div class="accordion" id="accordionPanelsStayOpenExample" >
  <div class="accordion-item color_profile">
      <h2 class="accordion-header d-flex mb-2" id="panelsStayOpen-headingOne">
          <img class="img_logo" src="../assets/images.png" alt="">
          <button class="accordion-button p-0 px-3 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            <font-awesome-icon :icon="['fas', 'sliders']" />  Ramish Munawar
          

            <div>
  </div>
      </button>
    </h2>
    <div class="border-bottom">
    <div id="panelsStayOpen-collapseOne" v-for="items in profileName" :key="items" class="accordion-collapse collapse show text-white " aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body px-0 py-2">
        
        <RouterLink :to="items.routeName"  class="router_color"><span class="px-3 pe-4">{{items.shortName}}</span>{{ items.name}}</RouterLink>
     
      </div>
    </div>
</div>
  </div>

</div>
    </div>
  </template>


<script setup>

const profileName= [
    { name:"My Profile", shortName: "MP" , routeName : "/"},
    { name:"Edit Profile", shortName: "EP", routeName : "/EditProfileView"},
    { name:"Settings", shortName: "S",routeName : "/SettingsPage"}
]

</script>
  
  <style>

  </style>
  