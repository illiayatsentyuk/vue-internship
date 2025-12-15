<template lang="pug">
    .auth-section
        SignUpForm(@changeAuthMode="changeAuthMode")
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import SignUpForm from '../components/SignUpForm.vue'

const router = useRouter()
function changeAuthMode() {
  router.push('/auth/signin')
}
</script>

<style lang="scss">
@import '../styles/auth-common.scss';
</style>
