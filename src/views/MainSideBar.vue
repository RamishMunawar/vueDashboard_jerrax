<template>
    <div class="mt-4" >
    <div class="accordion" id="accordionPanelsStayOpenExample" >
  <div class="accordion-item color_profile">
      <h2 class="accordion-header d-flex mb-2" id="panelsStayOpen-headingTwo">
        <font-awesome-icon class="icon-size" :icon="['fas', 'sliders']" />  
          <button class="accordion-button p-0 px-3 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
           Dashboard
            <div>
  </div>
      </button>
    </h2>
    <div class="">
    <div id="panelsStayOpen-collapseTwo" v-for="items in DashboardProfile" :key="items" class="accordion-collapse collapse  text-white " aria-labelledby="panelsStayOpen-headingTwo">
      <RouterLink :to="items.routeName" class="router_color d-flex align-items-center gap-4">
            <span class="px-2  py-2">{{ items.shortName }}</span>{{ items.name }}
            <!-- <div class="arrow"></div> -->
        </RouterLink>
  
    </div>
    
</div>
  </div>

</div>
    </div>
    <div class="mt-4" >
    <div class="accordion" id="accordionPanelsStayOpenExample" >
  <div class="accordion-item color_profile">
      <h2 class="accordion-header d-flex mb-2" id="panelsStayOpen-headingThree">
        <font-awesome-icon class="icon-size" :icon="['fas', 'cube']" />
        
          <button class="accordion-button p-0 px-3 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseThree">
            Components
            <div>
  </div>
      </button>
    </h2>
    <div class="">
    <div id="panelsStayOpen-collapseThree" v-for="items in Componentsprofile" :key="items" class="accordion-collapse collapse  text-white " aria-labelledby="panelsStayOpen-headingThree">
      <RouterLink :to="items.routeName" class="router_color d-flex align-items-center gap-4">
            <span class="px-2  py-2">{{ items.shortName }}</span>{{ items.name }}
            <!-- <div class="arrow"></div> -->
        </RouterLink>
  
    </div>
    
</div>
  </div>

</div>
    </div>

    <div class="mt-4" >
    <div class="accordion" id="accordionPanelsStayOpenExample" >
  <div class="accordion-item color_profile">
      <h2 class="accordion-header d-flex mb-2" id="panelsStayOpen-headingFroms">
        <font-awesome-icon class="icon-size"  :icon="['fas', 'clipboard']" />
          <button class="accordion-button p-0 px-3 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFroms" aria-expanded="true" aria-controls="panelsStayOpen-collapseFroms">
            Forms
            <div>
  </div>
      </button>
    </h2>
    <div class="">
    <div id="panelsStayOpen-collapseFroms" v-for="items in Formsprofile" :key="items" class="accordion-collapse collapse  text-white " aria-labelledby="panelsStayOpen-headingFroms">
      <RouterLink :to="items.routeName" class="router_color d-flex align-items-center gap-4">
            <span class="px-2  py-2">{{ items.shortName }}</span>{{ items.name }}
            <!-- <div class="arrow"></div> -->
        </RouterLink>
  
    </div>
    
</div>
  </div>

</div>
    </div>

    <div class="mt-4" >
    <div class="accordion" id="accordionPanelsStayOpenExample" >
  <div class="accordion-item color_profile">
      <h2 class="accordion-header d-flex mb-2" id="panelsStayOpen-headingTableList">
        <font-awesome-icon class="icon-size"  :icon="['fas', 'list']" />
          <button class="accordion-button p-0 px-3 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTableList" aria-expanded="true" aria-controls="panelsStayOpen-collapseTableList">
            Table List
            <div>
  </div>
      </button>
    </h2>
    <div class="">
    <div id="panelsStayOpen-collapseTableList" v-for="items in TableListprofile" :key="items" class="accordion-collapse collapse text-white " aria-labelledby="panelsStayOpen-headingTableList">
      <RouterLink :to="items.routeName" class="router_color d-flex align-items-center gap-4">
            <span class="px-2  py-2">{{ items.shortName }}</span>{{ items.name }}
            <!-- <div class="arrow"></div> -->
        </RouterLink>
  
    </div>
    
</div>
  </div>

</div>
    </div>

    <div class="mt-4" >
    <div class="accordion" id="accordionPanelsStayOpenExample" >
  <div class="accordion-item color_profile">
      <h2 class="accordion-header d-flex mb-2" id="panelsStayOpen-headingMap">
      
        <font-awesome-icon  class="icon-size"  :icon="['fas', 'map']" />
          <button class="accordion-button p-0 px-3 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseMap" aria-expanded="true" aria-controls="panelsStayOpen-collapseMap">
            Maps
            <div>
  </div>
      </button>
    </h2>
    <div class="">
    <div id="panelsStayOpen-collapseMap" v-for="items in Mapsprofile" :key="items" class="accordion-collapse collapse  text-white " aria-labelledby="panelsStayOpen-headingMap">
      <RouterLink :to="items.routeName" class="router_color d-flex align-items-center gap-4">
            <span class="px-2  py-2">{{ items.shortName }}</span>{{ items.name }}
            <!-- <div class="arrow"></div> -->
        </RouterLink>
  
    </div>
    
</div>
  </div>

