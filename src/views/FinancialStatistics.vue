<template>
  <div class="card" style="">
    <div class="card-body">
      <div class="d-flex flex-wrap justify-content-between align-items-center">
        <div>
          <h4>$34,657</h4>
        </div>
        <div>
          <span  class="text-white bg-success p-1 rounded-5 border">
            +18%
          </span>
        </div>
        
      </div>
      Total EARNINGS <span class="text-muted">in last</span> TEN <span class="text-muted">quarters</span>
      <Bar :chart-data="chartData" :options="chartOptions" />
      <div></div>
    </div>
  </div>
</template>
    
    <script setup>
const props = defineProps([
  "imgsrc",
  "title",
  "value",
  "Updates",
  "reloadIcon",
]);

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

// Register Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

// Chart data
const chartData = ref({
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Sales",
      backgroundColor: "#42A5F5",
      data: [40, 20, 12, 39, 10, 40, 50],
    },
  ],
});

// Optional: Chart options
const chartOptions = ref({
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
    title: {
      display: true,
      text: "Monthly Sales Data",
    },
  },
});
</script>