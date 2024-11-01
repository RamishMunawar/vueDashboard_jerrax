<template>
          <nav class="navbar navbar-expand-lg navbar-light border-bottom">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">DashBoard</a>
    
   
    <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
     
      <form class="">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
      </form>
      <div class="d-flex gap-3 align-items-center">
        <div>

          <font-awesome-icon  :icon="['fas', 'sliders']" /> Stats
        </div>
        <font-awesome-icon :icon="['fas', 'bell']" />
        <div class="icon-container">
  <font-awesome-icon :icon="['fas', 'gear']" class="rotating-icon" />
</div>

      </div>
      
    </div>
  </div>
</nav>

</template>
<script setup>

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
  transform: rotate(90deg); /* Adjust the degree of rotation as needed */
}

</style>