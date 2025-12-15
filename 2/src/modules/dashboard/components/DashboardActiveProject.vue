<template lang="pug">
  .active-project
    .active-project-heading
      h1 {{ heading }}
      span(:class="type === 'ontrack' ? 'ontrack' : type === 'inprogress' ? 'inprogress' : 'review'") {{ type === 'ontrack' ? 'On Track' : type === 'inprogress' ? 'In Progress' : 'Review' }}
    span.active-project-description {{ description }}
    .active-project-progress
      span
        p Progress
        p 
          strong {{ procent }}%
      .project-progress
        .project-progress-bar(:class="type === 'ontrack' ? 'ontrack' : type === 'inprogress' ? 'inprogress' : 'review'")
    span.active-project-ending {{ timeToEnd }}
</template>

<script setup lang="ts">
import type { DashboardActiveProject } from '@/types'
const props = defineProps<{
  activeProject: DashboardActiveProject
}>()
const { type, description, heading, procent, timeToEnd } = props.activeProject
</script>

<style lang="scss" scoped>
.active-project {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  background: #ffffff;
}

.active-project-progress {
  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
}

.active-project-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    padding: 6px 8px;
    border-radius: 4px;
    font-weight: 400;
    font-style: Regular;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
    &.ontrack {
      color: #16a34a;
      background: #dcfce7;
    }
    &.inprogress {
      color: #4f46e5;
      background: #e0e7ff;
    }
    &.review {
      color: #ca8a04;
      background: #fef9c3;
    }
  }
  h1 {
    font-weight: 500;
    font-style: Medium;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0%;
  }
}

.active-project-description {
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #6b7280;
  margin: 18px 0;
}

.project-progress {
  background: #e5e7eb;
  width: 100%;
  height: 8px;
  overflow: hidden;
  border-radius: 9999px;
  margin-bottom: 16px;
  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
}

.project-progress-bar {
  border-radius: 9999px;
  &.review {
    width: 90%;
    height: 100%;
    background-color: #eab308;
    transition: width 0.3s ease;
  }
  &.inprogress {
    width: 75%;
    height: 100%;
    background-color: #4f46e5;
    transition: width 0.3s ease;
  }
  &.ontrack {
    width: 60%;
    height: 100%;
    background-color: #22c55e;
    transition: width 0.3s ease;
  }
}

.active-project-ending {
  width: 100%;
  text-align: left;
  color: #6b7280;
}
</style>
