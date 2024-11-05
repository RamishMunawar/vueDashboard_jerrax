<template>
  <div class="m-4" style="width: 20rem">
    <div class="card-body">
      <div class="text-center">
        <h5>{{ cols.heading }}</h5>
        <p>{{ cols.desc }}</p>
      </div>
      <ul class="d-flex">
        <li class="card" v-for="column in cols.cols">{{ column }}</li>
      </ul>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["cols"]);
</script>
