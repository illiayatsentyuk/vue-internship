<template lang="pug">
    .create-task-view
        h1.create-task-view__title Create Task
        CreateTaskForm(@createTask="handleCreateTask")
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CreateTaskForm from '@/components/Tasks/CreateTaskForm.vue'
import { useTasksStore } from '@/stores/tasks'
import type { TaskComponent } from '@/types'
import { useRouter } from 'vue-router'
const router = useRouter()
const tasksStore = useTasksStore()
const handleCreateTask = (task: TaskComponent) => {
    tasksStore.addTask(task)
    router.push('/tasks')
}
</script>

<style lang="scss" scoped>
.create-task-view {
  width: 100%;
  height: 100vh;
  padding: 32px 96px;
  background: #F9FAFB;
}

.create-task-view__title {
  margin: 0 0 24px 0;
}
</style>