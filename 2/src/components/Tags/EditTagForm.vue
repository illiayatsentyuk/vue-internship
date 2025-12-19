<template lang="pug">
  .edit-tag-form
    form.edit-tag-form__form(@submit.prevent="handleEditTag")
      .edit-tag-form__form-group(:class="{ 'edit-tag-form__form-group--error': v$.name.$error }")
        label.edit-tag-form__label(for="name") Name
        input.edit-tag-form__input(
          type="text"
          id="name"
          v-model="form.name"
          :class="{ 'edit-tag-form__input--error': v$.name.$error }"
          @blur="v$.name.$touch"
          placeholder="Enter tag name"
        )
        span.edit-tag-form__error-message(v-if="v$.name.$error")
          | {{ v$.name.required ? 'Name is required.' : '' }}
          | {{ v$.name.minLength?.$invalid ? ' Minimum 2 characters.' : '' }}
          | {{ v$.name.maxLength?.$invalid ? ' Maximum 40 characters.' : '' }}

      .edit-tag-form__form-group(:class="{ 'edit-tag-form__form-group--error': v$.color.$error }")
        label.edit-tag-form__label(for="color") Color
        input.edit-tag-form__color-input(
          type="color"
          id="color"
          v-model="form.color"
          :class="{ 'edit-tag-form__color-input--error': v$.color.$error }"
          @blur="v$.color.$touch"
        )
        span.edit-tag-form__error-message(v-if="v$.color.$error")
          | {{ v$.color.required ? 'Color is required.' : '' }}

      button.edit-tag-form__submit-button(type="submit") Save changes
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, maxLength } from '@vuelidate/validators'
import type { Tag } from '@/types'

const props = defineProps<{
  tag: Tag
}>()

const emit = defineEmits<{
  (e: 'editTag', payload: Omit<Tag, 'id'>): void
}>()

const form = reactive<Omit<Tag, 'id'>>({
  name: props.tag.name,
  color: props.tag.color,
})

const rules = {
  name: { required, minLength: minLength(2), maxLength: maxLength(40) },
  color: { required },
}

const v$ = useVuelidate(rules, form)

const handleEditTag = async () => {
  const result = await v$.value.$validate()
  if (!result) return
  emit('editTag', form)
}
</script>

<style lang="scss" scoped>
.edit-tag-form {
  max-width: 480px;
  margin: 40px auto;
  padding: 24px 32px;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
}

.edit-tag-form__form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.edit-tag-form__form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.edit-tag-form__form-group--error .edit-tag-form__label {
  color: #ef4444;
}

.edit-tag-form__label {
  font-size: 14px;
  font-weight: 600;
  color: #374151;
}

.edit-tag-form__input {
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

  &--error {
    border-color: #ef4444;
    background-color: #fef2f2;
  }

  &::placeholder {
    color: #9ca3af;
    font-size: 14px;
  }
}

.edit-tag-form__color-input {
  width: 72px;
  height: 36px;
  padding: 0;
  border-radius: 9999px;
  border: 1px solid #e5e7eb;
  background: #f9fafb;
  cursor: pointer;
}

.edit-tag-form__color-input--error {
  border-color: #ef4444;
}

.edit-tag-form__error-message {
  font-size: 12.5px;
  color: #ef4444;
  font-weight: 500;
  margin-top: 2px;
  line-height: 1.45;
}

.edit-tag-form__submit-button {
  margin-top: 4px;
  align-self: flex-start;
  padding: 9px 22px;
  border-radius: 9999px;
  border: none;
  background: linear-gradient(90deg, #4f46e5, #6366f1 70%);
  color: #fff;
  font-size: 14px;
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
    transform: translateY(-1px) scale(1.03);
    box-shadow: 0 10px 30px rgba(79, 70, 229, 0.18);
    opacity: 0.97;
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


