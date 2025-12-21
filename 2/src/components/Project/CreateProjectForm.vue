<template lang="pug">
    .create-project-form
        form.create-project-form__form(@submit.prevent="handleCreateProject")
            .create-project-form__form-group(:class="{ 'create-project-form__form-group--error': v$.heading.$error }")
                label.create-project-form__label(for="heading") Title
                input.create-project-form__input(
                    type="text"
                    id="heading"
                    v-model="form.heading"
                    :class="{ 'create-project-form__input--error': v$.heading.$error }"
                    @blur="v$.heading.$touch"
                    placeholder="Enter project title"
                )
                span.create-project-form__error-message(v-if="v$.heading.$error")
                    | {{ v$.heading.required ? 'Title is required.' : '' }}
                    | {{ v$.heading.minLength?.$invalid ? ' Minimum 3 characters.' : '' }}
                    | {{ v$.heading.maxLength?.$invalid ? ' Maximum 100 characters.' : '' }}
            .create-project-form__form-group(:class="{ 'create-project-form__form-group--error': v$.description.$error }")
                label.create-project-form__label(for="description") Description
                textarea.create-project-form__textarea(
                    id="description"
                    v-model="form.description"
                    :class="{ 'create-project-form__textarea--error': v$.description.$error }"
                    @blur="v$.description.$touch"
                    placeholder="Describe the project..."
                )
                span.create-project-form__error-message(v-if="v$.description.$error")
                    | {{ v$.description.required ? 'Description is required.' : '' }}
                    | {{ v$.description.minLength?.$invalid ? ' Minimum 3 characters.' : '' }}
                    | {{ v$.description.maxLength?.$invalid ? ' Maximum 1000 characters.' : '' }}
            .create-project-form__form-group(:class="{ 'create-project-form__form-group--error': v$.type.$error }")
                label.create-project-form__label(for="type") Type
                Dropdown(ref="typeDropdown")
                  template(v-slot:trigger="{ isOpen }")
                    button.create-project-form__select(
                      type="button"
                      :class="{ 'create-project-form__select--error': v$.status.$error }"
                    )
                        span {{ selectedTypeName || 'Select type' }}
                        img.create-project-form__select-icon(
                          src="@/assets/dashboard/arrow.svg"
                          alt="arrow-down"
                          :class="{ 'create-project-form__select-icon--open': isOpen }"
                        )
                  template(v-slot:content)
                    .create-project-form__select-options
                      .create-project-form__select-option(
                        v-for="typeOption in typeOptions"
                        :key="typeOption.value"
                        @click="selectType(typeOption.value)"
                        :class="{ 'create-project-form__select-option--selected': form.status === typeOption.value }"
                      )
                        span {{ typeOption.label }}
                span.create-project-form__error-message(v-if="v$.status.$error")
                    | Type is required.
            .create-project-form__form-group(:class="{ 'create-project-form__form-group--error': v$.procent.$error }")
                label.create-project-form__label(for="procent") Progress (%)
                input.create-project-form__input(
                    type="number"
                    id="procent"
                    v-model.number="form.procent"
                    :class="{ 'create-project-form__input--error': v$.procent.$error }"
                    @blur="v$.procent.$touch"
                    placeholder="Enter progress percentage"
                    min="0"
                    max="100"
                )
                span.create-project-form__error-message(v-if="v$.procent.$error")
                    | {{ v$.procent.required ? 'Progress is required.' : '' }}
                    | {{ v$.procent.minValue?.$invalid ? ' Minimum 0%.' : '' }}
                    | {{ v$.procent.maxValue?.$invalid ? ' Maximum 100%.' : '' }}
            .create-project-form__form-group(:class="{ 'create-project-form__form-group--error': v$.timeToEnd.$error }")
                label.create-project-form__label(for="timeToEnd") Deadline
                input.create-project-form__input(
                    type="datetime-local"
                    id="timeToEnd"
                    v-model="form.timeToEnd"
                    :class="{ 'create-project-form__input--error': v$.timeToEnd.$error }"
                    @blur="v$.timeToEnd.$touch"
                )
                span.create-project-form__error-message(v-if="v$.timeToEnd.$error")
                    | {{ v$.timeToEnd.required ? 'Deadline is required.' : '' }}
            .create-project-form__form-group.create-project-form__user-select-group
                label.create-project-form__label(for="contributors") Contributors
                select#contributors.create-project-form__user-select(multiple)
                    option(disabled selected) Select contributors…
                    option(v-for="user in availableUsers" :value="user.id" :key="user.id") {{ user.name }}
            button.create-project-form__submit-button(type="submit") Create
