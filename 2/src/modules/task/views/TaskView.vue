<template lang="pug">
  .task-view
    TaskComponent(:task="task")
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useTasksStore } from '@/stores/tasks.store'
import TaskComponent from '../components/TaskComponent.vue'
const tasksStore = useTasksStore()
const route = useRoute()
const router = useRouter()
const task = tasksStore.getTaskById(Number(route.params.id))
if (!task) {
  router.push('/tasks')
}
</script>

<style lang="scss" scoped>
.task-view {
  width: 100%;
  height: 100vh;
  padding: 32px 96px;
  background: #F9FAFB;
}
</style>
