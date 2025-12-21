<template lang="pug">
    .create-task-form
        form.create-task-form__form(@submit.prevent="handleCreateTask")
            .create-task-form__form-group(:class="{ 'create-task-form__form-group--error': v$.heading.$error }")
                label.create-task-form__label(for="title") Title
                input.create-task-form__input(
                    type="text"
                    id="title"
                    v-model="form.heading"
                    :class="{ 'create-task-form__input--error': v$.heading.$error }"
                    @blur="v$.heading.$touch"
                    placeholder="Enter task title"
                )
                span.create-task-form__error-message(v-if="v$.heading.$error")
                    | {{ v$.heading.required ? 'Title is required.' : '' }}
                    | {{ v$.heading.minLength?.$invalid ? ' Minimum 3 characters.' : '' }}
                    | {{ v$.heading.maxLength?.$invalid ? ' Maximum 100 characters.' : '' }}
            .create-task-form__form-group(:class="{ 'create-task-form__form-group--error': v$.description.$error }")
                label.create-task-form__label(for="description") Description
                textarea.create-task-form__textarea(
                    id="description"
                    v-model="form.description"
                    :class="{ 'create-task-form__textarea--error': v$.description.$error }"
                    @blur="v$.description.$touch"
                    placeholder="Describe the task..."
                )
                span.create-task-form__error-message(v-if="v$.description.$error")
                    | {{ v$.description.required ? 'Description is required.' : '' }}
                    | {{ v$.description.minLength?.$invalid ? ' Minimum 3 characters.' : '' }}
                    | {{ v$.description.maxLength?.$invalid ? ' Maximum 1000 characters.' : '' }}
            .create-task-form__form-group(:class="{ 'create-task-form__form-group--error': v$.importance.$error }")
                label.create-task-form__label(for="importance") Importance
                Dropdown(ref="importanceDropdown")
                  template(v-slot:trigger="{ isOpen }")
                    button.create-task-form__select(
                      type="button"
                      :class="{ 'create-task-form__select--error': v$.importance.$error }"
                    )
                        span {{ selectedImportanceName || 'Select importance' }}
                        img.create-task-form__select-icon(
                          src="@/assets/dashboard/arrow.svg"
                          alt="arrow-down"
                          :class="{ 'create-task-form__select-icon--open': isOpen }"
                        )
                  template(v-slot:content)
                    .create-task-form__select-options
                      .create-task-form__select-option(
                        v-for="importance in importanceOfProject"
                        :key="importance.id"
                        @click="selectImportance(importance)"
                        :class="{ 'create-task-form__select-option--selected': form.importance === String(importance.id) }"
                      )
                        span.create-task-form__select-option-color(
                          :style="{ backgroundColor: importance.color }"
                        )
                        span {{ importance.name }}
                span.create-task-form__error-message(v-if="v$.importance.$error")
                    | Importance is required.
            .create-task-form__form-group(:class="{ 'create-task-form__form-group--error': v$.tags.$error }")
                label.create-task-form__label Tags
                .create-task-form__tags-selector
                    .create-task-form__tag-option(
                        v-for="tag in availableTags"
                        :key="tag.id"
                    )
                        input.create-task-form__tag-checkbox(
                            type="checkbox"
                            :id="`tag-${tag.id}`"
                            :value="tag"
                            v-model="form.tags"
                            @change="v$.tags.$touch"
                        )
                        label.create-task-form__tag-label(:for="`tag-${tag.id}`") {{ tag.name }}
                        span.create-task-form__tag-color-circle(:style="{ backgroundColor: tag.color }")
                span.create-task-form__error-message(v-if="v$.tags.$error")
                    | Tags are required.
            .create-task-form__form-group(:class="{ 'create-task-form__form-group--error': v$.project.$error }")
                label.create-task-form__label(for="project") Project
                Dropdown(ref="projectDropdown")
                  template(v-slot:trigger="{ isOpen }")
                    button.create-task-form__select(
                      type="button"
                      :class="{ 'create-task-form__select--error': v$.project.$error }"
                    )
                        span {{ selectedProjectName || 'Select a project' }}
                        img.create-task-form__select-icon(
                          src="@/assets/dashboard/arrow.svg"
                          alt="arrow-down"
                          :class="{ 'create-task-form__select-icon--open': isOpen }"
                        )
                  template(v-slot:content)
                    .create-task-form__select-options
                      .create-task-form__select-option(
                        v-for="project in availableProjects"
                        :key="project.id"
                        @click="selectProject(project)"
                        :class="{ 'create-task-form__select-option--selected': form.project?.id === project.id }"
                      )
                        span {{ project.heading }}
                span.create-task-form__error-message(v-if="v$.project.$error")
                    | Project is required.
            .create-task-form__form-group
                label.create-task-form__label(for="assignedTo") Assigned To
                input.create-task-form__input(type="text" id="assignedTo" v-model="form.assignedTo" placeholder="Who is assigned?")
            .create-task-form__form-group(:class="{ 'create-task-form__form-group--error': v$.timeToEnd.$error }")
                label.create-task-form__label(for="timeToEnd") Deadline
                input.create-task-form__input(
                    type="date"
                    id="timeToEnd"
                    v-model="form.timeToEnd"
                    :class="{ 'create-task-form__input--error': v$.timeToEnd.$error }"
                    @blur="v$.timeToEnd.$touch"
                )
                span.create-task-form__error-message(v-if="v$.timeToEnd.$error")
                    | Deadline is required.
            button.create-task-form__submit-button(type="submit") Create

