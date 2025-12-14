<template>
  <div class="auth-section-signup__information"
    :style="{ background: 'linear-gradient(90deg, #4F46E5 0%, #3730A3 100%)' }">
    <img src="@/assets/auth/signup-image.png" alt="signu-image" class="auth-section__signup-image">
    <div class="signup-description">
      <h1>SynTask</h1>
      <p>Smart Task and Project Management Platform</p>
      <ul class="signup-description-ul">
        <li v-for="item in SIGNUP_ABOUT" :key="item.id">
          <img src="@/assets/auth/galochka.svg" alt="Galochka">
          <p>{{ item.text }}</p>
        </li>
      </ul>
    </div>
  </div>

  <div class="auth-signup-section__form-section auth-section__form-section">
    <h1 class="auth-section__form-title">Create your account</h1>
    <p class="auth-section__form-subtitle">Start managing your tasks efficiently</p>
    <form action="#" class="auth-section__form">
      <div class="auth-section__form-input__section">
        <div class="auth-section__form-input__section-name_section">
          <div>
            <label for="firstName">First Name</label>
            <input type="text" name="firstName">
          </div>
          <div>
            <label for="lastName">Last Name</label>
            <input type="text" name="lastName">
          </div>
        </div>
        <label for="email" class="email-label">Email address</label>
        <input name="email" type="text" class="email-input">
        <label for="password" class="password-label">Password</label>
        <input name="password" class="password-input" type="password">
        <label for="confirmPassword" class="password-label">Confirm Password</label>
        <input name="confirmPassword" class="password-input" type="password">
      </div>
      <button>Sign Up</button>
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
    <p class="dont-have-account">Already have an account? <span @click="changeAuthMode">SignIn</span></p>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['changeAuthMode'])
const changeAuthMode = () => {
  emit('changeAuthMode')
}
const SIGNUP_ABOUT = [{
  id: 1,
  text: "Advanced API Infrastructure"
}, {
  id: 2,
  text: "User-friendly Interface"
}, {
  id: 3,
  text: "Powerful Integrations"
}]
</script>