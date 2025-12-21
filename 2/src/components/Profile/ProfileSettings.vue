<template lang="pug">
  .security-settings
    h2.security-settings__title Security Settings
    form.security-settings__form(@submit.prevent="handleUpdate")
      .security-settings__field
        label.security-settings__label(for="currentPassword") Current Password
        .security-settings__input-wrapper
          input.security-settings__input(
            id="currentPassword"
            :type="showCurrentPassword ? 'text' : 'password'"
            v-model="currentPassword"
            placeholder="Enter your current password"
          )
          button.security-settings__toggle-password(
            type="button"
            @click="showCurrentPassword = !showCurrentPassword"
          )
            svg(width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg")
              path(
                v-if="!showCurrentPassword"
                d="M10 3C5.58172 3 2 6.58172 2 11C2 15.4183 5.58172 19 10 19C14.4183 19 18 15.4183 18 11C18 6.58172 14.4183 3 10 3ZM10 17C6.68629 17 4 14.3137 4 11C4 7.68629 6.68629 5 10 5C13.3137 5 16 7.68629 16 11C16 14.3137 13.3137 17 10 17Z"
                fill="#6B7280"
              )
              path(
                v-if="!showCurrentPassword"
                d="M10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7Z"
                fill="#6B7280"
              )
              path(
                v-if="showCurrentPassword"
                d="M2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.29289 7L6.5 7.20711L7.20711 6.5L3.06066 2.35355L2.85355 2.14645Z"
                fill="#6B7280"
              )
              path(
                v-if="showCurrentPassword"
                d="M17.1464 17.8536C17.3417 18.0488 17.6583 18.0488 17.8536 17.8536C18.0488 17.6583 18.0488 17.3417 17.8536 17.1464L13.7071 13L13.5 12.7929L12.7929 13.5L16.9393 17.6464L17.1464 17.8536Z"
                fill="#6B7280"
              )
      .security-settings__field
        label.security-settings__label(for="newPassword") New Password
        .security-settings__input-wrapper
          input.security-settings__input(
            id="newPassword"
            :type="showNewPassword ? 'text' : 'password'"
            v-model="newPassword"
            placeholder="Enter your new password"
            @input="calculatePasswordStrength"
          )
          button.security-settings__toggle-password(
            type="button"
            @click="showNewPassword = !showNewPassword"
          )
            svg(width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg")
              path(
                v-if="!showNewPassword"
                d="M10 3C5.58172 3 2 6.58172 2 11C2 15.4183 5.58172 19 10 19C14.4183 19 18 15.4183 18 11C18 6.58172 14.4183 3 10 3ZM10 17C6.68629 17 4 14.3137 4 11C4 7.68629 6.68629 5 10 5C13.3137 5 16 7.68629 16 11C16 14.3137 13.3137 17 10 17Z"
                fill="#6B7280"
              )
              path(
                v-if="!showNewPassword"
                d="M10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7Z"
                fill="#6B7280"
              )
              path(
                v-if="showNewPassword"
                d="M2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.29289 7L6.5 7.20711L7.20711 6.5L3.06066 2.35355L2.85355 2.14645Z"
                fill="#6B7280"
              )
              path(
                v-if="showNewPassword"
                d="M17.1464 17.8536C17.3417 18.0488 17.6583 18.0488 17.8536 17.8536C18.0488 17.6583 18.0488 17.3417 17.8536 17.1464L13.7071 13L13.5 12.7929L12.7929 13.5L16.9393 17.6464L17.1464 17.8536Z"
                fill="#6B7280"
              )
      .security-settings__password-strength(v-if="newPassword")
        .security-settings__password-strength-bar
          .security-settings__password-strength-fill(
            :class="`security-settings__password-strength-fill--${passwordStrength.level}`"
            :style="{ width: `${passwordStrength.percentage}%` }"
          )
        span.security-settings__password-strength-text(
          :class="`security-settings__password-strength-text--${passwordStrength.level}`"
        ) {{ passwordStrength.label }}
      .security-settings__two-factor
        .security-settings__two-factor-content
          p.security-settings__two-factor-description Add an extra layer of security to your account
          label.security-settings__toggle
            input.security-settings__toggle-input(
              type="checkbox"
              v-model="twoFactorEnabled"
            )
            span.security-settings__toggle-slider
      button.security-settings__submit-button(type="submit") Update Security Settings
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useUsersStore } from '@/stores/users'

const usersStore = useUsersStore()
const currentUser = computed(() => usersStore.getUserById(1))

const currentPassword = ref('')
const newPassword = ref('')
const showCurrentPassword = ref(false)
const showNewPassword = ref(false)
const twoFactorEnabled = ref(false)

const passwordStrength = computed(() => {
  if (!newPassword.value) {
    return { level: 'weak', percentage: 0, label: '' }
  }

  let strength = 0
  const password = newPassword.value

  // Length check
  if (password.length >= 8) strength += 25
  if (password.length >= 12) strength += 10

  // Character variety checks
  if (/[a-z]/.test(password)) strength += 15
  if (/[A-Z]/.test(password)) strength += 15
  if (/[0-9]/.test(password)) strength += 15
  if (/[^a-zA-Z0-9]/.test(password)) strength += 20

  let level = 'weak'
  let label = 'Weak'

  if (strength >= 80) {
    level = 'strong'
    label = 'Strong'
  } else if (strength >= 50) {
    level = 'medium'
    label = 'Medium'
  }

  return { level, percentage: Math.min(strength, 100), label }
})

const calculatePasswordStrength = () => {
  // Already computed, no action needed
}

const handleUpdate = () => {
  if (currentUser.value) {
    // Verify current password
    if (currentPassword.value !== currentUser.value.password) {
      alert('Current password is incorrect')
      return
    }

    // Update password if new password is provided
    if (newPassword.value) {
      usersStore.editUser(
        {
          name: currentUser.value.name,
          email: currentUser.value.email,
          password: newPassword.value,
          tasks: currentUser.value.tasks,
          projects: currentUser.value.projects,
          createdAt: currentUser.value.createdAt,
          updatedAt: new Date().toISOString(),
        },
        currentUser.value.id
      )
    }

    // Handle 2FA toggle
    if (twoFactorEnabled.value) {
      console.log('Two-factor authentication enabled')
    }

    // Clear form
    currentPassword.value = ''
    newPassword.value = ''
    console.log('Security settings updated')
  }
}
</script>

<style lang="scss" scoped>
.security-settings {
  background: #ffffff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0px 1px 2px 0px #0000000d;
}

.security-settings__title {
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #111827;
  margin: 0 0 24px 0;
}

.security-settings__form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.security-settings__field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.security-settings__label {
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  color: #374151;
}

.security-settings__input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.security-settings__input {
  width: 100%;
  padding: 13px 16px;
  padding-right: 48px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  font-size: 14px;
  color: #111827;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
}

.security-settings__toggle-password {
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.7;
  }
}

