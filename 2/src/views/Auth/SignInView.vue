<template lang="pug">
  .auth-section
    SignInForm(@changeAuthMode="changeAuthMode")
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import SignInForm from '@/components/Auth/SignInForm.vue'

const router = useRouter()
function changeAuthMode() {
  router.push('/auth/signup')
}
</script>

<style lang="scss">
@import '@/styles/auth-common.scss';
</style>
