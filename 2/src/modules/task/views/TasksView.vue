<template lang="pug">
  .tasks-view
    div.tasks-view-header
      h1 Tasks
      button(type="button" @click="handleCreateTask" class="tasks-view-header-button") Create Task
    RouterLink(v-for="task in tasks" :key="task.id" :to="`/tasks/${task.id}`" class="task-link")
      TasksComponent(:task="task")
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import TasksComponent from '../components/TasksComponent.vue'
import { RouterLink } from 'vue-router'
import { useTasksStore } from '@/stores/tasks.store'
import { useRouter } from 'vue-router'
const tasksStore = useTasksStore()
const tasks = tasksStore.tasks
const route = useRoute()
const router = useRouter()
console.log(route)
const handleCreateTask = () => {
  router.push('/tasks/create')
}
</script>

<style lang="scss" scoped>
.tasks-view {
  width: 100%;
  padding: 96px 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.tasks-view-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tasks-view-header-button {
  background: #4f46e5;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
}
.tasks-view-header-button:hover {
  background: #4740ce;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
}
.task-link {
  text-decoration: none;
  color: #000;
}
</style>
