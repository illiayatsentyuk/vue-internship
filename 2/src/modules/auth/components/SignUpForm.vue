<template lang="pug">
  .auth-section-signup__information(:style="{ background: 'linear-gradient(90deg, #4F46E5 0%, #3730A3 100%)' }" )
    img(src="@/assets/auth/signup-image.png" alt="signu-image" class="auth-section__signup-image")
    .signup-description
      h1 SynTask
      p Smart Task and Project Management Platform
      ul.signup-description-ul
        li(v-for="item in SIGNUP_ABOUT" :key="item.id")
          img(src="@/assets/auth/galochka.svg" alt="Galochka")
          p {{ item.text }}

  .auth-signup-section__form-section.auth-section__form-section
    h1.auth-section__form-title Create your account
    p.auth-section__form-subtitle Start managing your tasks efficiently
    form.auth-section__form
      .auth-section__form-input__section
        .auth-section__form-input__section-name_section
          div
            label(for="firstName") First Name
            input(type="text" name="firstName")
          div
            label(for="lastName") Last Name
            input(type="text" name="lastName")
        label(for="email" class="email-label") Email address
        input(name="email" type="text" class="email-input")
        label(for="password" class="password-label") Password
        input(name="password" class="password-input" type="password")
        label(for="confirmPassword" class="password-label") Confirm Password
        input(name="confirmPassword" class="password-input" type="password")
      button Sign Up
    p.continue-with Or continue with
    .auth-section__form-section__types-of-login
      .auth-section__form-section__types-of-login__item
        img(src="@/assets/auth/google.svg" alt="")
        p Google
      .auth-section__form-section__types-of-login__item
        img(src="@/assets/auth/github.svg" alt="")
        p GitHub
    p.dont-have-account Already have an account? 
        span(@click="changeAuthMode") SignIn
</template>
<script setup lang="ts">
const emit = defineEmits(['changeAuthMode'])
const changeAuthMode = () => {
  emit('changeAuthMode')
}
const SIGNUP_ABOUT = [
  {
    id: 1,
    text: 'Advanced API Infrastructure',
  },
  {
    id: 2,
    text: 'User-friendly Interface',
  },
  {
    id: 3,
    text: 'Powerful Integrations',
  },
]
</script>
