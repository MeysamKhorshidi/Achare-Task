<template>
  <div class="locationn" style="height: 380px; width: 800px">
    <l-map ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker
        :lat-lng="markerLatLng"
        draggable="true"
        @update:lat-lng="getLatlng($event)"
      ></l-marker>
    </l-map>
  </div>
  <FooterPage>
    <router-link to="/infos" class="footer__main-button">
      <span>ثبت و ادامه</span>
    </router-link>
  </FooterPage>
</template>
      
      <script setup>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import FooterPage from "../components/FooterPage.vue";
import { ref } from "vue";

const zoom = ref(3);
const markerLatLng = ref([35.7286770448517, 51.37207031250001]);

const getLatlng = (e) => {
  console.log(e);
};

</script>
      
      <style>
.locationn {
  margin: 57px auto;
}
.location {
  position: absolute;
  top: 255px;
  left: 1025px;
  z-index: 10000;
}
.footer__main-button {
  text-decoration: none;
  color: rgba(255, 255, 255, 1);
  width: 105px;
  height: 22px;

  font-family: Vazir;
  font-size: 16px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: center;
}
</style>
     



      