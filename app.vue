<template>

  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>


</template>
<script lang="ts" setup>
import axios from 'axios';
import {DsButton} from "~/components/DesignSystem";
import MainLayout from "~/layouts/default.vue";

function postData() {
  axios.post('http://localhost:8000/api/register', {
    "name": "Jorge Toño",
    "email": "toñito@gmail.com",
    "password": "password",
    "password_confirmation": "password"
  })
}


function handleButton() {
  postData();
}

</script>