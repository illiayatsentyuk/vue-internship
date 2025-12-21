<template lang="pug">
  .profile-photo
    .profile-photo__image-container
      img.profile-photo__image(src="@/assets/layouts/account-logo.png" alt="Profile Photo")
    .profile-photo__actions
      button.profile-photo__button.profile-photo__button--primary
        svg.profile-photo__button-icon(width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg")
          path(d="M8 2V14M2 8H14" stroke="white" stroke-width="2" stroke-linecap="round")
        span Upload New Photo
      button.profile-photo__button.profile-photo__button--secondary
        svg.profile-photo__button-icon(width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg")
          path(d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z" fill="#6B7280")
          path(d="M8 10C4.68629 10 2 12.6863 2 16H14C14 12.6863 11.3137 10 8 10Z" fill="#6B7280")
        span Use Gravatar
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useUsersStore } from '@/stores/users'
import CropperModal from '@/components/Profile/CropperModal.vue'
const usersStore = useUsersStore()
const currentUser = computed(() => usersStore.getUserById(1))
</script>

<style lang="scss" scoped>
.profile-photo {
  background: #ffffff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0px 1px 2px 0px #0000000d;
  display: flex;
  align-items: center;
  gap: 24px;
}

.profile-photo__image-container {
  position: relative;
  width: 120px;
  height: 120px;
  flex-shrink: 0;
}

.profile-photo__image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.profile-photo__edit-icon {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 32px;
  height: 32px;
  background: #6366f1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 3px solid #ffffff;
  transition: background 0.15s ease;

  &:hover {
    background: #4f46e5;
  }
}

.profile-photo__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.profile-photo__button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 11px 16px;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
  font-family: Inter;
}

.profile-photo__button--primary {
  background: linear-gradient(90deg, #4f46e5, #6366f1 70%);
  color: #ffffff;
  box-shadow: 0px 1px 2px 0px #0000000d;

  &:hover {
    filter: brightness(0.95);
    transform: translateY(-1px);
    box-shadow: 0px 4px 8px rgba(79, 70, 229, 0.2);
  }
}

.profile-photo__button--secondary {
  background: #ffffff;
  color: #374151;
  border: 1px solid #e5e7eb;

  &:hover {
    background: #f9fafb;
    border-color: #d1d5db;
  }
}

.profile-photo__button-icon {
  flex-shrink: 0;
}
</style>

