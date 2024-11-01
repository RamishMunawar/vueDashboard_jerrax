<script setup>
import { RouterView } from 'vue-router'
import { RouterLink } from "vue-router";
import ProfileCard from "./views/ProfileCard.vue";
import LeftTopBar from './views/LeftTopBar.vue';
import MainSideBar from './views/MainSideBar.vue';
</script>

<template>
   <div class="d-flex">
    <div class="sidebar_bg col-2 px-3">
      <div class="d-flex align-items-center gap-4 py-3 border-bottom">
        <img class="img_logo" src="./assets/logo.png" alt="" />
        <RouterLink to="/" class="dashboard_name fw-bolder" 
          >Jerrax Dashboard</RouterLink
        >
      </div>
      <div>
      <ProfileCard />
      <MainSideBar />
    </div>
      <!-- profile side  -->
    </div>

    <div class="col-10 bg-left ">
    <LeftTopBar />
      <RouterView />    
    </div>

  </div>

</template>

<style scoped>

</style>
