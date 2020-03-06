<template>
<fragment>
  <h2>Tasks</h2>
  <b-table-simple>
    <b-thead>
      <b-tr>
        <b-th scope='col'>ID</b-th>
        <b-th scope='col'>Status</b-th>
        <b-th scope='col'>Created</b-th>
        <b-th scope='col'>Updated</b-th>
      </b-tr>
    </b-thead>
    <b-tbody v-if='tasks.length > 0'>
      <task-list-row v-for='task in tasks' :key='task.id' v-bind:task='task' />
    </b-tbody>
    <b-tbody v-if='tasks.length === 0'>
      <b-tr>
        <b-td class='text-center' colspan='4'>No tasks.</b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>
</fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import TaskListRow from './TaskListRow'
export default {
  name: 'TaskList',
  components: { Fragment, TaskListRow },
  props: {
    tasks: Array
  }
}
</script>
