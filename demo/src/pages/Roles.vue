<template>
  <q-page class="">
    <q-list bordered separator class="rounded-borders">
      <q-item clickable v-ripple v-for="(role, index) in roles" :key="role.id">
        <q-item-section>
          <q-item-label>{{role.name}}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>

const data = [
  {
    id: 1,
    name: 'Junior Programmer',
  },
  {
    id: 2,
    name: 'Junior Programmer',
  },
  {
    id: 3,
    name: 'Project Manager',
  },
  {
    id: 4,
    name: 'Graphic Designer',
  },
  {
    id: 5,
    name: 'Senior Programmer',
  },
  {
    id: 6,
    name: 'Sharon',
  }
]

export default {
  name: 'Roles',
  data() {
    return {
      roles: data,
    }
  }
}
</script>