.security-settings__password-strength {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: -8px;
}

.security-settings__password-strength-bar {
  flex: 1;
  height: 8px;
  background: #e5e7eb;
  border-radius: 9999px;
  overflow: hidden;
}

.security-settings__password-strength-fill {
  height: 100%;
  transition: width 0.3s ease, background-color 0.3s ease;
  border-radius: 9999px;
}

.security-settings__password-strength-fill--weak {
  background: #ef4444;
}

.security-settings__password-strength-fill--medium {
  background: #eab308;
}

.security-settings__password-strength-fill--strong {
  background: #22c55e;
}

.security-settings__password-strength-text {
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
}

.security-settings__password-strength-text--weak {
  color: #ef4444;
}

.security-settings__password-strength-text--medium {
  color: #eab308;
}

.security-settings__password-strength-text--strong {
  color: #22c55e;
}

.security-settings__two-factor {
  margin-top: 8px;
}

.security-settings__two-factor-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.security-settings__two-factor-description {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}

.security-settings__toggle {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  cursor: pointer;
}

.security-settings__toggle-input {
  opacity: 0;
  width: 0;
  height: 0;
}

.security-settings__toggle-slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #d1d5db;
  transition: 0.3s;
  border-radius: 24px;

  &:before {
    position: absolute;
    content: '';
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.3s;
    border-radius: 50%;
  }
}

.security-settings__toggle-input:checked + .security-settings__toggle-slider {
  background-color: #6366f1;
}

.security-settings__toggle-input:checked + .security-settings__toggle-slider:before {
  transform: translateX(20px);
}

.security-settings__submit-button {
  align-self: flex-start;
  padding: 11px 26px;
  border-radius: 9999px;
  border: none;
  background: linear-gradient(90deg, #4f46e5, #6366f1 70%);
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0 4px 8px rgba(99, 102, 241, 0.05);
  transition:
    transform 0.09s cubic-bezier(0.53, 0.02, 0.63, 1.52),
    box-shadow 0.13s cubic-bezier(0.25, 0.45, 0.3, 1.45),
    opacity 0.16s;
  margin-top: 4px;

  &:hover {
    transform: translateY(-1px) scale(1.035);
    box-shadow: 0 12px 36px rgba(79, 70, 229, 0.18);
    opacity: 0.96;
  }

  &:active {
    transform: translateY(0) scale(0.98);
    box-shadow: 0 2px 8px rgba(79, 70, 229, 0.17);
  }
}
</style>

