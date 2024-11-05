<template>
  <div class="m-4" style="">
    <div class="card-body">
      <div class="">
        <h5>{{ cols.heading }}</h5>
        <p>{{ cols.desc }}</p>
      </div>
      <ul class="d-flex gap-4 ps-0">
        <li
          class="card py-2 w-100 gap-10 text-center"
          v-for="column in cols.cols"
          :key="column"
        >
          {{ column }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["cols"]);
</script>
