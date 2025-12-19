<template lang="pug">
  .sign-in-form__information
    img.sign-in-form__signin-image(src="@/assets/auth/signin-image.png" alt="signin-image")
    .sign-in-form__text
      h1.sign-in-form__text-title Welcome to SynTask
      p.sign-in-form__text-subtitle Manage your tasks and projects efficiently
  .sign-in-form__form-section
    h1.sign-in-form__form-title Sign in to SynTask
    p.sign-in-form__form-subtitle Start managing your tasks efficiently
    form.sign-in-form__form
      .sign-in-form__form-input-section
        label.sign-in-form__label(for="email") Email address
        input.sign-in-form__input(
          name="email"
          type="text"
          id="email"
          placeholder="Enter your email"
        )
        label.sign-in-form__label(for="password") Password
        input.sign-in-form__input(
          name="password"
          id="password"
          type="password"
          placeholder="Enter your password"
        )
      .sign-in-form__form-checkbox
        input.sign-in-form__checkbox-input(type="checkbox")
        p.sign-in-form__checkbox-label Remember me
      button.sign-in-form__submit-button Sign in
    p.sign-in-form__continue-with Or continue with
    .sign-in-form__types-of-login
      .sign-in-form__types-of-login-item
        img.sign-in-form__types-of-login-icon(src="@/assets/auth/google.svg" alt="Google")
        p.sign-in-form__types-of-login-text Google
      .sign-in-form__types-of-login-item
        img.sign-in-form__types-of-login-icon(src="@/assets/auth/github.svg" alt="GitHub")
        p.sign-in-form__types-of-login-text GitHub
    p.sign-in-form__dont-have-account
      | Don't have an account? 
      span.sign-in-form__dont-have-account-link(@click="changeAuthMode") Register now
</template>

<script setup lang="ts">
const emit = defineEmits(['changeAuthMode'])
const changeAuthMode = () => {
  emit('changeAuthMode')
}
</script>
<style lang="scss" scoped>
.sign-in-form__information {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 50%;
  height: 100vh;
}

.sign-in-form__signin-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: brightness(0.8);
  z-index: -999;
}

.sign-in-form__text {
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #ffffff;
}

.sign-in-form__text-title {
  font-family: Inter;
  font-weight: 700;
  font-style: Bold;
  font-size: 36px;
  line-height: 36px;
  letter-spacing: 0%;
  text-align: center;
}

.sign-in-form__text-subtitle {
  font-family: Inter;
  font-weight: 400;
  font-style: Regular;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: center;
}

.sign-in-form__form-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 132px 152px;
  width: 50%;
}

.sign-in-form__form-title {
  margin-bottom: 10px;
  color: #111827;
  font-family: Inter;
  font-weight: 700;
  font-style: Bold;
  font-size: 30px;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: center;
}

.sign-in-form__form-subtitle {
  margin-bottom: 24px;
  font-family: Inter;
  font-weight: 400;
  font-style: Regular;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0%;
  text-align: center;
}

.sign-in-form__form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.sign-in-form__form-input-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.sign-in-form__label {
  font-family: Inter;
  font-weight: 500;
  font-style: Medium;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #374151;
  margin-bottom: 6px;
}

.sign-in-form__input {
  padding: 13px 16px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  margin-bottom: 16px;

  &:last-of-type {
    margin-bottom: 24px;
  }
}

.sign-in-form__form-checkbox {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  align-items: center;
}

.sign-in-form__checkbox-input {
  cursor: pointer;
}

.sign-in-form__checkbox-label {
  font-family: Inter;
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  margin: 0;
  cursor: pointer;
}

.sign-in-form__submit-button {
  background: #4f46e5;
  color: #fff;
  font-family: Inter;
  font-weight: 500;
  font-style: Medium;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  border: none;
  box-shadow: 0px 1px 2px 0px #0000000d;
  border-radius: 8px;
  width: 100%;
  padding: 14px;
  margin-bottom: 24px;
  cursor: pointer;
  transition: filter 0.15s ease;

  &:hover {
    filter: brightness(0.8);
  }
}

.sign-in-form__continue-with {
  font-family: Inter;
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #6b7280;
  margin-bottom: 34px;
  text-align: center;
}

.sign-in-form__types-of-login {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.sign-in-form__types-of-login-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  width: 216px;
  height: 46px;
  border: 1px solid #d1d5db;
  box-shadow: 0px 1px 2px 0px #0000000d;
  border-radius: 8px;
  font-family: Inter;
  font-weight: 500;
  font-style: Medium;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: #374151;
  cursor: pointer;
  transition: filter 0.15s ease;

  &:hover {
    filter: brightness(0.8);
  }
}

.sign-in-form__types-of-login-icon {
  // Icon styles
}

.sign-in-form__types-of-login-text {
  margin: 0;
}

.sign-in-form__dont-have-account {
  font-family: Inter;
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0%;
  text-align: center;
  color: #4b5563;
}

.sign-in-form__dont-have-account-link {
  font-weight: 500;
  color: #4f46e5;
  cursor: pointer;
  transition: color 0.15s ease;

  &:hover {
    color: #4338ca;
  }
}
</style>
