<template>
    
          <div id="app">
            <vuevectormap
              ref="map"
              width="850px"
              height="500px"
              :labels="labels"
              :series="series"
              :markers="markers"
              :selectedMarkers="selectedMarkers"
              :markersSelectable="true"
              :markersSelectableOne="true"
              :markerStyle="markerStyle"
              :markerLabelStyle="markerLabelStyle"
              :selectedRegions="selectedRegions"
              :regionsSelectable="true"
              :regionsSelectableOne="true"
              :regionStyle="regionStyle"
              :regionLabelStyle="regionLabelStyle"
            ></vuevectormap>
          </div>
  </template>
      
      <script setup>  
  import { ref, onMounted, computed } from "vue";
  
  const map = ref(null);
  
  // Start markers
  const markers = [
    { name: "Palestine", coords: [31.5, 34.8] },
    { name: "Russia", coords: [61, 105] },
  ];
  const markerStyle = {};
  const markerLabelStyle = {};
  const selectedMarkers = ref([0]);
  
  // Regions
  const regionStyle = {};
  const regionLabelStyle = { initial: { fill: "orange" } };
  const selectedRegions = ref(["CN"]);
  
  // Series
  const series = {
    regions: [
      {
        attribute: "fill",
        legend: {
          title: "Play around with series",
        },
        scale: {
          scale1: "red",
          scale2: "blue",
          scale3: "green",
        },
        values: {
          US: "scale1",
          EG: "scale2",
          IT: "scale3",
          BR: "scale2",
        },
      },
    ],
  };
  
  const labels = computed(() => {
    return {
      markers: {
        render(marker) {
          return marker.name;
        },
      },
    };
  });
  
  // Lifecycle hook
  onMounted(() => {
    // You can access all Jsvectormap's methods
    const vueMap = map.value.getMap();
    // console.log(vueMap);
  });
  </script>