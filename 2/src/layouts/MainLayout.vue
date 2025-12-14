<template>
  <div class="main-layout">
    <nav class="navbar">
      <div class="navbar-controlls">
        <div class="navbar-logo">
          <img src="@/assets/layouts/logo.png" />
          <h1 class="navbar-logo-heading">SynTask</h1>
        </div>
        <ul class="navbar-list" id="tabs">
          <NavBarListItem v-for="item in navBarTabsItems" :key="item.id" :item="item" />
          <p class="navbar-settings-section-heading">Settings</p>
          <NavBarListItem v-for="item in navBarSettingsItems" :key="item.id" :item="item" />
        </ul>
      </div>
      <div class="navbar-account-information">
        <img class="navbar-account-logo" src="@/assets/layouts/account-logo.png" />
        <div class="navbar-account-description">
          <h1>John Doe</h1>
          <p>john@syntask.com</p>
        </div>
      </div>
    </nav>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBarListItem from '@/components/NavBarListItem.vue';
import dashboardIcon from '@/assets/layouts/dashboard.svg';
import tasksIcon from '@/assets/layouts/tasks.svg';
import projectsIcon from '@/assets/layouts/projects.svg';
import tagsIcon from '@/assets/layouts/tags.svg';
import settingsIcon from '@/assets/layouts/settings.svg';
import profileIcon from '@/assets/layouts/profile.svg';
const navBarTabsItems = [
  {
    id: 1,
    imagePath: dashboardIcon,
    content: "Dashboard",
    path: '/'
  },
  {
    id: 2,
    imagePath: tasksIcon,
    content: "Tasks",
    path: '/tasks'
  },
  {
    id: 3,
    imagePath: projectsIcon,
    content: "Projects",
    path: '/projects'
  },
  {
    id: 4,
    imagePath: tagsIcon,
    content: "Tags",
    path: '/tags'
  },
]
const navBarSettingsItems = [{
  id: 5,
  imagePath: settingsIcon,
  content: "Settings",
  path: '/settings'
},
{
  id: 6,
  imagePath: profileIcon,
  content: "Profile",
  path: '/profile'
}]
</script>

<style scoped>
.navbar-list {
    list-style-type: none;
    padding: 16px 16px 0 16px;
}

.navbar-list-item {
    width: 224px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    padding: 14px 0 14px 12px;
    font-weight: 400;
    font-style: Regular;
    font-size: 16px;
    line-height: 100%;
    border-radius: 8px;
}

.navbar-list-item:hover {
    cursor: pointer;
    background: #eef2ff;
    color: #4F46E5;
}

.navbar-list-item.active {
    cursor: pointer;
    background: #eef2ff;
    color: #4F46E5;
}

.navbar-list-item.active>img {
    filter: brightness(0) saturate(100%) invert(27%) sepia(95%) saturate(1352%) hue-rotate(230deg) brightness(98%) contrast(90%);
}

.navbar-settings-section-heading {
    color: #9CA3AF;
    margin: 32px 0 12px 12px;
}

.navbar-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    border-bottom: 1px solid #E5E7EB;
    padding: 26px 0 26px 26px;
}

.navbar {
    max-width: 256px;
    background: #ffffff;
    border-right: 1px solid #E5E7EB;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 10px 15px 0px #0000001A;
    box-shadow: 0px 4px 6px 0px #0000001A;

}

.navbar-logo-heading {
    font-weight: 700;
    font-style: Bold;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0%;
}

.account-logo {
    border-radius: 9999px;
    width: 40px;
    height: 40px;
}

.navbar-account-information {
    display: flex;
    flex-direction: row;
    gap: 12px;
    padding: 19px 0 19px 16px;
    align-items: center;
    border-top: 1px solid #E5E7EB;
}

.navbar-account-description>h1 {
    font-weight: 500;
    font-style: Medium;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0%;
}

.navbar-account-description>p {
    font-weight: 400;
    font-style: Regular;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0%;
    color: #6B7280;
    cursor: pointer
}
.main-layout {
    display: flex;
}
</style>