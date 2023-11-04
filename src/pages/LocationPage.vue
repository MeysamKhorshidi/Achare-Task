<template>
  <div class="location-box">
    <div class="location-box_header">
      <div class="location-box_header-icon">
        <i class="fa-solid fa-arrow-right" style="color: #323232"></i>
      </div>
      <div class="location-box_header-title">
        <span>انتخاب آدرس</span>
      </div>
    </div>
    <div class="location-box_main">
      <div class="location-box_main-title">
        <span class="location-box_main-title-desktop"
          >موقعیت مورد نظر خود را روی نقشه مشخص کنید</span
        >
        <span class="location-box_main-title-mobile">انتخاب موقعیت</span>
      </div>
      <div class="location-box_main-location">
        <l-map
          ref="map"
          v-model:zoom="zoom"
          :center="[35.7286770448517, 51.37207031250001]"
        >
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
    </div>
  </div>

  <!-- The button send the Api -->
  <FooterPage class="footer-location">
    <router-link to="/alert" class="footer__main-button" @click="submitDatas">
      <span v-if="loading">ثبت و ادامه</span>
      <div v-else>
        <div class="spinner-grow text-light" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-light" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-light" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </router-link>
  </FooterPage>
</template>

<script setup>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import FooterPage from "../components/FooterPage.vue";
import { ref, defineProps } from "vue";
import axios from "axios";

const zoom = ref(16);
const props = defineProps(["value"]);
const markerLatLng = ref([35.7286770448517, 51.37207031250001]);
const loading = ref(true);
let latitude = ref("");
let longiutde = ref("");

// The function, that is get location status
const getLatlng = (e) => {
  latitude.value = e.lat;
  longiutde.value = e.lng;
  console.log(e.lat);
};

//  Function that has send the data to the API
const submitDatas = () => {
  const url = "https://stage.achareh.ir/api/karfarmas/address";
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4",
  };
  // Total data has post to Api
  const datas = {
    first_name: props.value.first_name,
    last_name: props.value.lastname,
    coordinate_mobile: props.value.coordinate_mobile,
    coordinate_phone_number: props.value.coordinate_phone_number,
    address: props.value.address,
    gender: props.value.gender,
    lat: latitude.value,
    lng: longiutde.value,
    region: 1,
  };

  // Send the form data to the API
  axios
    .post(url, datas, { headers })
    .then((response) => {
      console.log(response);
      loading.value = false;
      // Handle the API response here
    })
    .catch((error) => {
      console.error(error);
      loading.value = false;
    
    });
};
</script>

<style scoped>
/*--------------------  Responsive  Desktop------------------ */
.loc {
  z-index: 10000;
}
.location-box {
  width: 806px;
  height: 418px;
  margin: 28px auto;
}

.location-box_header {
  display: flex;
}
.location-box_header-title {
  width: 301px;
  height: 32px;
  color: var(--text-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: right;
}
.location-box_header-icon {
  width: 24px;
  height: 24px;
  margin-top: 3px;
}
.location-box_main {
}
.location-box_main-title {
  width: 806px;
  height: 42px;
  padding: 0 40px;
  border-radius: 0px, 0px, 4px, 4px;
  background: #ffffff;
  font-size: 12px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: right;
}
.location-box_main-title-mobile {
  display: none;
}
.location-box_main-title-mobile {
  display: block;
  text-align: center;
}
.location-box_main-location {
  width: 806px;
  height: 330px;
}

.footer__main-button {
  text-decoration: none;
  color: rgba(255, 255, 255, 1);
  width: 105px;
  height: 22px;
  font-size: 16px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: center;
  z-index: 999;
}
/*--------------------  Responsive  Mobile------------------ */

@media (max-width: 375px) {
  .location-box {
    margin: 0;
    width: 375px;
  }
  .location-box_header {
    display: none;
  }
  .location-box_main {
    width: 375px;
  }

  .location-box_main-title {
    width: 375px;
    height: 38px;
  }
  .location-box_main-title-desktop {
    display: none;
  }
  .location-box_main-location {
    width: 375px;
    height: 438px;
  }
  .footer-location {
    padding-top: 63px;
  }
}
</style>
     



      