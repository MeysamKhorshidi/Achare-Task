<template>
  <div class="request-box">
    <span class="request-box-header">ثبت آدرس</span>
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
          <div class="request-box__form-title-tooltip" v-if="name > '0' && name.length <'3' " >نام باید دارای 3 کاراکتر باشد</div>
          <div class="request-box__form-title-icon" v-if="name != '' ">
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
          <div class="request-box__form-title-tooltip" v-if="lastname > '0' && lastname.length <'3' " >
            نام خانوادگی باید دارای 3 کاراکتر باشد
          </div>
          <div class="request-box__form-title-icon" v-if="lastname != '' ">
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
          <div class="request-box__form-title-tooltip" v-if="phone > '0' && phone.length <= '11'" >
            شماره وارد شده صحیح نمی باشد
          </div>
          <div class="request-box__form-title-icon" v-if="phone != '' ">
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
          <!-- <div class="request-box__form-title-tooltip">
            شماره وارد شده صحیح نمی باشد
          </div> -->
          <div class="request-box__form-title-icon" v-if="phone2 != '' ">
            <i class="fa-solid fa-circle-xmark" style="color: #757575"></i>
          </div>
        </div>
        <div class="mb-4 col-md-8 position-relative">
          <label for="adress" class="form-lable request-box__form-lable"
            >آدرس</label
          >
          <input type="text" class="form-control" v-model="address" />
          <div class="request-box__form-title-tooltip" v-if="address > '0' && address.length < '10'">
            آدرس باید دارای 10 کاراکتر باشد
          </div>
          <div class="request-box__form-title-icon" v-if="address != '' ">
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
  <FooterPage  >
    <router-link to="/location" class="footer__main-button" @click="submitForm">
          <span>ثبت و ادامه</span>
        </router-link>
  </FooterPage>
</template>

<script setup>
import FooterPage from "@/components/FooterPage.vue";
import axios from "axios";
import {ref} from 'vue'

     const name=ref("")
     const lastname=ref("")
     const phone=ref("")
     const phone2=ref("")
     const address=ref("")
     const gender=ref("female")
      
  
     const data = {
        first_name:name,
        last_name:lastname,
        coordinate_mobile:phone,
        coordinate_phone_number:phone2,
        address:address,
        gender:gender,
        lat: "33.88415383679746",
        lng: "45.639272332191474",
        region: 1,
      };

   const submitForm =() =>{
    

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
    }


    // const getData = () => {
    //   const url = "https://stage.achareh.ir/api/karfarmas/address";
    //   const headers = {
    //     "Content-Type": "application/json",
    //     Authorization: "Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4",
    //   };

    //   // Send the form data to the API
    //   axios
    //     .get(url, { headers })
    //     .then((response) => {
    //       console.log(response);
    //       // Handle the API response here
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //       // Handle any errors that occurred during the request
    //     });
    // }

   

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
  opacity: 1;
}
.request-box__form-title-icon {
  position: absolute;
  top: 32px;
  left: 22px;
  opacity: 1;
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

/*  Responsive  Mobile */

@media (max-width: 375px) {
  .request-box {
    width: 375px;
    height: 620px;
    margin: 10px auto;
  }
  .request-box-header {
   margin: 0 20px;
  }

  .request-box__form {
    width: 343px;
    height: 599px;
    margin: 0 16px;
  }
  .request-box__form-title {
    display: block;
    width: 313px;
    height: 20px;
    margin:6px 20px;
    font-size: 12px;
  }
  .request-box__form-lable {
 
    font-size: 12px;
    font-weight: 500;
    line-height: 18.75px;
  }
  .form-control{
    width: 311px !important;
    margin: 0 -10px;
  }


  /* .request-box__form-title-tooltip {
    width: 222px;
    height: 22px;
    font-size: 10px;
    font-weight: 400;
    line-height: 32px;
    color: var(--secendary-color);
    text-align: right;
    opacity: 1;
  } */
  .request-box__form-title-icon {
    left: 10px;
  }



  /* .check-box-gender {
    width: 249px;
    height: 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  } */
  .check-box-gender__title {
    width: 79.49px;
height: 19px;
font-size: 12px;
    color: var(--text-color);
    line-height: 18.75px;
  }
  .check-box-gender__menu {
    width: 133px;
    height: 19px;
    display: flex;
    justify-content: space-evenly;
    font-family: Vazir;
    font-size: 12px;
    line-height: 18.75px;
  }
}
</style>