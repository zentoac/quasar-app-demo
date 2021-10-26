<template>
  <q-page class="q-pa-md">
    <q-form
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="user.name"
        label="Name"
        hint="Give a name to the user"
        error-message="Insert a valid name"
        :rules="[_required, _maxLength50]"
        ref="name"
      />

      <q-input
        filled
        type="email"
        v-model="user.email"
        label="Email"
        hint="Give an email to the user"
        error-message="Insert a valid email"
        :rules="[_email, _required, _maxLength50]"
        ref="email"
      />

      <q-select
        filled
        type="textarea"
        v-model="user.role"
        label="Role"
        hint="Give a role to the user"
        error-message="Select a role"
        :rules="[_required]"
        ref="role"
        :options="roles"
        map-options
        emit-value
      />

      <div>
        <q-file
          filled
          v-model="user.icon"
          label="Icon"
          hint="Upload an icon for the user"
          accept=".jpg, image/*"
          max-file-size="1000000"
          error-message="Select an image"
          :rules="[]"
          ref="icon"
        >
          <template v-slot:append>
            <q-avatar>
              <img :src="uploadedIcon">
            </q-avatar>
          </template>
        </q-file>
      </div>

      <div>
        <q-btn @click="onSubmit" label="Save" type="button" color="primary" class="full-width"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="full-width" />
      </div>
    </q-form>
  </q-page>
</template>

<script>

  import {_email, _required, _maxLength50} from '../validations';
  import apiParser from "src/api/parser";
  import userApi from "src/api/users";
  import roleApi from "src/api/roles";

export default {
  name: 'EditUser',
  data() {
    return {
      uploadedIcon: null,
      user: {
        name: null,
        email: null,
        role: null,
      },
      roles: null,
      rolesLoading: false
    }
  },
  created() {
    this.uploadedIcon = this.$route.query.user.icon;
    this.user = {
      ...this.$route.query.user,
      icon: null
    };
    this.getRoles();
  },
  methods: {
    _email,
    _required,
    _maxLength50,

    async getRoles() {

      try {
        this.rolesLoading = true;
        const response = await apiParser.parseResponse(roleApi.getRoles());
        this.roles = response.data.map(item => {
          return {
            label: item.name,
            value: item.id,
          }
        });
        this.user.role = this.roles.find(item => item.label === this.user.role).value;
        this.rolesLoading = false;
      }
      catch (error) {
        this.rolesLoading = false;
        console.log(error);
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'error',
          message: 'There was an error processing your request!'
        })
      }
    },
    async onSubmit() {

      this.$refs.name.validate();
      this.$refs.email.validate();
      this.$refs.role.validate();
      if(this.$refs.name.hasError || this.$refs.email.hasError || this.$refs.role.hasError) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'error',
          message: 'Form not valid, please check the errors!'
        });
        return;
      }

      let base64 = null;
      if(this.user.icon) {
        base64 = await this.getBase64(this.user.icon);
      }

      const response = await apiParser.parseResponse(userApi.updateUser(Object.assign({}, this.user, {icon: base64})));
      if(response === 'existing') {
        this.$q.notify({
          color: 'orange-6',
          textColor: 'white',
          icon: 'warning',
          message: 'The email is already in use!'
        })
      }
      else {
        this.uploadedIcon = response.icon;
        this.$q.loading.hide();
        this.$q.notify({
          color: 'green-5',
          textColor: 'white',
          icon: 'check',
          message: 'You successfully updated the user ' + this.user.name + '!'
        })
      }
    },

    onReset () {
      this.user.name = null;
      this.user.email = null;
      this.user.role = null;
    },

    getBase64(file) {
      return new Promise(function(resolve, reject) {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      })
    }
  }
}
</script>
