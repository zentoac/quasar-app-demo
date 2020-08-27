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
      this.$q.loading.show();
      try {
        const response = await this.$axios.get('/roles');
        if(response.statusText === 'OK') {
          this.$q.loading.hide();
          this.roles = response.data;
        }
      }
      catch (error) {
        this.$q.loading.hide();
        console.log(error);
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'error',
          message: 'There was an error processing your request!'
        })
      }
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

      try {
        const response = await this.$axios.delete(`roles/${role.id}`);
        console.log(response);
        if(response.statusText === 'OK') {
          this.getRoles();
          this.$q.notify({
            color: 'green-5',
            textColor: 'white',
            icon: 'check',
            message: 'You successfully deleted the role ' + role.name + '!'
          })
        }
      }
      catch (error) {
        console.log(error);
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'error',
          message: 'There was an error processing your request!'
        })
      }
    }
  }
}
</script>
