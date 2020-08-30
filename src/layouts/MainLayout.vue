<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="">

        <div class="absolute-left flex">
          <q-btn v-if="canGoBack()" size="md" icon="navigate_before" @click="goBack()" flat />
        </div>

        <q-toolbar-title class="absolute-center">
          {{ pageTitle() }}
        </q-toolbar-title>

        <div class="absolute-right flex">

        </div>

      </q-toolbar>
    </q-header>

    <q-footer elevated>
      <tab-menu :menus="menus" />
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>

import TabMenu from "components/TabMenu";

const menus = [
  {
    title: 'Home',
    caption: 'Home',
    icon: 'house',
    to: '/'
  },
  {
    title: 'Users',
    caption: 'Users listing',
    icon: 'group',
    to: '/users'
  },
  {
    title: 'Roles',
    caption: 'Roles listing',
    icon: 'label',
    to: '/roles'
  },
];

export default {
  name: 'MainLayout',
  components: {TabMenu},
  data () {
    return {
      menus: menus
    }
  },
  methods: {
    pageTitle() {
      return this.$route.meta.title.toUpperCase();
    },
    canGoBack() {
      return !this.menus.find(item => item.to === this.$route.path)
    },
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>
