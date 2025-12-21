<template lang="pug">
  .task-view
    TaskComponent(:task="task" @addComment="handleAddComment")
</template>

<script setup lang="ts">
import { computed, ref, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTasksStore } from '@/stores/tasks'
import TaskComponent from '@/components/Tasks/TaskComponent.vue'
const tasksStore = useTasksStore()
const route = useRoute()
const router = useRouter()
const task = computed(() => tasksStore.getTaskById(Number(route.params.id)))
if (!task.value) {
  router.push('/tasks')
}

const isAddingComment = ref(false)
const handleAddComment = async (comment: string, id: number) => {
  if (isAddingComment.value) return
  isAddingComment.value = true
  tasksStore.addCommentToTask(id, comment)
  await nextTick()
  isAddingComment.value = false
}
</script>

<style lang="scss" scoped>
.task-view {
  width: 100%;
  height: 100%;
  padding: 32px 96px;
  background: #f9fafb;
}
</style>
