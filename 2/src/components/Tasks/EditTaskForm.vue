<template lang="pug">
  .edit-task-form
      form.edit-task-form__form(@submit.prevent="handleEditTask")
          .edit-task-form__form-group(:class="{ 'edit-task-form__form-group--error': v$.heading.$error }")
              label.edit-task-form__label(for="title") Title
              input.edit-task-form__input(
                  type="text"
                  id="title"
                  v-model="form.heading"
                  :class="{ 'edit-task-form__input--error': v$.heading.$error }"
                  @blur="v$.heading.$touch"
                  placeholder="Enter task title"
              )
              span.edit-task-form__error-message(v-if="v$.heading.$error")
                  | {{ v$.heading.required ? 'Title is required.' : '' }}
                  | {{ v$.heading.minLength?.$invalid ? ' Minimum 3 characters.' : '' }}
                  | {{ v$.heading.maxLength?.$invalid ? ' Maximum 100 characters.' : '' }}
          .edit-task-form__form-group(:class="{ 'edit-task-form__form-group--error': v$.description.$error }")
              label.edit-task-form__label(for="description") Description
              textarea.edit-task-form__textarea(
                  id="description"
                  v-model="form.description"
                  :class="{ 'edit-task-form__textarea--error': v$.description.$error }"
                  @blur="v$.description.$touch"
                  placeholder="Describe the task..."
              )
              span.edit-task-form__error-message(v-if="v$.description.$error")
                  | {{ v$.description.required ? 'Description is required.' : '' }}
                  | {{ v$.description.minLength?.$invalid ? ' Minimum 3 characters.' : '' }}
                  | {{ v$.description.maxLength?.$invalid ? ' Maximum 1000 characters.' : '' }}
          .edit-task-form__form-group(:class="{ 'edit-task-form__form-group--error': v$.importance.$error }")
              label.edit-task-form__label(for="importance") Importance
              select.edit-task-form__select(
                  id="importance"
                  v-model="form.importance"
                  :class="{ 'edit-task-form__select--error': v$.importance.$error }"
                  @blur="v$.importance.$touch"
              )
                  option(value="" disabled selected) Select importance
                  option(value="low") Low
                  option(value="medium") Medium
                  option(value="high") High
                  option(value="critical") Critical
              span.edit-task-form__error-message(v-if="v$.importance.$error")
                  | Importance is required.
          .edit-task-form__form-group(:class="{ 'edit-task-form__form-group--error': v$.tags.$error }")
              label.edit-task-form__label Tags
              .edit-task-form__tags-selector
                  .edit-task-form__tag-option(
                      v-for="tag in availableTags"
                      :key="tag.id"
                  )
                      input.edit-task-form__tag-checkbox(
                          type="checkbox"
                          :id="`tag-${tag.id}`"
                          :value="tag"
                          v-model="form.tags"
                          @change="v$.tags.$touch"
                      )
                      label.edit-task-form__tag-label(:for="`tag-${tag.id}`") {{ tag.name }}
                      span.edit-task-form__tag-color-circle(:style="{ backgroundColor: tag.color }")
              span.edit-task-form__error-message(v-if="v$.tags.$error")
                  | Tags are required.
          .edit-task-form__form-group(:class="{ 'edit-task-form__form-group--error': v$.project.$error }")
              label.edit-task-form__label(for="project") Project
              select.edit-task-form__select(
                  id="project"
                  v-model="form.project"
                  :class="{ 'edit-task-form__select--error': v$.project.$error }"
                  @blur="v$.project.$touch"
              )
                  option(value="" disabled selected) Select a project
                  option(
                      v-for="project in availableProjects"
                      :value="project"
                      :key="project.id"
                  ) {{ project.heading }}
              span.edit-task-form__error-message(v-if="v$.project.$error")
                  | Project is required.
          .edit-task-form__form-group
              label.edit-task-form__label(for="assignedTo") Assigned To
              input.edit-task-form__input(type="text" id="assignedTo" v-model="form.assignedTo" placeholder="Who is assigned?")
          .edit-task-form__form-group(:class="{ 'edit-task-form__form-group--error': v$.timeToEnd.$error }")
              label.edit-task-form__label(for="timeToEnd") Deadline
              input.edit-task-form__input(
                  type="date"
                  id="timeToEnd"
                  v-model="form.timeToEnd"
                  :class="{ 'edit-task-form__input--error': v$.timeToEnd.$error }"
                  @blur="v$.timeToEnd.$touch"
              )
              span.edit-task-form__error-message(v-if="v$.timeToEnd.$error")
                  | Deadline is required.
          button.edit-task-form__submit-button(type="submit") Edit

