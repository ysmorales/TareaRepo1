<template>

    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>


</template>
<script lang="ts" setup>
import axios from 'axios';
import {DsTable} from "~/components/DesignSystem";


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