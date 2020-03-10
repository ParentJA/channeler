<template>
<tr :class='status'>
  <th scope='row'>{{ task.id }}</th>
  <td>{{ task.status }}</td>
  <td>{{ task.created | moment('MMMM Do YYYY, h:mm:ss a') }}</td>
  <td>{{ task.updated | moment('MMMM Do YYYY, h:mm:ss a') }}</td>
</tr>
</template>

<script>
export default {
  name: 'TaskListRow',
  props: {
    task: Object
  },
  computed: {
    status: function () {
      return {
        SUCCESS: 'table-success',
        FAILURE: 'table-error',
        PENDING: 'table-info'
      }[this.task.status]
    }
  }
}
</script>