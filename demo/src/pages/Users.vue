<template>
  <q-page class="">
    <q-list bordered separator class="rounded-borders">
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <img height="35" width="35" src="~assets/albert.png" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Albert</q-item-label>
          <q-item-label caption>Junior Programmer</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <img height="35" width="35" src="~assets/brian.png" >
        </q-item-section>
        <q-item-section>
          <q-item-label>Brian</q-item-label>
          <q-item-label caption>Junior Programmer</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <img height="35" width="35" src="~assets/john.png" >
        </q-item-section>
        <q-item-section>
          <q-item-label>John</q-item-label>
          <q-item-label caption>Project Manager</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <img height="35" width="35" src="~assets/kate.png" >
        </q-item-section>
        <q-item-section>
          <q-item-label>Kate</q-item-label>
          <q-item-label caption>Graphic Designer</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <img height="35" width="35" src="~assets/mark.png" >
        </q-item-section>
        <q-item-section>
          <q-item-label>Mark</q-item-label>
          <q-item-label caption>Senior Programmer</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <img height="35" width="35" src="~assets/sharon.png" >
        </q-item-section>
        <q-item-section>
          <q-item-label>Sharon</q-item-label>
          <q-item-label caption>Account</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'Users'
}
</script>
