<template>
  <q-tabs dense inline-label>
    <q-route-tab
      v-for="(menu, index) in menus"
      :key="index"
      :icon="menu.icon"
      :to="menu.to"
      :label="menu.title"
      exact
    />
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
