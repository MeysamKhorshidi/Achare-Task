<template>
  <div class="request-box">
    <span>ثبت آدرس</span>
    <div class="request-box__form">
      <span class="request-box__form-title col-md-12">
        لطفا مشخصات و آدرس خود را وارد کنید
      </span>
      <form class="row mx-3 needs-validation" @submit="submitForm">
        <div class="mb-4 col-md-4 position-relative">
          <label for="name" class="form-lable request-box__form-lable"
            >نام</label
          >
          <input
            v-model="name"
            type="text"
            class="form-control"
            placeholder="مثال رضا"
            required
          />
          <div class="invalid-tooltip">نام باید دارای 3 کاراکتر باشد</div>
          <div class="request-box__form-title-icon">
            <i class="fa-solid fa-circle-xmark" style="color: #757575"></i>
          </div>
        </div>
        <div class="mb-4 col-md-4 position-relative">
          <label for="lastname" class="form-lable request-box__form-lable">
            نام خانوادگی</label
          >
          <input
            type="text"
            v-model="lastname"
            class="form-control"
            placeholder="مثال: رضایی"
          />
          <div class="request-box__form-title-tooltip">
            نام خانوادگی باید دارای 3 کاراکتر باشد
          </div>
          <div class="request-box__form-title-icon">
            <i class="fa-solid fa-circle-xmark" style="color: #757575"></i>
          </div>
        </div>
        <div class="mb-4 col-md-4 position-relative">
          <label for="phone" class="form-lable request-box__form-lable"
            >شماره تلفن همراه</label
          >
          <input
            v-model="phone"
            type="text"
            class="form-control"
            placeholder=" مثال: ۰۹۱۲۱۲۳۴۵۶۷"
          />
          <div class="request-box__form-title-tooltip">
            شماره وارد شده صحیح نمی باشد
          </div>
          <div class="request-box__form-title-icon">
            <i class="fa-solid fa-circle-xmark" style="color: #757575"></i>
          </div>
        </div>
        <div class="mb-4 col-md-4 position-relative">
          <label for="phone2" class="form-lable request-box__form-lable"
            >شماره تلفن ثابت (اختیاری)</label
          >
          <input
            v-model="phone2"
            type="text"
            class="form-control"
            placeholder="مثال: ۰۲۱۱۲۳۴۵۶۷"
          />
          <div class="request-box__form-title-tooltip">
            شماره وارد شده صحیح نمی باشد
          </div>
          <div class="request-box__form-title-icon">
            <i class="fa-solid fa-circle-xmark" style="color: #757575"></i>
          </div>
        </div>
        <div class="mb-5 col-md-8 position-relative">
          <label for="adress" class="form-lable request-box__form-lable"
            >آدرس</label
          >
          <input type="text" class="form-control" v-model="address" />
          <div class="request-box__form-title-tooltip">
            آدرس باید دارای 10 کاراکتر باشد
          </div>
          <div class="request-box__form-title-icon">
            <i class="fa-solid fa-circle-xmark" style="color: #757575"></i>
          </div>
        </div>
        <div col-md-4>
          <div class="check-box-gender">
            <div class="check-box-gender__title"><span>جنسیت</span></div>
            <div class="check-box-gender__menu">
              <input
                v-model="female"
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                checked
              />
              <label class="form-check-label" for="exampleRadios1">
                خانم
              </label>
              <input
                v-model="male"
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
                checked
              />
              <label class="form-check-label" for="exampleRadios2"> آقا </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  <FooterPage @submitButtonClicked="getData" />
</template>

<script>
import FooterPage from "@/components/FooterPage.vue";
import axios from "axios";

export default {
  components: {
    FooterPage,
  },
  data() {
    return {
      name: "",
      lastname: "",
      phone: "",
      phone2: "",
      address: "",
      gender: "male",
    };
  },
  methods: {
    submitForm() {
      const data = {
        first_name: this.name,
        last_name: this.lastname,
        coordinate_mobile: this.phone,
        coordinate_phone_number: this.phone2,
        address: this.address,
        gender: this.gender,
        lat: '33.88415383679746',
        lng: '45.639272332191474',
        region: `1`,
      };

      const url = "https://stage.achareh.ir/api/karfarmas/address";
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4",
      };

      // Send the form data to the API
      axios
        .post(url, { data }, { headers })
        .then((response) => {
          console.log(response);
          // Handle the API response here
        })
        .catch((error) => {
          console.error(error);
          // Handle any errors that occurred during the request
        });
    },
    getData() {
      const url = "https://stage.achareh.ir/api/karfarmas/address";
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4",
      };

      // Send the form data to the API
      axios
        .get(url, { headers })
        .then((response) => {
          console.log(response);
          // Handle the API response here
        })
        .catch((error) => {
          console.error(error);
          // Handle any errors that occurred during the request
        });
    },
  },
};
</script>

<style>
.request-box {
  width: 808px;
  height: 407px;
  margin: 57px auto;
}

.request-box__form {
  width: 806px;
  height: 369px;
  border-radius: 4px;
  background: var(--color-white);
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(237, 240, 242, 1);
}
.request-box__form-title {
  display: block;
  width: 603px;
  height: 22px;
  margin: 15px 30px 30px 30px;
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: right;
  color: var(--text-color);
}
.request-box__form-lable {
  color: var(--text-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: right;
}
.request-box__form-title-tooltip {
  width: 222px;
  height: 22px;
  font-size: 10px;
  font-weight: 400;
  line-height: 32px;
  color: var(--secendary-color);
  text-align: right;
  opacity: 0;
}
.request-box__form-title-icon {
  position: absolute;
  top: 32px;
  left: 22px;
  opacity: 0;
}

.check-box-gender {
  width: 249px;
  height: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.check-box-gender__title {
  width: 80px;
  height: 22px;
  color: var(--text-color);
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: right;
}
.check-box-gender__menu {
  width: 122px;
  height: 22px;
  display: flex;
  justify-content: space-between;
  font-family: Vazir;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: right;
}
</style>