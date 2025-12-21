<template lang="pug">
  .cropper-modal__backdrop(@click="cancel")
    .cropper-modal(@click.stop)
      .cropper-modal__avatar-uploader(v-if="!previewSrc")
        label.avatar-preview(for="avatar-input")
          span.avatar-preview__text Click to upload image
        input(
          id="avatar-input" 
          type="file" 
          accept="image/*" 
          @change="handleAvatarUpload"
          hidden)
        .cropper-modal__upload-actions
          button.cropper-modal__button.cropper-modal__button--secondary(@click="cancel") Cancel 
      .cropper-modal__header(v-else)
        h2.cropper-modal__title Crop Image
      .cropper-modal__content
        Cropper(ref="cropper" class="cropper" :src="previewSrc" @change="change" :stencil-component="CircleStencil")
      .cropper-modal__actions
        button.cropper-modal__button.cropper-modal__button--secondary(@click="cancel") Cancel
        button.cropper-modal__button.cropper-modal__button--primary(@click="crop") Crop
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Cropper, CircleStencil } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';
import { useUsersStore } from '@/stores/users'

const previewSrc = ref<string | null>(null)
const usersStore = useUsersStore()
const emit = defineEmits(['changeCropVisibility'])
const cropper = ref(null)

async function handleAvatarUpload(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  
  if (file) {
    previewSrc.value = URL.createObjectURL(file)
  }
}


const crop = () => {
  const { canvas } = (cropper.value as any).getResult()
  usersStore.changeAvatar(1, canvas.toDataURL())
  emit('changeCropVisibility')
}
const cancel = () => {
  emit('changeCropVisibility')
}
</script>

<style lang="scss" scoped>
.cropper-modal__backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.2s ease;
}

.cropper-modal {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);
  width: 95%;
  max-width: 1000px;
  height: 90vh;
  max-height: 900px;
  display: flex;
  flex-direction: column;
  animation: slideUp 0.3s ease;
  overflow: hidden;
}


.cropper-modal__avatar-uploader {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  gap: 24px;
}

.cropper-modal__upload-actions {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 500px;
}

.avatar-preview {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 64px;
  border: 2px dashed #d1d5db;
  border-radius: 12px;
  background: #f9fafb;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 300px;

  &:hover {
    border-color: #6366f1;
    background: #f0f0ff;
  }
}

.avatar-preview__text {
  font-size: 16px;
  font-weight: 500;
  color: #6b7280;
  text-align: center;
}

.cropper-modal__header {
  padding: 24px 24px 0 24px;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 24px;
}

.cropper-modal__title {
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 24px 0;
  line-height: 1.2;
}

.cropper-modal__content {
  flex: 1;
  min-height: 600px;
  height: 100%;
  padding: 0 24px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cropper-modal__content :deep(.cropper) {
  width: 100%;
  height: 100%;
  min-height: 600px;
  border-radius: 8px;
  overflow: hidden;
}

.cropper-modal__actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  padding: 24px;
  border-top: 1px solid #e5e7eb;
  margin-top: 24px;
}

.cropper-modal__button {
  padding: 11px 24px;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
  font-family: Inter;
  min-width: 100px;
}

.cropper-modal__button--primary {
  background: linear-gradient(90deg, #4f46e5, #6366f1 70%);
  color: #ffffff;
  box-shadow: 0px 1px 2px 0px #0000000d;

  &:hover {
    filter: brightness(0.95);
    transform: translateY(-1px);
    box-shadow: 0px 4px 8px rgba(79, 70, 229, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
}

.cropper-modal__button--secondary {
  background: #ffffff;
  color: #374151;
  border: 1px solid #e5e7eb;

  &:hover {
    background: #f9fafb;
    border-color: #d1d5db;
  }

  &:active {
    background: #f3f4f6;
  }
}
</style>