<template>
  <div class="sweetAlert">
    <div class="sweetAlert-header">
      <div class="sweetAlert-header-icon">
        <i class="fa-regular fa-circle-check fa-lg" style="color: #323232"></i>
      </div>
      <div class="sweetAlert-header_info">
        <span>اطلاعات شما با موفقیت ثبت شد</span>
      </div>
    </div>
    <div class="sweetAlert-btn">
      <router-link to="users" class="sweetAlert-btn_button">
        <span>مشاهده اطلاعات</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.sweetAlert {
  margin: 105px auto;
  width: 370px;
  height: 250px;
}
.sweetAlert-header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sweetAlert-header-icon {
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
 
}
.sweetAlert-header_info {
  width: 190px;
  height: 20px;
  font-size: 14px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: center;

}
.sweetAlert-btn {
  width: 341px;
  height: 48px;
  border-radius: 4px;
  border: 1.5px solid var(--primary-color);
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sweetAlert-btn_button {
  width: 150px;
  height: 25px;
  font-size: 16px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: center;
  color: var(--primary-color);
  text-decoration: none;
}
</style>