<template>
  <div class="mt-4">
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item color_profile">
        <h2 class="accordion-header d-flex mb-2" id="panelsStayOpen-headingTwo">
          <font-awesome-icon class="icon-size" :icon="['fas', 'sliders']" />
          <button
            class="accordion-button p-0 px-3 text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseTwo"
          >
            Dashboard
            <div></div>
          </button>
        </h2>
        <div class="">
          <div
            id="panelsStayOpen-collapseTwo"
            v-for="Dashboarditems in DashboardProfile"
            :key="Dashboarditems"
            class="accordion-collapse collapse text-white"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <RouterLink
              :to="Dashboarditems.routeName"
              class="router_color d-flex align-items-center gap-4"
            >
              <span class="px-2 py-2">{{ Dashboarditems.shortName }}</span
              >{{ Dashboarditems.name }}
              <arrowSign />
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-4">
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item color_profile">
        <h2
          class="accordion-header d-flex mb-2"
          id="panelsStayOpen-headingThree"
        >
          <font-awesome-icon class="icon-size" :icon="['fas', 'cube']" />

          <button
            class="accordion-button p-0 px-3 text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseThree"
          >
            Components
            <div></div>
          </button>
        </h2>
        <div class="">
          <div
            id="panelsStayOpen-collapseThree"
            v-for="Componentitems in Componentsprofile"
            :key="Componentitems"
            class="accordion-collapse collapse text-white"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <RouterLink
              :to="Componentitems.routeName"
              class="router_color d-flex align-items-center gap-4"
            >
              <span class="px-2 py-2">{{ Componentitems.shortName }}</span
              >{{ Componentitems.name }}
              <!-- <arrowSign /> -->
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-4">
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item color_profile">
        <h2
          class="accordion-header d-flex mb-2"
          id="panelsStayOpen-headingFroms"
        >
          <font-awesome-icon class="icon-size" :icon="['fas', 'clipboard']" />
          <button
            class="accordion-button p-0 px-3 text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseFroms"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseFroms"
          >
            Forms
            <div></div>
          </button>
        </h2>
        <div class="">
          <div
            id="panelsStayOpen-collapseFroms"
            v-for="Formsitems in Formsprofile"
            :key="Formsitems"
            class="accordion-collapse collapse text-white"
            aria-labelledby="panelsStayOpen-headingFroms"
          >
            <RouterLink
              :to="Formsitems.routeName"
              class="router_color d-flex align-items-center gap-4"
            >
              <span class="px-2 py-2">{{ Formsitems.shortName }}</span
              >{{ Formsitems.name }}
              <!-- <arrowSign /> -->
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-4">
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item color_profile">
        <h2
          class="accordion-header d-flex mb-2"
          id="panelsStayOpen-headingTableList"
        >
          <font-awesome-icon class="icon-size" :icon="['fas', 'list']" />
          <button
            class="accordion-button p-0 px-3 text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTableList"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseTableList"
          >
            Table List
            <div></div>
          </button>
        </h2>
        <div class="">
          <div
            id="panelsStayOpen-collapseTableList"
            v-for="Tableitems in TableListprofile"
            :key="Tableitems"
            class="accordion-collapse collapse text-white"
            aria-labelledby="panelsStayOpen-headingTableList"
          >
            <RouterLink
              :to="Tableitems.routeName"
              class="router_color d-flex align-items-center gap-4"
            >
              <span class="px-2 py-2">{{ Tableitems.shortName }}</span
              >{{ Tableitems.name }}
              <!-- <arrowSign /> -->
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-4">
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item color_profile">
        <h2 class="accordion-header d-flex mb-2" id="panelsStayOpen-headingMap">
          <font-awesome-icon class="icon-size" :icon="['fas', 'map']" />
          <button
            class="accordion-button p-0 px-3 text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseMap"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseMap"
          >
            Maps
            <div></div>
          </button>
        </h2>
        <div class="">
          <div
            id="panelsStayOpen-collapseMap"
            v-for="Mapitems in Mapsprofile"
            :key="Mapitems"
            class="accordion-collapse collapse text-white"
            aria-labelledby="panelsStayOpen-headingMap"
          >
            <RouterLink
              :to="Mapitems.routeName"
              class="router_color d-flex align-items-center gap-4"
            >
              <span class="px-2 py-2">{{ Mapitems.shortName }}</span
              >{{ Mapitems.name }}
              <!-- <arrowSign /> -->
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-4 d-flex gap-4 align-items-center">
    <font-awesome-icon class="icon-size" :icon="['fas', 'chart-simple']" />
    <RouterLink to="/Chartpages" class="router_color d-flex align-items-center gap-4">
      Charts
    </RouterLink>
  </div>
  <div class="mt-4 d-flex gap-4 align-items-center">
    <font-awesome-icon class="icon-size" :icon="['fas', 'calendar']" />
    <RouterLink to="/Calander" class="router_color d-flex align-items-center gap-4">
      Calander
    </RouterLink>
  </div>

  <div class="mt-4">
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item color_profile">
        <h2
          class="accordion-header d-flex mb-2"
          id="panelsStayOpen-headingPages"
        >
          <font-awesome-icon class="icon-size" :icon="['fas', 'gift']" />
          <button
            class="accordion-button p-0 px-3 text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapsePages"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapsePages"
          >
            Pages
            <div></div>
          </button>
        </h2>
        <div class="">
          <div
            id="panelsStayOpen-collapsePages"
            v-for="Pagesitems in Pagesprofile"
            :key="Pagesitems"
            class="accordion-collapse collapse text-white"
            aria-labelledby="panelsStayOpen-headingPages"
          >
            <RouterLink
              :to="Pagesitems.routeName"
              class="router_color d-flex align-items-center gap-4"
            >
              <span class="px-2 py-2">{{ Pagesitems.shortName }}</span
              >{{ Pagesitems.name }}

              <!-- <arrowSign /> -->
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import arrowSign from "./arrowSign.vue";
import { RouterLink } from "vue-router";
const DashboardProfile = [
  { name: "Overview", shortName: "O", routeName: "/" },
  { name: "Stats", shortName: "S", routeName: "/stats" },
];

