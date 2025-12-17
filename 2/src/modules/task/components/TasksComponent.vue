<template lang="pug">
    .recent-task(:class="`importance-${importance}`")
      .recent-task-heading
        h1 {{ heading }}
        span(:class="`importance-${importance}`") {{ importanceLabel }}
      .recent-task-progress
        .recent-task-progress-bar(:class="`importance-${importance}`")
      .recent-task-time
        img(src="@/assets/dashboard/timer-icon.svg" alt="timer-icon")
        p {{ timeToEnd }}
</template>
<script setup lang="ts">
import { computed } from 'vue'
import type { TaskComponent as TaskComponentType } from '@/types'
const props = defineProps<{
  task: TaskComponentType
}>()
const { importance, heading, timeToEnd } = props.task

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
.recent-task-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-weight: 500;
    font-style: Medium;
    font-size: 16px;
    line-height: 16px;
  }
  span {
    font-weight: 400;
    font-style: Regular;
    font-size: 14px;
    line-height: 100%;
    padding: 6px 8px;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    &.importance-critical {
      color: #b91c1c;
      background: #fee2e2;
    }
    &.importance-high {
      color: #c2410c;
      background: #ffedd5;
    }
    &.importance-medium {
      color: #a16207;
      background: #fef9c3;
    }
    &.importance-low {
      color: #1d4ed8;
      background: #eff6ff;
    }
  }
}

.recent-task {
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  padding: 16px 20px;
  width: 90%;
  box-shadow: 0px 1px 2px 0px #0000000d;
  &.importance-critical {
    border-left: 4px solid #ef4444;
  }
  &.importance-high {
    border-left: 4px solid #f97316;
  }
  &.importance-medium {
    border-left: 4px solid #eab308;
  }
  &.importance-low {
    border-left: 4px solid #3b82f6;
  }
}

.recent-task-time {
  display: flex;
  align-items: center;
  color: #6b7280;
  gap: 4px;
}

.recent-task-progress {
  margin: 12px 0;
  height: 8px;
  width: 100%;
  border-radius: 9999px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
}

.recent-task-progress-bar {
  height: 100%;
  width: 67%;
  transition: width 0.3s ease;
  border-radius: 9999px;
  &.importance-critical {
    background-color: #ef4444;
  }
  &.importance-high {
    background-color: #f97316;
  }
  &.importance-medium {
    background-color: #eab308;
  }
  &.importance-low {
    background-color: #3b82f6;
  }
}
</style>
