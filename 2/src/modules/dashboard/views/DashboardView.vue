<template>
    <div class="tab-content active">
            <div class="dashboard-heading">
                <div class="dashboard-heading-text">
                    <h1>Dashboard</h1>
                    <p>Welcome back, John!</p>
                </div>
                <div class="dashboard-heading-controlls">
                    <DashboardHeadingControllsButtons v-for="button in DASHBOARD_HEADING_CONTROLLS_BUTTONS" :key="button.id" :button="button" />
                </div>
            </div>
            <DashboardSearchSection />
            <DashboardRecentTasks />
            <DashboardActiveProjects />
        </div>
</template>

<script setup lang="ts">
import DashboardHeadingControllsButtons from "../components/DashboardHeadingControllsButtons.vue";
import DashboardSearchSection from "../components/DashboardSearchSection.vue";
import DashboardRecentTasks from "../components/DashboardRecentTasks.vue";
import DashboardActiveProjects from "../components/DashboardActiveProjects.vue";
import addNewTaskIcon from "@/assets/dashboard/add-new-task-icon.svg";
import addNewProjectIcon from "@/assets/dashboard/add-new-project-icon.svg";
const DASHBOARD_HEADING_CONTROLLS_BUTTONS = [
  {
    id: 1,
    imagePath: addNewTaskIcon,
    content: "New Task"
  },
  {
    id: 2,
    imagePath: addNewProjectIcon,
    content: "New Project"
  }
]
</script>

<style scoped>
.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}
.dashboard-heading-controlls>button>p {
    font-weight: 400;
    font-style: Regular;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
}

.dashboard-heading-controlls>button {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 11px 16px 11px 16px;
    border-radius: 8px;
    border: 1px solid #4F46E5;
}

.dashboard-heading-controlls>button:hover {
    filter: brightness(0.95);
}

.dashboard-heading-controlls>button:first-child {
    border: 1px solid #E5E7EB;
    background: #ffffff;
}
.dashboard-heading-text>p {
    font-weight: 400;
    font-style: Regular;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0%;
    color: #6B7280;
    margin-top: 5px;
}

.dashboard-heading-text>h1 {
    font-weight: 700;
    font-style: Bold;
    font-size: 24px;
    line-height: 24px;
}
.dashboard-heading {
    display: flex;
    justify-content: space-between;
    padding: 32px;
}
.dashboard-heading-controlls {
    display: flex;
    gap: 12px;
    align-items: center;
}
</style>