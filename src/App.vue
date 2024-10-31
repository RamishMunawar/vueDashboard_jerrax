<script setup>
import { RouterView } from 'vue-router'
import { RouterLink } from "vue-router";
import ProfileCard from "./views/ProfileCard.vue";
import Navbar_Data from './views/Navbar_Data.vue';
import nav_data from './views/nav_data';


</script>

<template>
   <div class="d-flex">
    <div class="sidebar_bg col-3 px-3">
      <div class="d-flex align-items-center gap-4 py-3 border-bottom">
        <img class="img_logo" src="./assets/logo.png" alt="" />
        <RouterLink to="/" class="dashboard_name fw-bolder" 
          >Jerrax Dashboard</RouterLink
        >
      </div>
      <ProfileCard />
        <div v-for="nav in nav_data" :key="nav">
          <Navbar_Data  :title="nav.title"/>
        </div>
      <!-- profile side  -->
    </div>

    <div class="col-9 bg-left ">
      <RouterView />    
    </div>

  </div>

</template>

<style scoped>

</style>
