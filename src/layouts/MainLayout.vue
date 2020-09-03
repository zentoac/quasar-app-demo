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

    <div v-if="!offline">
      <q-page-container>
        <router-view  />
      </q-page-container>

      <q-footer v-if="!offline && isLoggedIn()" elevated>
        <tab-menu :menus="menus" />
      </q-footer>
    </div>

    <div v-if="offline" class="flex fullscreen justify-center content-center bg-red-2">
      <div class="text-h3 q-pa-md">You are offline!</div>
      <div class="text-h5">Check your connection.</div>
    </div>

  </q-layout>
</template>

<script>

import TabMenu from "components/TabMenu";
import userStore from '../store/user';

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
      offline: false,
      menus: menus
    }
  },
  created() {
    this.checkNetwork()
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
    },
    checkNetwork() {
      // check if online
      window.addEventListener('offline', () => {
        this.offline = true;
      });
      // check if offline
      window.addEventListener('online', () => {
        this.offline = false;
      });
    },
    isLoggedIn() {
      return userStore.isLoggedIn();
    }
  }
}
</script>
