<template>
  <div style="height: 380px; width: 800px">
    <l-map ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
    </l-map>
    <i class="fa-sharp fa-solid fa-location-dot location" style="color: #f29c1f"></i>
  </div>
</template>
      
      <script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
      zoom: 2,
    };
  },
};
</script>
      
      <style>
      .location{
        position: absolute;
        top: 255px;
        left: 1025px;
        z-index: 10000;
      }
</style>
     



      