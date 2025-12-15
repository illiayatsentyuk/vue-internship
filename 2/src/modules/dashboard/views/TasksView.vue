<template lang="pug">
  .tasks-view
    RouterLink(v-for="task in tasks" :key="task.id" :to="`/tasks/${task.id}`" class="task-link")
      TasksComponent(:task="task")
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import TasksComponent from '../../dashboard/components/TasksComponent.vue'
import { RouterLink } from 'vue-router'
import { useTasksStore } from '@/stores/tasks.store'
const tasksStore = useTasksStore()
const tasks = tasksStore.tasks
const route = useRoute()
console.log(route)
</script>

<style lang="scss" scoped>
.tasks-view {
  width: 100%;
  padding: 96px 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.task-link {
  text-decoration: none;
  color: #000;
}
</style>
