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
          <q-btn v-if="isLoggedIn()" size="md" icon="logout" @click="logoutPrompt()" flat />
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
import apiParser from "src/api/parser";
import authApi from "src/api/auth";

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
      return this.isLoggedIn() && !this.menus.find(item => item.to === this.$route.path)
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
    },
    logoutPrompt() {
      this.$q.dialog({
        title: 'Logout',
        message: 'Would you like to logout?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.logout();
      })

    },
    async logout() {
      await apiParser.parseResponse(authApi.logout());
      userStore.remove();
      this.$router.push({ path: '/login'});
    }
  }
}
</script>
