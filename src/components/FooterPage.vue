<template>
  <footer>
    <div class="footer__container">
      <div class="footer__main">
        <slot></slot>
      
      </div>
    </div>
  </footer>
</template>


<script>
export default {

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


/*  Responsive  Mobile */
@media (max-width: 375px) {
  .footer__container {
    max-width: 375px;
    height: 80px;
  }
  .footer__main {
    width: 343px;
    height: 48px;
    border-radius: 4px;
  }
  .footer__main-button {
    text-decoration: none;
    color: rgba(255, 255, 255, 1);
    width: 150px;
    height: 25px;
  }
}
</style>