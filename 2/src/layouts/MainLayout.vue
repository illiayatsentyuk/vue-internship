<template lang="pug">
  .main-layout
    nav.main-layout__navbar
      .main-layout__navbar-controlls
        .main-layout__navbar-logo
          img.main-layout__navbar-logo-image(src="@/assets/layouts/logo.png")
          h1.main-layout__navbar-logo-heading SynTask
        ul.main-layout__navbar-list#tabs
          NavBarListItem(v-for="item in navBarTabsItems" :key="item.id" v-bind="item")
          p.main-layout__navbar-settings-section-heading Settings
          NavBarListItem(v-for="item in navBarSettingsItems" :key="item.id" v-bind="item")
      .main-layout__navbar-account-information
        img.main-layout__navbar-account-logo(v-if="currentUser?.avatar" :src="currentUser?.avatar" src="@/assets/layouts/account-logo.png")
        img.main-layout__navbar-account-logo(v-else src="@/assets/layouts/account-logo.png")
        .main-layout__navbar-account-description
          h1.main-layout__navbar-account-name {{ accountName }}
          p.main-layout__navbar-account-email {{ accountEmail }}
    RouterView
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBarListItem from '@/components/NavBar/NavBarListItem.vue'
import dashboardIcon from '@/assets/layouts/dashboard.svg'
import tasksIcon from '@/assets/layouts/tasks.svg'
import projectsIcon from '@/assets/layouts/projects.svg'
import tagsIcon from '@/assets/layouts/tags.svg'
import settingsIcon from '@/assets/layouts/settings.svg'
import profileIcon from '@/assets/layouts/profile.svg'
import { useUsersStore } from '@/stores/users'
import { computed } from 'vue'
const usersStore = useUsersStore()
const currentUser = computed(() => usersStore.getUserById(1))
if (!currentUser.value) {
  throw new Error('User not found')
}
const accountName = computed(() => `${currentUser.value!.firstName} ${currentUser.value!.lastName}`)
const accountEmail = computed(() => currentUser.value!.email)
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

<style lang="scss" scoped>
.main-layout {
  display: flex;
  width: 100%;
  RouterView {
    width: calc(100% - 256px);
  }
}

.main-layout__navbar {
  width: 256px;
  background: #ffffff;
  border-right: 1px solid #e5e7eb;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow:
    0px 10px 15px 0px #0000001a,
    0px 4px 6px 0px #0000001a;
}

.main-layout__navbar-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid #e5e7eb;
  padding: 26px 0 26px 26px;
}

.main-layout__navbar-logo-heading {
  font-weight: 700;
  font-style: Bold;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0%;
}

.main-layout__navbar-list {
  list-style-type: none;
  padding: 16px 16px 0 16px;
}

.main-layout__navbar-settings-section-heading {
  color: #9ca3af;
  margin: 32px 0 12px 12px;
}

.main-layout__navbar-account-information {
  display: flex;
  flex-direction: row;
  gap: 12px;
  padding: 19px 0 19px 16px;
  align-items: center;
  border-top: 1px solid #e5e7eb;
}

.main-layout__navbar-account-logo {
  border-radius: 9999px;
  width: 40px;
  height: 40px;
}

.main-layout__navbar-account-name {
  font-weight: 500;
  font-style: Medium;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0%;
}

.main-layout__navbar-account-email {
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0%;
  color: #6b7280;
  cursor: pointer;
}
</style>
