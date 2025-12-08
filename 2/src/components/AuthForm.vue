<script setup lang="ts">
import {ref} from "vue"
import { AuthModes } from "@/enums";

const mode = ref<AuthModes>(AuthModes.SIGNIN)

function changeAuthMode(){
    mode.value = mode.value === AuthModes.SIGNIN ? AuthModes.SIGNUP : AuthModes.SIGNIN
}


</script>

<template>
    <div class="auth-section">
        <div class="auth-section__information">
            <img src="@/assets/signin-image.png" alt="signin-image" class="auth-section__signin-image">
            <div class="auth-section__text">
                <h1>Welcome to SynTask</h1>
                <p>Manage your tasks and projects efficiently</p>
            </div>
        </div>
        <div v-if="mode===AuthModes.SIGNIN" class="auth-section__form-section">
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
                    <img src="@/assets/google.svg" alt="">
                    <p>Google</p>
                </div>
                <div class="auth-section__form-section__types-of-login__item">                   
                    <img src="@/assets/github.svg" alt="">
                    <p>GitHub</p>
                </div>
            </div>
            <p class="dont-have-account">Don't have an account? <span @click="changeAuthMode">Register now</span></p>
        </div>
        <div v-if="mode===AuthModes.SIGNUP" class="auth-section__form-section">SignUp</div>
    </div>
</template>

<style scoped>
.dont-have-account{
    font-family: Inter;
    font-weight: 400;
    font-style: Regular;
    font-size: 14px;
    leading-trim: NONE;
    line-height: 14px;
    letter-spacing: 0%;
    text-align: center;
    color:#4b5563;
}
.dont-have-account > span{
    font-weight: 500;
    color:#4F46E5;
    cursor:pointer
}

.continue-with{
    font-family: Inter;
    font-weight: 400;
    font-style: Regular;
    font-size: 14px;
    leading-trim: NONE;
    line-height: 100%;
    letter-spacing: 0%;
    color:#6B7280;
}
.auth-section__form-section__types-of-login{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom:25px;
}
.auth-section__form-section__types-of-login__item{
    display: flex;
    align-items: center;
    justify-content: center;
    gap:7px;
    padding:14px 70px;
    border:1px solid #D1D5DB;
    box-shadow: 0px 1px 2px 0px #0000000D;
    border-radius: 8px;
    font-family: Inter;
    font-weight: 500;
    font-style: Medium;
    font-size: 14px;
    leading-trim: NONE;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    color: #374151;
    cursor: pointer;
}
.auth-section__form-section__types-of-login__item:hover{
    filter:brightness(0.8);
}
.auth-section{
    height: 100vh;
    display: flex;
}
.auth-section__information{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width:50%;
    height: 100%;
}
.auth-form{
    width:50%;
    height: 100%;
}

.auth-section__signin-image{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    filter:brightness(0.8);
    z-index:-999;
}
.auth-section__text{
    display: flex;
    flex-direction: column;
    gap:16px;
    color:#ffffff;
}
.auth-section__text > h1{
    font-family: Inter;
    font-weight: 700;
    font-style: Bold;
    font-size: 36px;
    leading-trim: NONE;
    line-height: 36px;
    letter-spacing: 0%;
    text-align: center;
}
.auth-section__text > p{
    font-family: Inter;
    font-weight: 400;
    font-style: Regular;
    font-size: 20px;
    leading-trim: NONE;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: center;
}
.auth-section__form-section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:132px 152px;
    width:50%;
}
.auth-section__form-section > h1{
    margin-bottom:10px;
    color: #111827;
    font-family: Inter;
    font-weight: 700;
    font-style: Bold;
    font-size: 30px;
    leading-trim: NONE;
    line-height: 30px;
    letter-spacing: 0%;
    text-align: center;

}
.auth-section__form-section > p{
    margin-bottom: 34px;
    font-family: Inter;
    font-weight: 400;
    font-style: Regular;
    font-size: 16px;
    leading-trim: NONE;
    line-height: 16px;
    letter-spacing: 0%;
    text-align: center;

}
.auth-section__form{
    display:flex;
    flex-direction: column;
    width:100%;
}
.auth-section__form-input__section{
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.auth-section__form-chexbox{
    display: flex;
    gap:8px;
    margin-bottom:24px;
}

.auth-section__form-input__section > input{
    padding:13px 16px;
    border-radius: 8px;
    border:1px solid #D1D5DB;
    margin-bottom:16px;
}
.auth-section__form-input__section > input:last-child{
    margin-bottom:24px;
}

.auth-section__form-input__section > label{
    font-family: Inter;
    font-weight: 500;
    font-style: Medium;
    font-size: 14px;
    leading-trim: NONE;
    line-height: 100%;
    letter-spacing: 0%;
    color:#374151;
    margin-bottom:6px;
}
.auth-section__form-chexbox > p{
    font-family: Inter;
    font-weight: 400;
    font-style: Regular;
    font-size: 14px;
    leading-trim: NONE;
    line-height: 100%;
    letter-spacing: 0%;
}

.auth-section__form > button {
    background: #4F46E5;
    color:#fff;
    font-family: Inter;
    font-weight: 500;
    font-style: Medium;
    font-size: 14px;
    leading-trim: NONE;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    border: none;
    box-shadow: 0px 1px 2px 0px #0000000D;
    border-radius: 8px;
    width:100%;
    padding:14px;
    margin-bottom:24px;
}
.auth-section__form > button:hover{
    filter:brightness(0.8)
}
</style>