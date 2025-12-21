<template lang="pug">
  .personal-information
    h2.personal-information__title Personal Information
    form.personal-information__form(@submit.prevent="handleSave")
      .personal-information__field
        label.personal-information__label(for="firstName") First Name
        input.personal-information__input(
          id="firstName"
          type="text"
          v-model="personalInformation.firstName"
          placeholder="Enter your first name"
          :class="{ 'personal-information__input--error': v$.firstName.$error }"
          @blur="v$.firstName.$touch()"
        )
        .personal-information__error(v-if="v$.firstName.$error")
          | {{ v$.firstName.required ? 'First name is required.' : '' }}
          | {{ v$.firstName.minLength?.$invalid ? ' Minimum 3 characters.' : '' }}
          | {{ v$.firstName.maxLength?.$invalid ? ' Maximum 100 characters.' : '' }}
      .personal-information__field
        label.personal-information__label(for="lastName") Last Name
        input.personal-information__input(
          id="lastName"
          type="text"
          v-model="personalInformation.lastName"
          placeholder="Enter your last name"
          :class="{ 'personal-information__input--error': v$.lastName.$error }"
          @blur="v$.lastName.$touch()"
        )
        .personal-information__error(v-if="v$.lastName.$error")
          | {{ v$.lastName.required ? 'Last name is required.' : '' }}
          | {{ v$.lastName.minLength?.$invalid ? ' Minimum 3 characters.' : '' }}
          | {{ v$.lastName.maxLength?.$invalid ? ' Maximum 100 characters.' : '' }}
      .personal-information__field
        label.personal-information__label(for="email") Email Address
        input.personal-information__input(
          id="email"
          type="email"
          v-model="personalInformation.email"
          placeholder="Enter your email address"
          :class="{ 'personal-information__input--error': v$.email.$error }"
          @blur="v$.email.$touch()"
        )
        .personal-information__error(v-if="v$.email.$error")
          | {{ v$.email.required ? 'Email is required.' : '' }}
          | {{ v$.email.email?.$invalid ? ' Invalid email address.' : '' }}
      button.personal-information__submit-button(type="submit") Save Changes
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useUsersStore } from '@/stores/users'
import type { User } from '@/types'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, maxLength, email } from '@vuelidate/validators'
const emit = defineEmits(['savePersonalInformation'])
const rules = {
  firstName: { required, minLength: minLength(3), maxLength: maxLength(100) },
  lastName: { required, minLength: minLength(3), maxLength: maxLength(100) },
  email: { required, email },
}

const usersStore = useUsersStore()
const currentUser = computed(() => usersStore.getUserById(1))
if (!currentUser.value) {
  throw new Error('User not found')
}
const personalInformation = reactive<
  Omit<User, 'id' | 'password' | 'tasks' | 'projects' | 'createdAt' | 'updatedAt'>
>({
  firstName: currentUser.value.firstName,
  lastName: currentUser.value.lastName,
  email: currentUser.value.email,
})

const handleSave = async () => {
  const result = await v$.value.$validate()
  if (!result) {
    v$.value.$touch()
    return
  }
  emit('savePersonalInformation', { ...personalInformation })
}
const v$ = useVuelidate(rules, personalInformation)
</script>

<style lang="scss" scoped>
.personal-information {
  background: #ffffff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0px 1px 2px 0px #0000000d;
}

.personal-information__title {
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #111827;
  margin: 0 0 24px 0;
}

.personal-information__form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.personal-information__field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.personal-information__label {
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  color: #374151;
}

.personal-information__input {
  padding: 13px 16px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  font-size: 14px;
  color: #111827;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;

  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }

  &--error {
    border-color: #ef4444;

    &:focus {
      border-color: #ef4444;
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
  }
}

.personal-information__error {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
  color: #ef4444;
  font-size: 13px;
  line-height: 1.4;
  animation: slideDown 0.2s ease-out;
}

.personal-information__error-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  flex-shrink: 0;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.personal-information__submit-button {
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
