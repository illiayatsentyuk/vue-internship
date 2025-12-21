<template lang="pug">
    .tasks-component(:class="`tasks-component--importance-${importance}`" @click="$router.push(`/tasks/${id}`)")
      .tasks-component__heading
        h1.tasks-component__heading-title {{ heading }}
        span.tasks-component__heading-badge(:class="`tasks-component__heading-badge--importance-${importance}`") {{ importanceLabel }}
      .tasks-component__progress
        .tasks-component__progress-bar(:class="`tasks-component__progress-bar--importance-${importance}`" :style="{ width: isDone ? '100%' : procent ? `${procent}%` : '0%' }")
      .tasks-component__time
        img.tasks-component__time-icon(src="@/assets/dashboard/timer-icon.svg" alt="timer-icon")
        p.tasks-component__time-text {{ timeToEnd }}
</template>
<script setup lang="ts">
import { computed } from 'vue'
import type { TaskComponent as TaskComponentType } from '@/types'
const props = defineProps<{
  task: TaskComponentType
}>()
const { importance, heading, timeToEnd, isDone, procent, id } = props.task
const items = ['Low', 'Medium', 'High', 'Critical']
console.log(props.task)
const importanceLabel = computed(() => {
  switch (importance) {
    case 'low':
      return 'Low'
    case 'medium':
      return 'Medium'
    case 'high':
      return 'High'
    case 'critical':
      return 'Critical'
    default:
      return 'Unspecified'
  }
})
</script>

<style lang="scss" scoped>
.tasks-component {
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  padding: 16px 20px;
  width: 90%;
  box-shadow: 0px 1px 2px 0px #0000000d;
  cursor: pointer;
}

.tasks-component--importance-critical {
  border-left: 4px solid #ef4444;
}

.tasks-component--importance-high {
  border-left: 4px solid #f97316;
}

.tasks-component--importance-medium {
  border-left: 4px solid #eab308;
}

.tasks-component--importance-low {
  border-left: 4px solid #3b82f6;
}

.tasks-component__heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tasks-component__heading-title {
  font-weight: 500;
  font-style: Medium;
  font-size: 16px;
  line-height: 16px;
  margin: 0;
}

.tasks-component__heading-badge {
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  line-height: 100%;
  padding: 6px 8px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
}

.tasks-component__heading-badge--importance-critical {
  color: #b91c1c;
  background: #fee2e2;
}

.tasks-component__heading-badge--importance-high {
  color: #c2410c;
  background: #ffedd5;
}

.tasks-component__heading-badge--importance-medium {
  color: #a16207;
  background: #fef9c3;
}

.tasks-component__heading-badge--importance-low {
  color: #1d4ed8;
  background: #eff6ff;
}

.tasks-component__progress {
  margin: 12px 0;
  height: 8px;
  width: 100%;
  border-radius: 9999px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
}

.tasks-component__progress-bar {
  height: 100%;
  width: 0%;
  transition: width 0.3s ease;
  border-radius: 9999px;
}

.tasks-component__progress-bar--importance-critical {
  background-color: #ef4444;
}

.tasks-component__progress-bar--importance-high {
  background-color: #f97316;
}

.tasks-component__progress-bar--importance-medium {
  background-color: #eab308;
}

.tasks-component__progress-bar--importance-low {
  background-color: #3b82f6;
}

.tasks-component__time {
  display: flex;
  align-items: center;
  color: #6b7280;
  gap: 4px;
}

.tasks-component__time-icon {
  // Icon styles
}

.tasks-component__time-text {
  margin: 0;
}
</style>
