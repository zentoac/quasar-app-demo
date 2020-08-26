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
      />

      <q-input
        filled
        type="textarea"
        v-model="role.description"
        label="Description"
        hint="Give a description to new role"
      />

      <div>
        <q-btn label="Save" type="submit" color="primary" class="full-width"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="full-width" />
      </div>
    </q-form>
  </q-page>
</template>

<script>

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

    onSubmit () {
      this.$q.notify({
        color: 'green-5',
        textColor: 'white',
        icon: 'check',
        message: 'You successfully created the new role ' + this.role.name + '!'
      })
    },

    onReset () {
      this.role.name = null
      this.role.description = null
    }
  }
}
</script>
