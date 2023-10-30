<template>
  <div class="locationn" style="height: 380px; width: 800px">
    <l-map ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker :lat-lng="markerLatLng"></l-marker>
    </l-map>
    <!-- <i
      class="fa-sharp fa-solid fa-location-dot location"
      style="color: #f29c1f"
    ></i> -->
  </div>
  <FooterPage />
</template>
      
      <script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import FooterPage from "../components/FooterPage.vue";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    FooterPage,
  },
  data() {
    return {
      zoom: 2,
      markerLatLng: [47.31322, -1.319482],
    };
  },
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
</style>
     



      