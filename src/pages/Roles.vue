<template>
  <q-pull-to-refresh @refresh="refresh">
    <q-page class="">
      <q-list bordered separator class="rounded-borders">
        <q-item clickable v-ripple v-for="(role, index) in roles" :key="role.id" @click="editRole(role)">
          <q-item-section>
            <q-item-label>{{role.name}}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon @click.stop.capture="deletePrompt(role)" name="delete" size="sm" color="negative" />
          </q-item-section>
        </q-item>
      </q-list>

      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn @click="createRole()" fab icon="add" color="primary" />
      </q-page-sticky>
    </q-page>
  </q-pull-to-refresh>
</template>

<script>

import apiParser from "src/api/parser";
import roleApi from "src/api/roles";

export default {
  name: 'Roles',
  data() {
    return {
      roles: null,
    }
  },
  created() {
    this.getRoles();
  },
  methods: {
    refresh(done) {
      this.roles = null;
      this.getRoles();
      done();
    },
    async getRoles() {
      const response = await apiParser.parseResponse(roleApi.getRoles());
      this.roles = response.data;
    },
    createRole() {
      this.$router.push('/create-role');
    },
    editRole(role) {
      this.$router.push({ path: '/edit-role', query: {
          role: role,
        }});
    },
    deletePrompt(role) {
      this.$q.dialog({
        title: 'Delete role',
        message: 'Would you like to delete the role ' + role.name +'?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteRole(role);
      })
    },
    async deleteRole(role) {
      await apiParser.parseResponse(roleApi.deleteRole(role.id));
      this.getRoles();
      this.$q.notify({
        color: 'green-5',
        textColor: 'white',
        icon: 'check',
        message: 'You successfully deleted the role ' + role.name + '!'
      })
    }
  }
}
</script>
