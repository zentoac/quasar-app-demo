<template>
  <q-page class="">
    <q-list bordered separator class="rounded-borders">
      <q-item clickable v-ripple v-for="(user, index) in users" :key="user.id" >
        <q-item-section avatar>
          <q-img height="35" width="35" :src="getIcon(user.icon)" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{user.name}}</q-item-label>
          <q-item-label caption>{{user.role}}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>

const data = [
  {
    id: 1,
    name: 'Albert',
    role: 'Junior Programmer',
    icon: 'albert.png'
  },
  {
    id: 2,
    name: 'Brian',
    role: 'Junior Programmer',
    icon: 'brian.png'
  },
  {
    id: 3,
    name: 'John',
    role: 'Project Manager',
    icon: 'john.png'
  },
  {
    id: 4,
    name: 'Kate',
    role: 'Graphic Designer',
    icon: 'kate.png'
  },
  {
    id: 5,
    name: 'Mark',
    role: 'Senior Programmer',
    icon: 'mark.png'
  },
  {
    id: 6,
    name: 'Sharon',
    role: 'Account',
    icon: 'sharon.png'
  }
]

export default {
  name: 'Users',
  data() {
    return {
      users: data,
    }
  },
  methods: {
    getIcon(icon) {
      return require('../assets/' + icon);
    }
  }
}
</script>
