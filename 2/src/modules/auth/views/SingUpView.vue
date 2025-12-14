<template>
    <div class="auth-section">
        <SignUpForm @changeAuthMode="changeAuthMode"/>
    </div>
</template>


<script setup lang="ts">
import { useRouter } from "vue-router";
import SignUpForm from "../components/SignUpForm.vue";

const router = useRouter();
function changeAuthMode() {
    router.push('/auth/signin');
}
</script>


<style>
.signup-description > h1{
    font-family: Inter;
    font-weight: 700;
    font-style: Bold;
    font-size: 36px;
    leading-trim: NONE;
    line-height: 36px;
    letter-spacing: 0%;
    margin-bottom:17px;

}

.signup-description > p{
    font-family: Inter;
    font-weight: 400;
    font-style: Regular;
    font-size: 18px;
    leading-trim: NONE;
    line-height: 18px;
    letter-spacing: 0%;
    margin-bottom:34px;

}

.signup-description-ul > li{
    display: flex;
    gap:12px;
    align-items: center;
    margin-bottom: 26px;
    font-family: Inter;
    font-weight: 400;
    font-style: Regular;
    font-size: 16px;
    leading-trim: NONE;
    line-height: 16px;
    letter-spacing: 0%;

}
.signup-description-ul > li:last-child{
    margin-bottom: 0;
}
.auth-section-signup__information{
    padding-left:64px;
    display: flex;
    position: relative;
    width: 50%;
    align-items: center;
    height: 100vh;
    justify-content: start;
}
.auth-section__signup-image{
    position: absolute;
    z-index: 10;
    top:40%;
    left:40%;
}
.signup-description-ul{
    list-style-type: none;
}
.signup-description{
    z-index:11;
    display: flex;
    flex-direction: column;
    color:#fff;
}
.auth-signup-section__form-section>h1 {
    font-family: Inter;
    font-weight: 700;
    font-style: Bold;
    font-size: 36px;
    leading-trim: NONE;
    line-height: 36px;
    letter-spacing: 0%;
    text-align: center;
    color:#111827;
    margin-bottom:10px;
}

.auth-signup-section__form-section>p {
    font-family: Inter;
    font-weight: 400;
    font-style: Regular;
    font-size: 20px;
    leading-trim: NONE;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: center;
    margin-bottom:24px;
    color:#4B5563;
}
.auth-section__form-input__section-name_section{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom:16px;
}
.auth-section__form-input__section-name_section > div{
    display: flex;
    flex-direction: column;
}
.auth-section__form-input__section-name_section > div > label{
    font-family: Inter;
font-weight: 500;
font-style: Medium;
font-size: 14px;
leading-trim: NONE;
line-height: 100%;
letter-spacing: 0%;
color:#374151;
}
.auth-section__form-input__section-name_section > div > input {
    padding: 13px 16px;
    border-radius: 8px;
    border:1px solid #D1D5DB;
}
.dont-have-account {
    font-family: Inter;
    font-weight: 400;
    font-style: Regular;
    font-size: 14px;
    leading-trim: NONE;
    line-height: 14px;
    letter-spacing: 0%;
    text-align: center;
    color: #4b5563;
}

.dont-have-account>span {
    font-weight: 500;
    color: #4F46E5;
    cursor: pointer
}

.continue-with {
    font-family: Inter;
    font-weight: 400;
    font-style: Regular;
    font-size: 14px;
    leading-trim: NONE;
    line-height: 100%;
    letter-spacing: 0%;
    color: #6B7280;
}

.auth-section__form-section__types-of-login {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
}

.auth-section__form-section__types-of-login__item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    width:216px;
    height: 46px;
    border: 1px solid #D1D5DB;
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

.auth-section__form-section__types-of-login__item:hover {
    filter: brightness(0.8);
}

.auth-section {
    height: 100vh;
    display: flex;
}

.auth-section__information {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 50%;
    height: 100vh;
}

.auth-form {
    width: 50%;
    height: 100%;
}

.auth-section__signin-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: brightness(0.8);
    z-index: -999;
}

.auth-section__text {
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: #ffffff;
}

.auth-section__text>h1 {
    font-family: Inter;
    font-weight: 700;
    font-style: Bold;
    font-size: 36px;
    leading-trim: NONE;
    line-height: 36px;
    letter-spacing: 0%;
    text-align: center;
}

.auth-section__text>p {
    font-family: Inter;
    font-weight: 400;
    font-style: Regular;
    font-size: 20px;
    leading-trim: NONE;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: center;
}
.auth-signup-section__form-section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 71px 132px;
    width: 50%;
}
.auth-section__form-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 132px 152px;
    width: 50%;
}

.auth-section__form-section>h1 {
    margin-bottom: 10px;
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

.auth-section__form-section>p {
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

.auth-section__form {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.auth-section__form-input__section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.auth-section__form-chexbox {
    display: flex;
    gap: 8px;
    margin-bottom: 24px;
}

.auth-section__form-input__section>input {
    padding: 13px 16px;
    border-radius: 8px;
    border: 1px solid #D1D5DB;
    margin-bottom: 16px;
}

.auth-section__form-input__section>input:last-child {
    margin-bottom: 24px;
}

.auth-section__form-input__section>label {
    font-family: Inter;
    font-weight: 500;
    font-style: Medium;
    font-size: 14px;
    leading-trim: NONE;
    line-height: 100%;
    letter-spacing: 0%;
    color: #374151;
    margin-bottom: 6px;
}

.auth-section__form-chexbox>p {
    font-family: Inter;
    font-weight: 400;
    font-style: Regular;
    font-size: 14px;
    leading-trim: NONE;
    line-height: 100%;
    letter-spacing: 0%;
}

.auth-section__form>button {
    background: #4F46E5;
    color: #fff;
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
    width: 100%;
    padding: 14px;
    margin-bottom: 24px;
}

.auth-section__form>button:hover {
    filter: brightness(0.8)
}
</style>