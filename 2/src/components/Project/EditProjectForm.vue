<template lang="pug">
    .edit-project-form
        form.edit-project-form__form(@submit.prevent="handleEditProject")
            .edit-project-form__form-group(:class="{ 'edit-project-form__form-group--error': v$.heading.$error }")
                label.edit-project-form__label(for="heading") Title
                input.edit-project-form__input(
                    type="text"
                    id="heading"
                    v-model="form.heading"
                    :class="{ 'edit-project-form__input--error': v$.heading.$error }"
                    @blur="v$.heading.$touch"
                    placeholder="Enter project title"
                )
                span.edit-project-form__error-message(v-if="v$.heading.$error")
                    | {{ v$.heading.required ? 'Title is required.' : '' }}
                    | {{ v$.heading.minLength?.$invalid ? ' Minimum 3 characters.' : '' }}
                    | {{ v$.heading.maxLength?.$invalid ? ' Maximum 100 characters.' : '' }}
            .edit-project-form__form-group(:class="{ 'edit-project-form__form-group--error': v$.description.$error }")
                label.edit-project-form__label(for="description") Description
                textarea.edit-project-form__textarea(
                    id="description"
                    v-model="form.description"
                    :class="{ 'edit-project-form__textarea--error': v$.description.$error }"
                    @blur="v$.description.$touch"
                    placeholder="Describe the project..."
                )
                span.edit-project-form__error-message(v-if="v$.description.$error")
                    | {{ v$.description.required ? 'Description is required.' : '' }}
                    | {{ v$.description.minLength?.$invalid ? ' Minimum 3 characters.' : '' }}
                    | {{ v$.description.maxLength?.$invalid ? ' Maximum 1000 characters.' : '' }}
            .edit-project-form__form-group.edit-project-form__user-select-group
                label.edit-project-form__label(for="contributors") Contributors
                select#contributors.edit-project-form__user-select(multiple)
                    option(disabled selected) Select contributors…
                    option(v-for="user in availableUsers" :value="user.id" :key="user.id") {{ user.name }}
            button.edit-project-form__submit-button(type="submit") Edit
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, maxLength } from '@vuelidate/validators'
import { useUsersStore } from '@/stores/users'
import type { CreateProjectForm, Project } from '@/types'
const emit = defineEmits(['editProject'])
const props = defineProps<{
    project: Project
}>()
const project = props.project
const usersStore = useUsersStore()
const availableUsers = usersStore.users

const form = reactive<CreateProjectForm>({
    heading: project.heading,
    description: project.description,
    type: project.type,
    procent: project.procent,
    timeToEnd: project.timeToEnd,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tasks: project.tasks,
    contributors: project.contributors,
})

const rules = {
    heading: { required, minLength: minLength(3), maxLength: maxLength(100) },
    description: { required, minLength: minLength(3), maxLength: maxLength(1000) },
}
const v$ = useVuelidate(rules, form)
const handleEditProject = async () => {
    const result = await v$.value.$validate()
    if (!result) {
        return
    }
    emit('editProject', form)
}
</script>

<style lang="scss" scoped>
.edit-project-form {
  max-width: 720px;
  margin: 48px auto;
  padding: 32px 40px;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
}

.edit-project-form__form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.edit-project-form__form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 4px;
}

.edit-project-form__label {
  font-size: 14px;
  font-weight: 600;
  color: #374151;
}

.edit-project-form__form-group--error .edit-project-form__label {
  color: #ef4444;
}

.edit-project-form__input,
.edit-project-form__textarea {
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background: #f9fafb;
  font-size: 15px;
  color: #111827;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease,
    background-color 0.15s ease;
}

.edit-project-form__input:focus,
.edit-project-form__textarea:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 1px #6366f1;
  background: #fff;
}

.edit-project-form__input--error,
.edit-project-form__textarea--error {
  border-color: #ef4444;
  background-color: #fef2f2;
}

.edit-project-form__input::placeholder,
.edit-project-form__textarea::placeholder {
  color: #9ca3af;
  font-size: 14px;
}

.edit-project-form__textarea {
  min-height: 90px;
  resize: vertical;
}

.edit-project-form__error-message {
  font-size: 12.5px;
  color: #ef4444;
  font-weight: 500;
  margin-top: 2px;
  line-height: 1.45;
}

.edit-project-form__user-select {
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background: #f9fafb;
  font-size: 14px;
  color: #111827;
  min-height: 90px;
  cursor: pointer;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease,
    background-color 0.15s ease;
}

.edit-project-form__user-select:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 1px #6366f1;
  background: #fff;
}

.edit-project-form__submit-button {
  margin-top: 12px;
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
}

.edit-project-form__submit-button:hover {
  transform: translateY(-1px) scale(1.035);
  box-shadow: 0 12px 36px rgba(79, 70, 229, 0.18);
  opacity: 0.96;
}

.edit-project-form__submit-button:active {
  transform: translateY(0) scale(0.98);
  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.17);
}

.edit-project-form__submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  box-shadow: none;
}
</style>