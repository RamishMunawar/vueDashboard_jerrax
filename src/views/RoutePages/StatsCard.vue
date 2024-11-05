<template>
  <div class="card">
    <div class="card-body">
      <div class="d-flex flex-wrap justify-content-between align-items-center">
        <div>
          <h4>{{ title }}</h4>
        </div>
        <!-- <div>
          <span class="text-white bg-success p-1 rounded-5 border"> +18% </span>
        </div> -->
      </div>
      <span>{{ value }}</span>
      <div class="mb-2">
        <component :is="Chart" />
      </div>
      <div class="border-top py-2 d-flex gap-2 align-items-center">
        <font-awesome-icon :icon="['fas', Icons]" />
        <!-- <font-awesome-icon :icon="['fas', checkIcon]" /> -->
        <span>{{ updates }}</span>
        <!-- {{checkIcons ? 'true' : 'sdsds'}} -->
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  value: String,
  Chart: Object,
  updates: String,
  Icons: String,
});
</script>
