<template>
  <div class="circular-chart">
    <Doughnut :chart-data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Doughnut } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

// Chart data
const chartData = ref({
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'Votes',
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      data: [12, 19, 3],
    },
  ],
});

// Chart options
const chartOptions = ref({
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Votes by Color',
    },
  },
});

</script>

<style scoped>
.circular-chart {
  max-width: 100%; /* Allow the chart to be responsive */
  margin: auto;
  height: 100%; /* Make it fill the container */
}
</style>
