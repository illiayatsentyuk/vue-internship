<template lang="pug">
  .auth-section-signup__information(:style="{ background: 'linear-gradient(90deg, #4F46E5 0%, #3730A3 100%)' }" )
    img.auth-section__signup-image(src="@/assets/auth/signup-image.png" alt="signu-image")
    .auth-section__signup-description
      h1.auth-section__signup-description-title SynTask
      p.auth-section__signup-description-subtitle Smart Task and Project Management Platform
      ul.auth-section__signup-description-list
        li.auth-section__signup-description-item(v-for="item in SIGNUP_ABOUT" :key="item.id")
          img(src="@/assets/auth/galochka.svg" alt="Galochka")
          p {{ item.text }}

  .auth-signup-section__form-section.auth-section__form-section
    h1.auth-section__form-title Create your account
    p.auth-section__form-subtitle Start managing your tasks efficiently
    form.auth-section__form
      .auth-section__form-input-section
        .auth-section__form-input-section-name-section
          .auth-section__form-input-section-name-section-item
            label.auth-section__form-input-section-name-section-label(for="firstName") First Name
            input.auth-section__form-input-section-name-section-input(type="text" name="firstName")
          .auth-section__form-input-section-name-section-item
            label.auth-section__form-input-section-name-section-label(for="lastName") Last Name
            input.auth-section__form-input-section-name-section-input(type="text" name="lastName")
        label.auth-section__form-input-section-label(for="email") Email address
        input.auth-section__form-input-section-input(name="email" type="text")
        label.auth-section__form-input-section-label(for="password") Password
        input.auth-section__form-input-section-input(name="password" type="password")
        label.auth-section__form-input-section-label(for="confirmPassword") Confirm Password
        input.auth-section__form-input-section-input(name="confirmPassword" type="password")
      button.auth-section__form-button Sign Up
    p.auth-section__continue-with Or continue with
    .auth-section__form-types-of-login
      .auth-section__form-types-of-login-item
        img(src="@/assets/auth/google.svg" alt="")
        p.auth-section__form-types-of-login-item-text Google
      .auth-section__form-types-of-login-item
        img(src="@/assets/auth/github.svg" alt="")
        p.auth-section__form-types-of-login-item-text GitHub
    p.auth-section__dont-have-account Already have an account? 
        span.auth-section__dont-have-account-link(@click="changeAuthMode") SignIn
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
