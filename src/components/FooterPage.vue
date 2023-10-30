<template>
  <footer>
    <div class="footer__container">
      <div class="footer__main">
        <router-link to="/user" class="footer__main-button" @click="submitForm">
          <span>ثبت و ادامه</span>
        </router-link>
      </div>
    </div>
  </footer>
</template>


<script>
export default {
  methods: {
    submitForm() {
      // Emit an event to notify the parent component
      this.$emit("submitButtonClicked");
    },
  },
};
</script>

<style>
.footer__container {
  max-width: 1440px;
  height: 84px;
  box-shadow: 0px -1px 8px 0px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer__main {
  width: 224px;
  height: 46px;
  border-radius: 4px;
  background: rgba(0, 191, 165, 1);
  display: flex;
  justify-content: center;
  align-items: center;
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