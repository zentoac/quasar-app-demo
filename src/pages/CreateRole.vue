<template>
  <q-page class="q-pa-md">
    <q-form
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="role.name"
        label="Name"
        hint="Give a name to the new role"
        error-message="Insert a valid name"
        :rules="[_required, _maxLength50]"
        ref="name"
      />

      <q-input
        filled
        type="textarea"
        v-model="role.description"
        label="Description"
        hint="Give a description to the new role"
        error-message="Insert a valid description"
        :rules="[_maxLength250]"
        ref="description"
      />

      <div>
        <q-btn @click="onSubmit" label="Save" type="button" color="primary" class="full-width"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="full-width" />
      </div>
    </q-form>
  </q-page>
</template>

<script>

import {_required, _maxLength50, _maxLength250} from '../validations';
import apiParser from "src/api/parser";
import roleApi from "src/api/roles";

export default {
  name: 'CreateRole',
  data() {
    return {
      role: {
        name: null,
        description: null,
      },
    }
  },
  methods: {
    _required,
    _maxLength50,
    _maxLength250,

    async onSubmit() {

      this.$refs.name.validate();
      this.$refs.description.validate();
      if(this.$refs.name.hasError || this.$refs.description.hasError) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'error',
          message: 'Form not valid, please check the errors!'
        });
        return;
      }

      const response = await apiParser.parseResponse(roleApi.createRole(this.role));
      if(response === 'existing') {
        this.$q.notify({
          color: 'orange-6',
          textColor: 'white',
          icon: 'warning',
          message: 'The name is already in use!'
        })
      }
      else {
        this.$q.notify({
          color: 'green-5',
          textColor: 'white',
          icon: 'check',
          message: 'You successfully created the new role ' + this.role.name + '!'
        })
      }
    },

    onReset () {
      this.role.name = null
      this.role.description = null
    }
  }
}
</script>