</template>

<script setup lang="ts">     
import { reactive, ref, computed, watch } from 'vue'
import type { CreateTaskForm, Project } from '@/types'
import { useTagsStore } from '@/stores/tags'
import { useProjectsStore } from '@/stores/projects'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, maxLength } from '@vuelidate/validators'
import Dropdown from '@/ui/Dropdown.vue'

const emit = defineEmits(['createTask'])
const projectsStore = useProjectsStore()
const availableProjects = projectsStore.projects
console.log(availableProjects)

const importanceDropdown = ref<InstanceType<typeof Dropdown> & { isOpen?: { value: boolean } } | null>(null)
const projectDropdown = ref<InstanceType<typeof Dropdown> & { isOpen?: { value: boolean } } | null>(null)
const importanceDropdownWasOpened = ref(false)

const importanceOfProject = [{
  id: 1,
  name: 'Low',
  color: '#FF0000',
}, {
  id: 2,
  name: 'Medium',
  color: '#00FF00',
}, {
  id: 3,
  name: 'High',
  color: '#FFFF00',
}, {
  id: 4,
  name: 'Critical',
  color: '#FF00FF',
}]

watch(() => importanceDropdown.value?.isOpen?.value, (isOpen) => {
  if (isOpen) {
    importanceDropdownWasOpened.value = true
  } else if (importanceDropdownWasOpened.value && !form.importance) {
    v$.value.importance.$touch()
    importanceDropdownWasOpened.value = false
  }
})

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
    heading: '',
    description: '',
    timeToEnd: '',
    importance: 'low',
    status: 'Pending',
    tags: [],
    project: null,
    assignedTo:null ,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    attachments: ['Penos1 1', 'Attachment 2'],
    comments: [],
})
const v$ = useVuelidate(rules, form)

const selectedImportanceName = computed(() => {
    const importance = importanceOfProject.find(imp => String(imp.id) === form.importance)
    return importance ? importance.name : ''
})

const selectImportance = (importance: { id: number; name: string; color: string }) => {
    form.importance = importance.name.toLowerCase() as 'low' | 'medium' | 'high' | 'critical'
    importanceDropdown.value?.close()
    v$.value.importance.$touch()
}

const selectedProjectName = computed(() => {
    return form.project?.heading || ''
})

const selectProject = (project: Project) => {
    form.project = project
    projectDropdown.value?.close()
    v$.value.project.$touch()
}

const handleCreateTask = async () => {
    const result = await v$.value.$validate()
    if (!result) {
        return
    }
    emit('createTask', form)
}
</script>

<style lang="scss" scoped>
.create-task-form {
  max-width: 720px;
  margin: 48px auto;
  padding: 32px 40px;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

.create-task-form__form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 4px;
  position: relative;
}

.create-task-form__form-group--error .create-task-form__label {
  color: #ef4444;
}

.create-task-form__label {
  font-size: 14px;
  font-weight: 600;
  color: #374151;
}

.create-task-form__input,
.create-task-form__textarea,
.create-task-form__select {
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

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

  span {
    flex: 1;
    text-align: left;
  }
}

.create-task-form__select-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
  flex-shrink: 0;
  margin-left: 8px;

  &--open {
    transform: rotate(180deg);
  }
}

.create-task-form__select-options {
  padding: 4px;
  max-height: 200px;
  overflow-y: auto;
  display: block;
  width: 100%;
}

.create-task-form__select-option {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.15s ease;
  font-size: 14px;
  color: #374151;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: #f3f4f6;
  }

  &--selected {
    background-color: #eef2ff;
    color: #4f46e5;
    font-weight: 500;
  }
}

.create-task-form__select-option-color {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.create-task-form__input--error,
.create-task-form__textarea--error,
.create-task-form__select--error {
  border-color: #ef4444;
  background-color: #fef2f2;
}

.create-task-form__textarea {
  min-height: 90px;
  resize: vertical;
}

.create-task-form__error-message {
  font-size: 12.5px;
  color: #ef4444;
  font-weight: 500;
  margin-top: 2px;
  line-height: 1.45;
}

.create-task-form__tags-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background-color: #f9fafb;
}

.create-task-form__tag-option {
  display: flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;
  background: #fff;
  border-radius: 6px;
  padding: 5px 9px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.04);
}

.create-task-form__tag-checkbox {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #6366f1;
}

.create-task-form__tag-label {
  font-size: 13.5px;
  font-weight: 400;
  color: #22223b;
  cursor: pointer;
  margin: 0;
  padding: 0 2px 0 0;
}

.create-task-form__tag-color-circle {
  display: inline-block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-left: 2px;
  border: 1px solid #e5e7eb;
  vertical-align: middle;
}

.create-task-form__submit-button {
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