<template>
  <div class="">
    <div v-for="grid in GridSystem" :key="grid">
      <GridCardSystem :cols="grid" />
    </div>
  </div>
</template>
<script setup>
import GridCardSystem from "./GridCardSystem.vue";

const GridSystem = [
  {
    heading : 'XS Grid',
    desc : 'Always Horizontal',
    cols: ['col-xs-4','col-xs-4','col-xs-4'],
  },
  {
    heading : 'XS Grid',
    desc : 'Always Horizontal',
    cols: ['col-xs-4','col-xs-4','col-xs-4'],
  },
  {
    heading : 'XS Grid',
    desc : 'Always Horizontal',
    cols: ['col-xs-4','col-xs-4','col-xs-4'],
  },
  {
    heading : 'XS Grid',
    desc : 'Always Horizontal',
    cols: ['col-xs-4','col-xs-4','col-xs-4'],
  },
  {
    heading : 'XS Grid',
    desc : 'Always Horizontal',
    cols: ['col-xs-4','col-xs-4','col-xs-4'],
  },
];
</script>
