<template>
  <div class="users-box">
    <div class="users-box_header">
      <span>آدرس ها و مشخصات</span>
    </div>

    <!-- Desktop Form -->
    <div
      class="row needs-validation users-box__container"
      v-for="info in infos"
      :key="info.id"
    >
      <div class="col-md-3 user-box__form">
        <div class="users-box__title">
          <span>نام</span>
        </div>
        <div class="users-box__info">
          <span>{{ info.first_name }}</span>
        </div>
      </div>
      <div class="col-md-3 user-box__form">
        <div class="users-box__title">
          <span>نام خانوادگی</span>
        </div>
        <div class="users-box__info">
          <span>{{ info.last_name }}</span>
        </div>
      </div>
      <div class="col-md-6 user-box__form">
        <div class="users-box__title">
          <span>شماره تلفن همراه</span>
        </div>
        <div class="users-box__info">
          <span>{{ info.coordinate_mobile }}</span>
        </div>
      </div>
      <div class="col-md-3 user-box__form">
        <div class="users-box__title">
          <span>شماره تلفن ثابت</span>
        </div>
        <div class="users-box__info">
          <span>{{ info.coordinate_phone_number }}</span>
        </div>
      </div>
      <div class="col-md-3 user-box__form">
        <div class="users-box__title">
          <span>جنسیت</span>
        </div>
        <div class="users-box__info">
          <span>{{ info.gender }}</span>
        </div>
      </div>
      <div class="col-md-6 user-box__form">
        <div class="users-box__title">
          <span>آدرس</span>
        </div>
        <div class="users-box__info">
          <span>{{ info.address }}</span>
        </div>
      </div>
    </div>
    <!-- Mobile Form -->
    <div class="row needs-validation users-box-mobile"
    v-for="info in infos"
      :key="info.id">
      <div class="col-md-12 user-box-mobile__form">
        <div class="user-box-mobile__title">
          <span>نام و نام خانوادگی</span>
        </div>
        <div class="user-box-mobile__info">
          <span>{{ info.first_name }} {{ info.last_name }}</span>
        </div>
      </div>
      <div class="col-md-12 user-box-mobile__form">
        <div class="user-box-mobile__title">
          <span>جنسیت</span>
        </div>
        <div class="user-box-mobile__info">
          <span v-if="info.gender">{{info.gender}}</span>
          <span v-else>-</span>

        </div>
      </div>
      <div class="col-md-12 user-box-mobile__form">
        <div class="user-box-mobile__title">
          <span> شماره تلفن همراه </span>
        </div>
        <div class="user-box-mobile__info">
          <span>{{info.coordinate_mobile}}</span>
        </div>
      </div>
      <div class="col-md-12 user-box-mobile__form">
        <div class="user-box-mobile__title">
          <span>شماره تلفن ثابت</span>
        </div>
        <div class="user-box-mobile__info">
          <span v-if="info.coordinate_phone_number">{{info.coordinate_phone_number}} </span>
          <span v-else>- </span>
        </div>
      </div>

      <hr style="width: 311px ; margin:0 auto" />
      <div class="col-md-12 user-box-mobile__form-adress">
        <div class="user-box-mobile__title">
          <span>آدرس</span>
        </div>
        <div class="user-box-mobile__info-adress">
          <span> {{info.address}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
  setup() {
    const infos = ref();

    //Function that is get deta to show
    async function getData() {
      const url = "https://stage.achareh.ir/api/karfarmas/address";
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4",
      };

      // Send the form data to the API
      await axios
        .get(url, { headers })
        .then((response) => {
          infos.value = response.data;
          console.log(infos.value);

          // Handle the API response here
        })
        .catch((error) => {
          console.error(error);
         
        });
    }
    console.log(infos);
    getData();
    return { infos };
  },
};
</script>



<style>
/*--------------------  Responsive  Desktop------------------ */
.users-box-mobile {
  display: none ;
}

.users-box {
  width: 806px;
  height: 726px;
  margin: 57px auto;
}
.users-box_header {
  width: 301px;
  height: 32px;
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: right;
  color: #37474f;
}
.users-box__container {
  width: 806px;
  height: 216px;
  border: 1px solid #edf0f2;
  border-radius: 4px;
  box-shadow: 0px 0px 16px 0px #00000014;
  margin-bottom: 25px;
  background-color: #ffffff;
}
.user-box__form {
  margin: 20px auto 15px auto;
}
.users-box__title {
  width: 134px;
  height: 22px;
  margin-top: 25px;
  padding-right: 15px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: right;
  color: #9b9b9b;
}
.users-box__info {

  height: 25px;
  margin-top: 10px;
  padding-right: 15px;

  font-size: 16px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: right;
  color: #37474f;
}
/*--------------------  Responsive  Mobile------------------ */
@media (max-width: 375px) {
  .users-box {
    width: 375px;
    height: 620px;
    margin: 10px auto;
    padding: 0 22px;
  }
.users-box__container {
    width: 343px;
    height: 267px;
    display: none !important;
  }
  .users-box-mobile {
    display: block;
    width: 343px;
    height: 267px;
    border: 1px solid #edf0f2;
    border-radius: 4px;
    box-shadow: 0px 0px 16px 0px #00000014;
    margin-bottom: 25px;
    background-color: #ffffff;
  }
  .user-box-mobile__form {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .user-box-mobile__title {
    width: 115px;
    height: 22px;
    color: #9b9b9b;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0px;
    text-align: right;
    margin-top: -15px;
  }
  .user-box-mobile__info {
    width: 213px;
    height: 22px;
    font-family: Vazir;
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0px;
    text-align: left;
    color: #37474f;
  }

  .user-box-mobile__info-adress {
    text-align: right;
  }
}
</style>