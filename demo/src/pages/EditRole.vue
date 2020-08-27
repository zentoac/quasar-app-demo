<template>
  <q-page class="q-pa-md">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="role.name"
        label="Name"
        hint="Give a name to new role"
        error-message="Insert a valid name"
        :rules="[_required, _maxLength20]"
      />

      <q-input
        filled
        type="textarea"
        v-model="role.description"
        label="Description"
        hint="Give a description to new role"
        error-message="Insert a valid description"
        :rules="[_maxLength100]"
      />

      <div>
        <q-btn label="Save" type="submit" color="primary" class="full-width"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="full-width" />
      </div>
    </q-form>
  </q-page>
</template>

<script>

import {_required, _maxLength20, _maxLength100} from '../validations';

export default {
  name: 'EditRole',
  data() {
    return {
      role: {
        name: null,
        description: null,
      },
    }
  },
  created() {
    this.role = this.$route.query.role;
  },
  methods: {
    _required,
    _maxLength20,
    _maxLength100,
    onSubmit () {
      this.$q.notify({
        color: 'green-5',
        textColor: 'white',
        icon: 'check',
        message: 'You successfully edited the role ' + this.role.name + '!'
      })
    },

    onReset () {
      this.role.name = null
      this.role.description = null
    }
  },
  computed: {
    errors() {
      return {
        name: this.role.name && this.role.name.length > 0 && this.role.name.length < 50,
        description: !this.role.description || (this.role.description && this.role.description.length < 100),
      }
    }
  }
}
</script>
