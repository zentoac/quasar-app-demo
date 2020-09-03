<template>
  <q-page class="q-pa-md">

    <div class="text-center q-mb-xl">
      <img
        width="150"
        alt="Quasar logo"
        src="~assets/quasar-logo-full.svg"
      />
    </div>

    <q-form
      class="q-gutter-md"
    >
      <q-input
        filled
        type="email"
        v-model="auth.email"
        label="Email"
        hint="Enter your email"
        error-message="Insert a valid email"
        :rules="[_required, _email]"
        ref="email"
      />

      <q-input
        filled
        type="password"
        v-model="auth.password"
        label="Password"
        hint="Enter your password"
        error-message="Insert a valid password"
        :rules="[_required]"
        ref="password"
      />

      <div>
        <q-btn @click="onSubmit" label="Login" type="button" color="primary" class="full-width"/>
      </div>
    </q-form>
  </q-page>
</template>

<script>

import {_required, _email} from '../validations';
import authApi from '../api/auth';
import apiParser from '../api/parser';

export default {
  name: 'Login',
  data() {
    return {
      auth: {
        email: null,
        password: null,
      },
    }
  },
  methods: {
    _required,
    _email,

    async onSubmit() {

      this.$refs.email.validate();
      this.$refs.password.validate();
      if(this.$refs.email.hasError || this.$refs.password.hasError) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'error',
          message: 'Form not valid, please check the errors!'
        });
        return;
      }

      const response = await apiParser.parseResponse(authApi.login(this.auth));
      if(response === 'error') {
        this.$q.notify({
          color: 'orange-6',
          textColor: 'white',
          icon: 'warning',
          message: 'The login is not correct!'
        })
      }
      else {
        console.log('You are logged in!')
      }
    }
  }
}
</script>
