<template lang="pug">
    .create-task
        h1 Create Task
        CreateTaskForm(@createTask="handleCreateTask")
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CreateTaskForm from '../components/CreateTaskForm.vue'
import { useTasksStore } from '@/stores/tasks.store'
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
.create-task {
    width: 100%;
    height: 100vh;
    padding: 32px 96px;
    background: #F9FAFB;
}
</style>