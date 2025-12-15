<template lang="pug">
  .auth-section__information
    img(src="@/assets/auth/signin-image.png" alt="signin-image" class="auth-section__signin-image")
    .auth-section__text
      h1 Welcome to SynTask
      p Manage your tasks and projects efficiently
  .auth-section__form-section
    h1.auth-section__form-title Sign in to SynTask
    p.auth-section__form-subtitle Start managing your tasks efficiently
    form.auth-section__form
      .auth-section__form-input__section
        label(for="email" class="email-label") Email address
        input(name="email" type="text" class="email-input" placeholder="Enter your email")
        label(for="password" class="password-label") Password
        input(name="password" class="password-input" type="password" placeholder="Enter your password")
      .auth-section__form-chexbox
        input(type="checkbox")
        p Remember me
      button Sign in
    p.continue-with Or continue with
    .auth-section__form-section__types-of-login
      .auth-section__form-section__types-of-login__item
        img(src="@/assets/auth/google.svg" alt="")
        p Google
      .auth-section__form-section__types-of-login__item
        img(src="@/assets/auth/github.svg" alt="")
        p GitHub
    p.dont-have-account Don't have an account? 
        span(@click="changeAuthMode") Register now
</template>

<script setup lang="ts">
const emit = defineEmits(['changeAuthMode'])
const changeAuthMode = () => {
  emit('changeAuthMode')
}
</script>
<style lang="scss" scoped>

</style>