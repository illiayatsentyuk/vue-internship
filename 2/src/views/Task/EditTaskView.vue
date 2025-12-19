<template lang="pug">
    .edit-task-view
        h1.edit-task-view__title Edit Task
        EditTaskForm(:task="task" @editTask="handleEditTask")
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EditTaskForm from '@/components/Tasks/EditTaskForm.vue'
import { useTasksStore } from '@/stores/tasks'
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
.edit-task-view {
  width: 100%;
  height: 100vh;
  padding: 32px 96px;
  background: #F9FAFB;
}

.edit-task-view__title {
  margin: 0 0 24px 0;
}
</style>