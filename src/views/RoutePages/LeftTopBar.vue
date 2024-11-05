<template>
  <nav class="navbar navbar-expand-lg navbar-light border-bottom">
    <div class="container-fluid">
      <div class="" style="max-width: 100px">
        <a class="navbar-brand" href="#">{{ routeName }}</a>
      </div>

      <div
        class="collapse navbar-collapse d-flex justify-content-between"
        id="navbarSupportedContent"
      >
        <form class="">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
        </form>
        <div class="d-flex gap-3 align-items-center">
          <div><font-awesome-icon :icon="['fas', 'sliders']" /> Stats</div>
          <div class="icon-container-bell">
            <font-awesome-icon :icon="['fas', 'bell']" class="rotating-bell" />
          </div>
          <div class="icon-container">
            <font-awesome-icon :icon="['fas', 'gear']" class="rotating-icon" />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const routeName = ref("");
watchEffect(() => {
  routeName.value = route.name;
});
</script>
<style scoped>
.icon-container {
  display: inline-block; /* Ensures the icon rotates around its center */
  cursor: pointer; /* Shows a pointer on hover */
}

.rotating-icon {
  transition: transform 0.3s ease; /* Smooth rotation */
}

.icon-container:hover .rotating-icon {
  color: #3db1c8;
  transform: rotate(90deg); /* Adjust the degree of rotation as needed */
}
.icon-container-bell {
  display: inline-block; /* Ensures the icon rotates around its center */
  cursor: pointer; /* Shows a pointer on hover */
}
.rotating-bell {
  transition: transform 0.3s ease; /* Smooth rotation */
}
.icon-container-bell:hover .rotating-bell {
  color: #3db1c8;
  transform: rotate(90deg); /* Adjust the degree of rotation as needed */
}
</style>