</div>
    </div>
    <div class="mt-4 d-flex gap-4 align-items-center" >
        <font-awesome-icon  class="icon-size"  :icon="['fas', 'chart-simple']" />
        <RouterLink  class="router_color d-flex align-items-center gap-4">
           Charts
        </RouterLink>
    <!-- <div class="accordion" id="accordionPanelsStayOpenExample" >
  <div class="accordion-item color_profile">
      <h2 class="accordion-header d-flex mb-2" id="panelsStayOpen-headingChart">
      
        <font-awesome-icon  class="icon-size"  :icon="['fas', 'gifts']" />
          <button class="accordion-button p-0 px-3 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseChart" aria-expanded="true" aria-controls="panelsStayOpen-collapseChart">
           CHARTS
            <div>
  </div>
      </button>
    </h2>
    <div class="border-bottom">
    <div id="panelsStayOpen-collapseChart" v-for="items in profileName" :key="items" class="accordion-collapse collapse show text-white " aria-labelledby="panelsStayOpen-headingChart">
      <RouterLink :to="items.routeName" class="router_color d-flex align-items-center gap-4">
            <span class="px-2  py-2">{{ items.shortName }}</span>{{ items.name }}
          
        </RouterLink>
  
    </div>
    
</div>
  </div>

</div> -->
    </div>
    <div class="mt-4 d-flex gap-4 align-items-center" >
        <font-awesome-icon  class="icon-size"  :icon="['fas', 'calendar']" />
        <RouterLink  class="router_color d-flex align-items-center gap-4">
           Calander
        </RouterLink>
    <!-- <div class="accordion" id="accordionPanelsStayOpenExample" >
  <div class="accordion-item color_profile">
      <h2 class="accordion-header d-flex mb-2" id="panelsStayOpen-headingChart">
      
        <font-awesome-icon  class="icon-size"  :icon="['fas', 'gifts']" />
          <button class="accordion-button p-0 px-3 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseChart" aria-expanded="true" aria-controls="panelsStayOpen-collapseChart">
           CHARTS
            <div>
  </div>
      </button>
    </h2>
    <div class="border-bottom">
    <div id="panelsStayOpen-collapseChart" v-for="items in profileName" :key="items" class="accordion-collapse collapse show text-white " aria-labelledby="panelsStayOpen-headingChart">
      <RouterLink :to="items.routeName" class="router_color d-flex align-items-center gap-4">
            <span class="px-2  py-2">{{ items.shortName }}</span>{{ items.name }}
          
        </RouterLink>
  
    </div>
    
</div>
  </div>

</div> -->
    </div>


    <div class="mt-4" >
    <div class="accordion" id="accordionPanelsStayOpenExample" >
  <div class="accordion-item color_profile">
      <h2 class="accordion-header d-flex mb-2" id="panelsStayOpen-headingPages">
        <font-awesome-icon class="icon-size" :icon="['fas', 'gift']" />
          <button class="accordion-button p-0 px-3 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsePages" aria-expanded="true" aria-controls="panelsStayOpen-collapsePages">
            Pages
            <div>
  </div>
      </button>
    </h2>
    <div class="">
    <div id="panelsStayOpen-collapsePages" v-for="items in Pagesprofile" :key="items" class="accordion-collapse collapse text-white " aria-labelledby="panelsStayOpen-headingPages">
      <RouterLink :to="items.routeName" class="router_color d-flex align-items-center gap-4">
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

const DashboardProfile= [
    {  name:"Overview", shortName: "O" , routeName : "/overviews"},
    { name:"Stats", shortName: "S", routeName : "/EditProfileView"},
  
]

const Componentsprofile= [
    { name:"Buttons", shortName: "B" , routeName : "/"},
    { name:"Grid System", shortName: "G", routeName : "/EditProfileView"},
    { name:"Panels", shortName: "p", routeName : "/EditProfileView"},
    { name:"Sweet Alert", shortName: "S", routeName : "/EditProfileView"},
    { name:"Notifications", shortName: "N", routeName : "/EditProfileView"},
    { name:"Icons", shortName: "I", routeName : "/EditProfileView"},
    { name:"Typography", shortName: "T", routeName : "/EditProfileView"},
  
]


const Formsprofile= [
    { name:"Regular Forms", shortName: "R" , routeName : "/"},
    { name:"Extended Forms", shortName: "E", routeName : "/EditProfileView"},
    { name:"Validation Forms", shortName: "V", routeName : "/EditProfileView"},
    { name:"Wizard", shortName: "W", routeName : "/EditProfileView"},
  
]


const TableListprofile= [
    { name:"Regular Tables", shortName: "R" , routeName : "/"},
    { name:"Extended Tables", shortName: "E", routeName : "/EditProfileView"},
    { name:"Paginated Tables", shortName: "P", routeName : "/EditProfileView"},
  
]

const Mapsprofile= [
    { name:"Google Maps", shortName: "G" , routeName : ""},
    { name:"Full Screen Maps", shortName: "F", routeName : ""},
    { name:"Vector Maps", shortName: "V", routeName : ""},
  
]


const Pagesprofile= [
    { name:"User Page", shortName: "U" , routeName : "/"},
    { name:"Timeline Page", shortName: "T", routeName : "/EditProfileView"},
    { name:"Login Page", shortName: "L", routeName : "/EditProfileView"},
    { name:"Register Page", shortName: "R", routeName : "/EditProfileView"},
  
]
</script>
  
  <style>

  </style>
  