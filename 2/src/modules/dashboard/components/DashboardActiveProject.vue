<template>
  <div class="active-project">
    <div class="active-project-heading">
      <h1>{{ heading }}</h1>
      <span :class="type === 'ontrack' ? 'ontrack' : type === 'inprogress' ? 'inprogress' : 'review'">{{ type === 'ontrack'
        ? 'On Track' : type === 'inprogress' ? 'In Progress' : 'Review' }}</span>
    </div>
    <span class="active-project-description">{{ description }}</span>
    <div class="active-project-progress">
      <span>
        <p>Progress</p>
        <p><strong>{{ procent }}%</strong></p>
      </span>
      <div class="project-progress">
        <div class="project-progress-bar"
          :class="type === 'ontrack' ? 'ontrack' : type === 'inprogress' ? 'inprogress' : 'review'">
        </div>
      </div>
    </div>
    <span class="active-project-ending">{{ timeToEnd }}</span>
  </div>
</template>

<script setup lang="ts">
import type { DashboardActiveProject } from '@/types';
const props = defineProps<{
  activeProject: DashboardActiveProject;
}>()
const { type, description, heading, procent, timeToEnd } = props.activeProject;
</script>

<style scoped>
.active-project {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  background: #FFFFFF;
}

.active-project-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.active-project-heading>span {
  padding: 6px 8px;
  border-radius: 4px;
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;

}

.active-project-heading>h1 {
  font-weight: 500;
  font-style: Medium;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0%;

}

.active-project-heading>span.ontrack {
  color: #16A34A;
  background: #DCFCE7;
}

.active-project-heading>span.inprogress {
  color: #4F46E5;
  background: #E0E7FF;
}

.active-project-heading>span.review {
  color: #CA8A04;
  background: #FEF9C3;
}

.active-project-description {
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #6B7280;
  margin: 18px 0;
}

.active-project-progress>span {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.project-progress {
  background: #E5E7EB;
  width: 100%;
  height: 8px;
  overflow: hidden;
  border-radius: 9999px;
  margin-bottom: 16px;
}

.project-progress-bar {
  border-radius: 9999px;
}

.project-progress-bar.review {
  width: 90%;
  height: 100%;
  background-color: #EAB308;
  transition: width 0.3s ease;
}

.project-progress-bar.inprogress {
  width: 75%;
  height: 100%;
  background-color: #4F46E5;
  transition: width 0.3s ease;
}

.project-progress-bar.ontrack {
  width: 60%;
  height: 100%;
  background-color: #22C55E;
  transition: width 0.3s ease;
}

.active-project-ending {
  width: 100%;
  text-align: left;
  color: #6B7280;
}
</style>