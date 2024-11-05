<template>
  <div class="p-4">
    <div class="row">
      <div class="col-6 py-3" v-for="statics in statsCards" :key="statics">
        <StatsCard
          :title="statics.title"
          :value="statics.value"
          :Chart="statics.chart"
          :updates="statics.update"
          :Icons="statics.checkIcon"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// In Stats.vue
import StatsCard from "../RoutePages/StatsCard.vue";
import Chart1 from "@/views/charts/chart1.vue";
import Chart2 from "@/views/charts/chart2.vue";
import Chart3 from "@/views/charts/chart3.vue";
import Chart4 from "@/views/charts/chart4.vue";

const statsCards = [
  {
    title: "2015 Sales",
    value: "All Products including Taxes",
    chart: Chart1,
    update: "Data information certified",
    checkIcon: "check",
  },
  {
    title: "Users Behavior",
    value: "24 hours performance",
    chart: Chart2,
    update: "Data information certified",
    checkIcon: "arrows-rotate",
  },
  {
    title: "2015 Sales",
    value: "All Products including Taxes",
    chart: Chart3,
    update: "Data information certified",
    checkIcon: "arrows-rotate",
  },
  {
    title: "2015 Sales",
    value: "All Products including Taxes",
    chart: Chart4,
    update: "Data information certified",
    checkIcon: "check",
  },
];
</script>

<style></style>
