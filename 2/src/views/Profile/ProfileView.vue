<template lang="pug">
  .settings-view
    .settings-view__header
      h1.settings-view__title Profile Settings
      p.settings-view__subtitle Manage your account settings and preferences
    .settings-view__content
      ProfilePhoto
      PersonalInformation(@savePersonalInformation="handleSavePersonalInformation")
      ProfileSettings
</template>

<script setup lang="ts">
import ProfilePhoto from '@/components/Profile/ProfilePhoto.vue'
import PersonalInformation from '@/components/Profile/PersonalInformation.vue'
import ProfileSettings from '@/components/Profile/ProfileSettings.vue'
import { useUsersStore } from '@/stores/users'
import { computed } from 'vue'
import type { User } from '@/types'
const usersStore = useUsersStore()
const currentUser = computed(() => usersStore.getUserById(1))
if (!currentUser.value) {
  throw new Error('User not found')
}
const handleSavePersonalInformation = (user: Omit<User, 'id' | 'password' | 'tasks' | 'projects' | 'createdAt' | 'updatedAt'>) => {
  usersStore.editUser({ ...user, password: currentUser.value!.password, tasks: currentUser.value!.tasks, projects: currentUser.value!.projects, createdAt: currentUser.value!.createdAt, updatedAt: currentUser.value!.updatedAt }, currentUser.value!.id)
}
</script>

<style lang="scss" scoped>
.settings-view {
  width: 100%;
  min-height: 100%;
  background: #f9fafb;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.settings-view__header {
  margin-bottom: 32px;
  text-align: center;
  width: 100%;
  max-width: 800px;
}

.settings-view__title {
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: #111827;
  margin: 0 0 8px 0;
}

.settings-view__subtitle {
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #6b7280;
  margin: 0;
}

.settings-view__content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 800px;
  width: 100%;
}
</style>