</template>
<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, maxLength, minValue, maxValue } from '@vuelidate/validators'
import { useUsersStore } from '@/stores/users'
import Dropdown from '@/ui/Dropdown.vue'
import type { CreateProjectForm } from '@/types'
const emit = defineEmits(['createProject'])
const usersStore = useUsersStore()
const availableUsers = usersStore.users

const typeDropdown = ref<InstanceType<typeof Dropdown> & { isOpen?: { value: boolean } } | null>(null)

const typeOptions = [
    { value: 'ontrack', label: 'On Track' },
    { value: 'inprogress', label: 'In Progress' },
    { value: 'review', label: 'Review' },
]

const selectedTypeName = computed(() => {
    const option = typeOptions.find(opt => opt.value === form.status)
    return option ? option.label : ''
})

const selectType = (type: 'ontrack' | 'inprogress' | 'review') => {
    form.status = type
    typeDropdown.value?.close()
}

const form = reactive<CreateProjectForm>({
    heading: '',
    description: '',
    status: 'ontrack',
    procent: 0,
    timeToEnd: '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tasks: [],
    contributors: [],
})

const rules = {
    heading: { required, minLength: minLength(3), maxLength: maxLength(100) },
    description: { required, minLength: minLength(3), maxLength: maxLength(1000) },
    status: { required },
    procent: { required, minValue: minValue(0), maxValue: maxValue(100) },
    timeToEnd: { required },
}
const v$ = useVuelidate(rules, form)
const handleCreateProject = async () => {
    const result = await v$.value.$validate()
    if (!result) {
        return
    }
    emit('createProject', form)
}
</script>

<style lang="scss" scoped>
.create-project-form {
  max-width: 720px;
  margin: 48px auto;
  padding: 32px 40px;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
}

.create-project-form__form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.create-project-form__form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 4px;
}

.create-project-form__label {
  font-size: 14px;
  font-weight: 600;
  color: #374151;
}

.create-project-form__form-group--error .create-project-form__label {
  color: #ef4444;
}

.create-project-form__input,
.create-project-form__textarea,
.create-project-form__select {
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

.create-project-form__select {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.create-project-form__input:focus,
.create-project-form__textarea:focus,
.create-project-form__select:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 1px #6366f1;
  background: #fff;
}

.create-project-form__input--error,
.create-project-form__textarea--error,
.create-project-form__select--error {
  border-color: #ef4444;
  background-color: #fef2f2;
}

.create-project-form__select-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
  flex-shrink: 0;
  margin-left: 8px;

  &--open {
    transform: rotate(180deg);
  }
}

.create-project-form__select-options {
  padding: 4px;
  max-height: 200px;
  overflow-y: auto;
  display: block;
  width: 100%;
}

.create-project-form__select-option {
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

.create-project-form__input::placeholder,
.create-project-form__textarea::placeholder {
  color: #9ca3af;
  font-size: 14px;
}

.create-project-form__textarea {
  min-height: 90px;
  resize: vertical;
}

.create-project-form__error-message {
  font-size: 12.5px;
  color: #ef4444;
  font-weight: 500;
  margin-top: 2px;
  line-height: 1.45;
}

.create-project-form__user-select {
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

.create-project-form__user-select:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 1px #6366f1;
  background: #fff;
}

.create-project-form__submit-button {
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

.create-project-form__submit-button:hover {
  transform: translateY(-1px) scale(1.035);
  box-shadow: 0 12px 36px rgba(79, 70, 229, 0.18);
  opacity: 0.96;
}

.create-project-form__submit-button:active {
  transform: translateY(0) scale(0.98);
  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.17);
}

.create-project-form__submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  box-shadow: none;
}
</style>