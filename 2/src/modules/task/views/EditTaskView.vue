<template lang="pug">
    .create-task
        h1 Edit Task
        EditTaskForm(:task="task" @editTask="handleEditTask")
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EditTaskForm from '../components/EditTaskForm.vue'
import { useTasksStore } from '@/stores/tasks.store'
import type { TaskComponent } from '@/types'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const tasksStore = useTasksStore()
const task = tasksStore.getTaskById(Number(route.params.id))
if (!task) {
    router.push('/tasks')
}
const handleEditTask = (task: TaskComponent) => {
    console.log(task)
    tasksStore.editTask(task, Number(route.params.id))
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