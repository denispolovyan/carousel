<template>
  <div class="header-navbar">
    <div class="header-navbar__body">
      <div class="header-navbar__logo">
        <img
          src="https://i0.wp.com/www.primefaces.org/wp-content/uploads/2019/08/feature-vuejs.png?ssl=1"
          alt="vue logo"
        />
      </div>
      <div class="header-navbar__switcher">
        <div class="custom-control custom-switch">
          <input
            v-model="blackTheme"
            type="checkbox"
            class="custom-control-input"
            id="customSwitches"
          />
          <label class="custom-control-label" for="customSwitches"
            >{{blackTheme ? "Black" : "White"}} theme</label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      blackTheme: false,
    };
  },
};
</script>

<style scoped>
.header-navbar {
  padding: 0px 40px;
  border-bottom: 1px solid grey;
}
.header-navbar__body {
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-navbar__logo img {
  height: 80px;
  width: 80px;
}
</style>
