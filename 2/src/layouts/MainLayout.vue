<template lang="pug">
  .main-layout
    nav.navbar
      .navbar-controlls
        .navbar-logo
          img(src="@/assets/layouts/logo.png")
          h1.navbar-logo-heading SynTask
        ul.navbar-list#tabs
          NavBarListItem(v-for="item in navBarTabsItems" :key="item.id" :item="item")
          p.navbar-settings-section-heading Settings
          NavBarListItem(v-for="item in navBarSettingsItems" :key="item.id" :item="item")
      .navbar-account-information
        img.navbar-account-logo(src="@/assets/layouts/account-logo.png")
        .navbar-account-description
          h1 John Doe
          p john@syntask.com
    RouterView
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBarListItem from '@/components/NavBarListItem.vue'
import dashboardIcon from '@/assets/layouts/dashboard.svg'
import tasksIcon from '@/assets/layouts/tasks.svg'
import projectsIcon from '@/assets/layouts/projects.svg'
import tagsIcon from '@/assets/layouts/tags.svg'
import settingsIcon from '@/assets/layouts/settings.svg'
import profileIcon from '@/assets/layouts/profile.svg'
const navBarTabsItems = [
  {
    id: 1,
    imagePath: dashboardIcon,
    content: 'Dashboard',
    path: '/',
  },
  {
    id: 2,
    imagePath: tasksIcon,
    content: 'Tasks',
    path: '/tasks',
  },
  {
    id: 3,
    imagePath: projectsIcon,
    content: 'Projects',
    path: '/projects',
  },
  {
    id: 4,
    imagePath: tagsIcon,
    content: 'Tags',
    path: '/tags',
  },
]
const navBarSettingsItems = [
  {
    id: 5,
    imagePath: settingsIcon,
    content: 'Settings',
    path: '/settings',
  },
  {
    id: 6,
    imagePath: profileIcon,
    content: 'Profile',
    path: '/profile',
  },
]
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
  color: #4f46e5;
}

.navbar-list-item.active {
  cursor: pointer;
  background: #eef2ff;
  color: #4f46e5;
}

.navbar-list-item.active > img {
  filter: brightness(0) saturate(100%) invert(27%) sepia(95%) saturate(1352%) hue-rotate(230deg)
    brightness(98%) contrast(90%);
}

.navbar-settings-section-heading {
  color: #9ca3af;
  margin: 32px 0 12px 12px;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid #e5e7eb;
  padding: 26px 0 26px 26px;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 256px;
  background: #ffffff;
  border-right: 1px solid #e5e7eb;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 10px 15px 0px #0000001a;
  box-shadow: 0px 4px 6px 0px #0000001a;
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
  border-top: 1px solid #e5e7eb;
}

.navbar-account-description > h1 {
  font-weight: 500;
  font-style: Medium;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0%;
}

.navbar-account-description > p {
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0%;
  color: #6b7280;
  cursor: pointer;
}
.main-layout {
  display: flex;
  margin-left: 256px;
}
</style>
