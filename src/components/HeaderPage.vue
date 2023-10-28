<template>
  <header>
    <nav class="navbar navbar-expand">
      <div class="container-fluid">
        <div
          class="collapse navbar-collapse d-flex justify-content-between align-items-center"
          id="navbarNav"
        >
          <img class="img" src="@/assets/logo.png" />
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link-right"
                >ثبت آدرس</router-link
              >
            </li>
            <li class="nav-item nav-left">
              <router-link to="/users" class="nav-link-left">
                مشاهده آدرس ها</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  max-width: 1440px;
  height: 74px;
  box-shadow: 0px 0.5px 2px 0px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 1);
}
.img {
  width: 70px;
  height: 39px;
  margin: 0 60px;
}
.navbar-nav {
  margin: 0 60px;
}
.nav-item {
  width: 71px;
  height: 22px;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 1px;
  text-align: left;
}
.nav-left {
  width: 133px;
  font-weight: 700;
  text-align: center;
}
.nav-link-right{
  color: var(--text-color);
  text-decoration: none;
}
.nav-link-left{
  color: var(--primary-color);
  text-decoration: none;
}
</style>