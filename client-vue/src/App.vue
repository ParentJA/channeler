<template>
<b-container id='app' class='pt-3'>
  <b-row>
    <b-col>
      <task-form @clear-tasks='clearTasks' @create-task='createTask' />
    </b-col>
    <b-col>
      <task-list v-bind:tasks='tasks' />
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import axios from 'axios'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
export default {
  name: 'App',
  components: { TaskForm, TaskList },
  data: function () {
    return {
      intervalId: 0,
      socket: undefined,
      tasks: []
    }
  },
  created: async function () {
    const response = await axios.get('/tasks/')
    this.tasks = response.data
    this.socket = new WebSocket('ws://localhost:8080/tasks/')
    this.socket.addEventListener('message', this.onMessage)
  },
  destroyed: function () {
    clearInterval(this.intervalId)
    if (this.socket) {
      this.socket.removeEventListener('message')
      this.socket.close()
    }
  },
  methods: {
    clearTasks: async function () {
      const response = await axios.post('/tasks/clear/')
      this.$toasted.error(response.data.detail)
      this.tasks = []
    },
    createTask: async function (duration, sync) {
      const response = await axios.post('/tasks/', { duration: parseInt(duration), sync })
      const task = response.data
      this.tasks.push(task)
      if (sync) {
        clearInterval(this.intervalId)
        this.intervalId = setInterval(async () => {
          this.$toasted.show('Are you done yet?')
          const response = await axios.get(`/tasks/${task.id}/`)
          this.tasks.pop()
          this.tasks.push(response.data)
          if (response.data.status !== 'PENDING') {
            clearInterval(this.intervalId)
            this.$toasted.success('I\'m done.')
          }
        }, 1000);
      } else {
        const group = `task-${task.id}`;
        this.socket.send(JSON.stringify({ group }));
      }
    },
    onMessage: function (event) {
      const message = JSON.parse(event.data)
      if ('task' in message) {
        this.tasks.pop()
        this.tasks.push(message.task)
        this.$toasted.success('I\'m done.'); 
      } else if ('detail' in message) {
        this.$toasted.show('Pending...');
      } else {
        console.log(message);
      }
    }
  }
}
</script>
