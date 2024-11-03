<script setup>
import { RouterView } from "vue-router";
import { RouterLink } from "vue-router";
import ProfileCard from "./views/ProfileCard.vue";
import LeftTopBar from "./views/LeftTopBar.vue";
import MainSideBar from "./views/MainSideBar.vue";
</script>

<template>
  <div class="d-flex">
    <div class="sidebar_bg col-2 px-3">
      <div class="d-flex align-items-center gap-4 py-3 border-bottom">
        <img class="img_logo" src="./assets/logo.png" alt="" />
        <RouterLink to="/stats" class="dashboard_name fw-bolder"
          >Jerrax Dashboard</RouterLink
        >
      </div>
      <div>
        <ProfileCard />
        <MainSideBar />
      </div>
      <!-- profile side  -->
    </div>

    <div class="col-10 bg-left">
      <LeftTopBar />
      <RouterView />
      <!-- Footer -->
      <div class=" border-top">
        <div class="mt-3 d-flex  justify-content-between px-2">
        <div class="footer ">
          <ul>
            <li>Creative Ramish</li>
            <li>Blog</li>
            <li>Licenses</li>
          </ul>
        </div>
        <div>
          © Coded with
          <font-awesome-icon :icon="['fas', 'heart']" style="color: red;" />
            by
            <a href="https://www.linkedin.com/in/ramish-munawar/?originalSubdomain=pk" target="blank">Ramish Munawar</a>
            .
            <span>Designed by <a href="https://github.com/RamishMunawar" target="_blank">Creative Ramish</a>.</span>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
