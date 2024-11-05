<template>
  <div class="">
    <div v-for="grid in GridSystem" :key="grid">
      <GridCardSystem :cols="grid" />
    </div>
  </div>
</template>
<script setup>
import GridCardSystem from "../RoutePages/GridCardSystem.vue";

const GridSystem = [
  {
    heading: "XS Grid",
    desc: "Always Horizontal",
    cols: ["col-xs-4", "col-xs-4", "col-xs-4"],
  },
  {
    heading: "SM Grid",
    desc: "Collapsed at 768px",
    cols: ["col-sm-4", "col-sm-4", "col-sm-4"],
  },
  {
    heading: "MD Grid",
    desc: "Collapsed at 992px",
    cols: ["col-md-4", "col-md-4", "col-md-4"],
  },
  {
    heading: "LG Grid",
    desc: "Showing different sizes on different screens",
    cols: ["col-lg-4", "col-lg-4", "col-lg-4"],
  },
  {
    heading: "Offset Grid",
    desc: "Adding some space when needed",
    cols: ["col-xs-4", "col-xs-4", "col-xs-4"],
  },
];
</script>
