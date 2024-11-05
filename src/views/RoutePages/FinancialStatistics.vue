<template>
  <div class="card">
    <div class="card-body">
      <div class="d-flex flex-wrap justify-content-between align-items-center">
        <div>
          <h4>$34,657</h4>
        </div>
        <div>
          <span class="text-white bg-success p-1 rounded-5 border"> +18% </span>
        </div>
      </div>
      Total EARNINGS <span class="text-muted">in last</span> TEN
      <span class="text-muted"> quarters</span>
      <div>
        <Bar :data="chartData" :options="chartOptions" class="h-400" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Bar } from "vue-chartjs";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Registering necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Data for the chart
const chartData = ref({
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Data One",
      backgroundColor: "#f87979",
      data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
    },
    {
      label: "Data Two",
      backgroundColor: "#F9DE3E",
      data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
    },
  ],
});

// Chart options
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
});

// Define any props if necessary
const props = defineProps({
  imgsrc: String,
  title: String,
  value: Number,
  updates: String,
  reloadIcon: String,
});
</script>

<style scoped>
.card {
  /* Add any custom styles for the card here */
}
</style>
