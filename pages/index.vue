<template>
    <div class="mx-auto prose">
        <pre class=""> Bruger: {{ allUsers }} </pre>
        <h2> Alle brugere</h2>
        <li v-for="user in allUsers"> {{ user.firstName }}</li>
        <h2> En bruger</h2>
        <div class="join">
            <input type="number" class="input input-bordered join-item" v-model="user_id">
            <button @click="singleUser()" :disabled="!user_id" class="btn join-item">Find</button>
        </div>
        <p> user_id: {{ user_id }}</p>
        <p> Resp: {{ user }}</p>
        <p>Bruger: </p>
    </div>
</template>
  

<script setup lang="ts">
import { User } from "@/db/schemas/schema"
const { $client } = useNuxtApp();
const { userRouter } = $client
const allUsers = await userRouter.getUsers.useQuery().data
const user_id = ref<number | null>(null)
const user = ref()

async function singleUser() {
    if (user_id.value) {
        const resp = await userRouter.getSingleUser.useQuery({ id: user_id.value }).data
        console.log(resp);
        // You can use the 'User' type here based on your response structure
        user.value = resp;
        // Other code related to user data processing
    } else {
        return;
    }
}
</script>

<style scoped></style>
