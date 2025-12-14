<template>
  <div class="auth-section__information">
    <img src="@/assets/auth/signin-image.png" alt="signin-image" class="auth-section__signin-image">
    <div class="auth-section__text">
      <h1>Welcome to SynTask</h1>
      <p>Manage your tasks and projects efficiently</p>
    </div>
  </div>
  <div class="auth-section__form-section">
    <h1 class="auth-section__form-title">Sign in to SynTask</h1>
    <p class="auth-section__form-subtitle">Start managing your tasks efficiently</p>
    <form action="#" class="auth-section__form">
      <div class="auth-section__form-input__section">
        <label for="email" class="email-label">Email address</label>
        <input name="email" type="text" class="email-input" placeholder="Enter your email">
        <label for="password" class="password-label">Password</label>
        <input name="password" class="password-input" type="password" placeholder="Enter your password">
      </div>
      <div class="auth-section__form-chexbox">
        <input type="checkbox">
        <p>Remember me</p>
      </div>
      <button>Sign in</button>
    </form>
    <p class="continue-with">Or continue with</p>
    <div class="auth-section__form-section__types-of-login">
      <div class="auth-section__form-section__types-of-login__item">
        <img src="@/assets/auth/google.svg" alt="">
        <p>Google</p>
      </div>
      <div class="auth-section__form-section__types-of-login__item">
        <img src="@/assets/auth/github.svg" alt="">
        <p>GitHub</p>
      </div>
    </div>
    <p class="dont-have-account">Don't have an account? <span @click="changeAuthMode">Register now</span></p>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['changeAuthMode'])
const changeAuthMode = () => {
  emit('changeAuthMode')
}
</script>