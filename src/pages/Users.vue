<template>
  <q-pull-to-refresh @refresh="refresh">
    <q-page class="">
      <q-list bordered separator class="rounded-borders">
        <q-item clickable v-ripple v-for="(user, index) in users" :key="user.id" @click="editUser(user)" >
          <q-item-section avatar>
            <q-img v-if="user.icon" :style="{width:'35px',height:'35px'}" :src="user.icon" />
            <q-icon v-if="!user.icon" name="person" size="lg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{user.name}}</q-item-label>
            <q-item-label caption>{{user.role}}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon @click.stop.capture="deletePrompt(user)" name="delete" size="sm" color="negative" />
          </q-item-section>
        </q-item>
      </q-list>

      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn @click="createUser()" fab icon="add" color="primary" />
      </q-page-sticky>
    </q-page>
  </q-pull-to-refresh>
</template>

<script>

import userApi from '../api/users';
import apiParser from '../api/parser';

export default {
  name: 'Users',
  data() {
    return {
      users: null,
    }
  },
  created() {
    this.getUsers();
  },
  methods: {
    refresh(done) {
      this.users = null;
      this.getUsers();
      done();
    },
    async getUsers() {
      this.users = await apiParser.parseResponse(userApi.getUsers());
    },
    createUser() {
      this.$router.push('/create-user');
    },
    editUser(user) {
      this.$router.push({ path: '/edit-user', query: {
        user: user,
      }});
    },
    deletePrompt(user) {
      this.$q.dialog({
        title: 'Delete user',
        message: 'Would you like to delete the user ' + user.name +'?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteUser(user);
      })
    },
    async deleteUser(user) {
      await apiParser.parseResponse(userApi.deleteUser(user.id));
      this.getUsers();
      this.$q.notify({
        color: 'green-5',
        textColor: 'white',
        icon: 'check',
        message: 'You successfully deleted the user ' + user.name + '!'
      })
    }
  }
}
</script>
