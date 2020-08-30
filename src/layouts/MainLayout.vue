<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title class="text-center">
          {{ pageTitle() }}
        </q-toolbar-title>

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
    }
  }
}
</script>
