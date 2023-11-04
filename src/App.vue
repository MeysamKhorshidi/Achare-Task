<template>
  <HeaderPage />

  <router-view>
    <request-page v-model:value="data.data" v-if="route.path === '/'" />
    <LocationPage :value="data.data" v-if="route.path === '/location'" />
    <UserPage  v-if="route.path === '/users'" />
    <SweetAlert  v-if="route.path === '/alert'" />
  </router-view>
</template>

<script setup>
import HeaderPage from "./components/HeaderPage.vue";
import RequestPage from "@/pages/RequestPage.vue";
import LocationPage from "@/pages/LocationPage.vue";
import UserPage from "@/pages/UserPage.vue";
import SweetAlert from "@/pages/SweetAlert.vue";
import { reactive } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const data = reactive({
  data: {},
});
</script>

<style>
</style>
