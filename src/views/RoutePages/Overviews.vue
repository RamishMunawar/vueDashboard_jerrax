<template>
  <div class="p-4">
    <div class="d-flex flex-wrap gap-4">
      <div v-for="data in dataArray" :key="data">
        <Cardoverviews
          :imgsrc="data.CardIcon"
          :value="data.CardValue"
          :title="data.CardHeading"
          :Updates="data.Updates"
          :reloadIcon="data.reloadIcon"
        />
      </div>
    </div>
    <div class="row py-5">
      <div class="col-12 col-lg-8">
        <GlobalSales />
      </div>
      <div class="col-12 col-lg-4">
        <FinancialStatistics />
      </div>
    </div>

    <div
      class="d-flex gap-4 align-items-center justify-content-center text-center flex-wrap flex-lg-nowrap"
    >
      <div v-for="cardData in Card_four" :key="cardData">
        <cardorderOverview
          :title="cardData.title"
          :name="cardData.name"
          :className="cardData.className"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Cardoverviews from "../RoutePages/Cardoverviews.vue";
import GlobalSales from "../RoutePages/GlobalSales.vue";
import FinancialStatistics from "../RoutePages/FinancialStatistics.vue";
import cardorderOverview from "../RoutePages/cardorderOverview.vue";
const dataArray = [
  {
    CardHeading: "Capacity",
    CardValue: "105GB",
    CardIcon: "server",
    reloadIcon: "arrows-rotate",
    Updates: "Updated now",
  },
  {
    CardHeading: "Revenue",
    CardValue: "$1,345",
    CardIcon: "wallet",
    Updates: " Last day",
    reloadIcon: "calendar",
  },
  {
    CardHeading: "Errors",
    CardValue: "23",
    CardIcon: "heart-pulse",
    Updates: "In the last hour",
    reloadIcon: "clock",
  },
  {
    CardHeading: "Followers",
    CardValue: "+45",
    CardIcon: "twitter",
    Updates: "Updated now",
    reloadIcon: "arrows-rotate",
  },
];

const Card_four = [
  {
    title: "Dashboard",
    name: "Monthly sales target",

    // value:""
    className: "dashboard_card",
  },
  {
    title: "Orders",
    name: "Completed",
    // value:""
    className: "dashboard_order",
  },
  {
    title: "New Visitors",
    name: "Out of total number",
    // value:""
    className: "dashboard_visitor",
  },
  {
    title: "Subscriptions",
    name: "Monthly newsletter",
    // value:""
    className: "dashboard_subscription",
  },
];

const props = defineProps([
  "imgsrc",
  "title",
  "value",
  "Updates",
  "reloadIcon",
]);
</script>