const Componentsprofile = [
  { name: "Buttons", shortName: "B", routeName: "/buttonPages" },
  { name: "Grid System", shortName: "G", routeName: "/GridSystem" },
  { name: "Panels", shortName: "p", routeName: "/Panels" },
  { name: "Sweet Alert", shortName: "S", routeName: "/SweetAlert" },
  { name: "Notifications", shortName: "N", routeName: "/notificationPages" },
  { name: "Icons", shortName: "I", routeName: "/iconsPages" },
  { name: "Typography", shortName: "T", routeName: "/typography" },
];

const Formsprofile = [
  { name: "Regular Forms", shortName: "R", routeName: "/RegularForm" },
  { name: "Extended Forms", shortName: "E", routeName: "/ExtendedForms" },
  { name: "Validation Forms", shortName: "V", routeName: "/ValidationForms" },
  { name: "Wizard", shortName: "W", routeName: "/WizardPages" },
];

const TableListprofile = [
  { name: "Regular Tables", shortName: "R", routeName: "/RegularTables" },
  { name: "Extended Tables", shortName: "E", routeName: "/ExtendedTables" },
  { name: "Paginated Tables", shortName: "P", routeName: "/PaginatedTables" },
];

const Mapsprofile = [
  { name: "Google Maps", shortName: "G", routeName: "/GoogleMaps" },
  { name: "Full Screen Maps", shortName: "F", routeName: "/FullScreenMaps" },
  { name: "Vector Maps", shortName: "V", routeName: "/VectorMaps" },
];

const Pagesprofile = [
  { name: "User Page", shortName: "U", routeName: "/UserPages" },
  { name: "Timeline Page", shortName: "T" ,routeName: "/TimelinePage" },
  { name: "Login Page", shortName: "L",   routeName: "/LoginPage" },
  { name: "Register Page", shortName: "R" , routeName: "/RegisterPage" },
];
</script>

<style></style>
