<template>
  <q-tabs stretch dense inline-label>
    <q-route-tab v-if="menu.class !== 'main absolute-center'" v-for="(menu, index) in menus" :key="index"
      :icon="menu.icon"
      :to="menu.to"
      exact
    />
    <span v-if="menu.class === 'main absolute-center'" v-for="(menu, index) in menus" :key="index" class="main-border absolute-center">
      <q-route-tab
        :icon="menu.icon"
        :to="menu.to"
        :class="menu.class"
        exact
      />
    </span>
  </q-tabs>
</template>

<script>
export default {
  name: 'TabMenu',
  data() {
    return {

    }
  },
  props: [
    'menus'
  ]
}
</script>

<style scoped>
  .main {
    z-index: 1;
    /*position: fixed;*/
    /*align-items: center;*/
    /*justify-content: center;*/
    background-color: #00b0ff;
    border-radius: 30px;
    top: 50%;
    width: 60px;
    height: 60px;
    opacity: 1 !important;
  }
  .main-border {
    z-index: 1;
    background-color: #fff;
    border-radius: 35px;
    top: 35%;
    width: 70px;
    height: 70px;
    opacity: 1 !important;
  }
  .main >>> .q-tab__icon {
    color: #fff;
    font-size: 34px !important;
  }
</style>