</template>

<script setup lang="ts">     
import { reactive } from 'vue'
import type { CreateTaskForm, TaskComponent } from '@/types'
import { useTagsStore } from '@/stores/tags'
import { useProjectsStore } from '@/stores/projects'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, maxLength } from '@vuelidate/validators'
const emit = defineEmits(['editTask'])
const props = defineProps<{
  task: TaskComponent
}>()
const task = props.task
const projectsStore = useProjectsStore()
const availableProjects = projectsStore.projects
console.log(availableProjects)
const rules = {
  heading: { required, minLength: minLength(3), maxLength: maxLength(100) },
  description: { required, minLength: minLength(3), maxLength: maxLength(1000) },
  timeToEnd: { required },
  importance: { required },
  status: { required },
  tags: { required },
  project: { required },
}
const tagsStore = useTagsStore()
const availableTags = tagsStore.tags

const form = reactive<CreateTaskForm>({
  heading: task.heading,
  description: task.description,
  timeToEnd: task.timeToEnd,
  importance: task.importance,
  status: task.status,
  tags: task.tags,
  project: task.project,
  assignedTo: task.assignedTo,
  createdAt: task.createdAt,
  updatedAt: task.updatedAt,
  attachments: task.attachments,
  comments: task.comments,
})
const v$ = useVuelidate(rules, form)
const handleEditTask = async () => {
  const result = await v$.value.$validate()
  if (!result) {
      return
  }
  emit('editTask', form)
}
</script>

<style lang="scss" scoped>
.edit-task-form {
  max-width: 720px;
  margin: 48px auto;
  padding: 32px 40px;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
}

.edit-task-form__form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.edit-task-form__form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 4px;
}

.edit-task-form__form-group--error .edit-task-form__label {
  color: #ef4444;
}

.edit-task-form__label {
  font-size: 14px;
  font-weight: 600;
  color: #374151;
}

.edit-task-form__input,
.edit-task-form__textarea,
.edit-task-form__select {
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

  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 1px #6366f1;
    background: #fff;
  }

  &::placeholder {
    color: #9ca3af;
    font-size: 14px;
  }
}

.edit-task-form__input--error,
.edit-task-form__textarea--error,
.edit-task-form__select--error {
  border-color: #ef4444;
  background-color: #fef2f2;
}

.edit-task-form__textarea {
  min-height: 90px;
  resize: vertical;
}

.edit-task-form__error-message {
  font-size: 12.5px;
  color: #ef4444;
  font-weight: 500;
  margin-top: 2px;
  line-height: 1.45;
}

.edit-task-form__tags-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background-color: #f9fafb;
}

.edit-task-form__tag-option {
  display: flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;
  background: #fff;
  border-radius: 6px;
  padding: 5px 9px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.04);
}

.edit-task-form__tag-checkbox {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #6366f1;
}

.edit-task-form__tag-label {
  font-size: 13.5px;
  font-weight: 400;
  color: #22223b;
  cursor: pointer;
  margin: 0;
  padding: 0 2px 0 0;
}

.edit-task-form__tag-color-circle {
  display: inline-block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-left: 2px;
  border: 1px solid #e5e7eb;
  vertical-align: middle;
}

.edit-task-form__submit-button {
  margin-top: 12px;
  align-self: flex-start;
  padding: 11px 26px;
  border-radius: 9999px;
  border: none;
  background: linear-gradient(90deg, #4f46e5, #6366f1 70% );
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
    transform 0.09s cubic-bezier(.53,.02,.63,1.52),
    box-shadow 0.13s cubic-bezier(.25,.45,.3,1.45),
    opacity 0.16s;

  &:hover {
    transform: translateY(-1px) scale(1.035);
    box-shadow: 0 12px 36px rgba(79, 70, 229, 0.18);
    opacity: 0.96;
  }

  &:active {
    transform: translateY(0) scale(0.98);
    box-shadow: 0 2px 8px rgba(79, 70, 229, 0.17);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    box-shadow: none;
  }
}
</style>