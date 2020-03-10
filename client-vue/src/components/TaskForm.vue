<template>
<fragment>
  <h2>New Task</h2>
  <p class='lead'>Create a new long-running task.</p>
  <b-form inline novalidate v-on:submit.prevent='handleSubmit'>
    <label class='mr-2' for='duration'>Duration</label>
    <b-input
      class='mr-2'
      id='duration'
      name='duration'
      type='number'
      v-model='duration'
    />
    <b-form-checkbox
      class='mr-2'
      name='sync'
      type='checkbox'
      v-model='sync'
    >
      Sync
    </b-form-checkbox>
    <b-button type='submit' variant='primary'>Create</b-button>
  </b-form>
  <h2 class='mt-3'>Actions</h2>
  <b-button block variant='primary' @click='handleClear' type='button'>Clear Tasks</b-button>
</fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
export default {
  name: 'TaskForm',
  components: { Fragment },
  data: function () {
    return {
      duration: 5,
      sync: true
    }
  },
  methods: {
    handleClear: function () {
      this.$emit('clear-tasks')
    },
    handleSubmit: function () {
      this.$emit('create-task', this.duration, this.sync)
    }
  }
}
</script>
