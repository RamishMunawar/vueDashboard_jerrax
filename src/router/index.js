import { createRouter, createWebHistory } from "vue-router";
import Overviews from "@/views/RoutePages/Overviews.vue";
import Stats from "@/views/RoutePages/Stats.vue";
import ButtonPages from "@/views/RoutePages/buttonPages.vue";
import GridSystem from "@/views/RoutePages/GridSystem.vue";
import Panels from "@/views/RoutePages/panels.vue";
import SweetAlert from "@/views/RoutePages/SweetAlert.vue";
import notificationPages from "@/views/RoutePages/notificationPages.vue";
import iconsPages from "@/views/RoutePages/iconsPages.vue";
import Typography from "@/views/RoutePages/Typography.vue";
import RegularForm from "@/views/RoutePages/RegularForm.vue";
import ExtendedForms from "@/views/RoutePages/ExtendedForms.vue";
import ValidationForms from "@/views/RoutePages/ValidationForms.vue";
import WizardPages from "@/views/RoutePages/WizardPages.vue";
import RegularTables from "@/views/RoutePages/RegularTables.vue";
import ExtendedTables from "@/views/RoutePages/ExtendedTables.vue";
import PaginatedTables from "@/views/RoutePages/PaginatedTables.vue";
import GoogleMaps from "@/views/RoutePages/GoogleMaps.vue";
import FullScreenMaps from "@/views/RoutePages/FullScreenMaps.vue";
import VectorMaps from "@/views/RoutePages/VectorMaps.vue";
import UserPages from "@/views/RoutePages/UserPages.vue";
import TimelinePage from "@/views/RoutePages/TimelinePage.vue";
import LoginPage from "@/views/RoutePages/LoginPage.vue";
import RegisterPage from "@/views/RoutePages/RegisterPage.vue";
import Chartpages from "@/views/Chartpages.vue";
import Calander from "@/views/Calander.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "overviews",
      component: Overviews,
    },
    {
      path: "/stats",
      name: "stats",
      component: Stats,
    },
    {
      path: "/buttonPages",
      name: "buttonPages",
      component: ButtonPages,
    },
    {
      path: "/GridSystem",
      name: "GridSytem",
      component: GridSystem,
    },
    {
      path: "/panels",
      name: "panels",
      component: Panels,
    },
    {
      path: "/SweetAlert",
      name: "SweetAlert",
      component: SweetAlert,
    },
    {
      path: "/notificationPages",
      name: "notificationPages",
      component: notificationPages,
    },
    {
      path: "/iconsPages",
      name: "iconsPages",
      component: iconsPages,
    },
    {
      path: "/Typography",
      name: "Typography",
      component: Typography,
    },
    {
      path: "/RegularForm",
      name: "RegularForm",
      component: RegularForm,
    },
    {
      path: "/ExtendedForms",
      name: "ExtendedForms",
      component: ExtendedForms,
    },
    {
      path: "/ValidationForms",
      name: "ValidationForms",
      component: ValidationForms,
    },
    {
      path: "/WizardPages",
      name: "WizardPages",
      component: WizardPages,
    },
    {
      path: "/RegularTables",
      name: "RegularTables",
      component: RegularTables,
    },
    {
      path: "/ExtendedTables",
      name: "ExtendedTables",
      component: ExtendedTables,
    },
    {
      path: "/PaginatedTables",
      name: "PaginatedTables",
      component: PaginatedTables,
    },
    {
      path: "/GoogleMaps",
      name: "GoogleMaps",
      component: GoogleMaps,
    },
    {
      path: "/FullScreenMaps",
      name: "FullScreenMaps",
      component: FullScreenMaps,
    },
    {
      path: "/VectorMaps",
      name: "VectorMaps",
      component: VectorMaps,
    },
    {
      path: "/UserPages",
      name: "UserPages",
      component: UserPages,
    },
    {
      path: "/TimelinePage",
      name: "TimelinePage",
      component: TimelinePage,
    },
    {
      path: "/LoginPage",
      name: "LoginPage",
      component: LoginPage,
    },
    {
      path: "/RegisterPage",
      name: "RegisterPage",
      component: RegisterPage,
    },
    {
      path: "/Chartpages",
      name: "Chartpages",
      component: Chartpages,
    },
    {
      path: "/Calander",
      name: "Calander",
      component: Calander,
    },
  ],
});

export default router;
