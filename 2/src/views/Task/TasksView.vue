<template lang="pug">
  .tasks-view
    div.tasks-view__header
      h1.tasks-view__header-title Tasks
      button.tasks-view__header-button(type="button" @click="handleCreateTask") Create Task
    RouterLink.tasks-view__link(v-for="task in tasks" :key="task.id" :to="`/tasks/${task.id}`")
      TasksComponent(:task="task")
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import TasksComponent from '@/components/Tasks/TasksComponent.vue'
import { RouterLink } from 'vue-router'
import { useTasksStore } from '@/stores/tasks'
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
  min-height: 100vh;
  padding: 32px 96px;
  background: #f9fafb;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.tasks-view__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.tasks-view__header-title {
  font-size: 28px;
  font-weight: 600;
  color: #111827;
  letter-spacing: -0.02em;
  margin: 0;
}

.tasks-view__header-button {
  padding: 9px 18px;
  border-radius: 9999px;
  border: none;
  background: linear-gradient(90deg, #4f46e5, #6366f1 70%);
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  box-shadow: 0 4px 8px rgba(99, 102, 241, 0.08);
  transition:
    transform 0.09s cubic-bezier(.53,.02,.63,1.52),
    box-shadow 0.13s cubic-bezier(.25,.45,.3,1.45),
    opacity 0.16s;

  &:hover {
    transform: translateY(-1px) scale(1.03);
    box-shadow: 0 12px 30px rgba(79, 70, 229, 0.22);
    opacity: 0.97;
  }

  &:active {
    transform: translateY(0) scale(0.98);
    box-shadow: 0 2px 8px rgba(79, 70, 229, 0.18);
  }
}

.tasks-view__link {
  text-decoration: none;
  color: #000;
}
</style>
