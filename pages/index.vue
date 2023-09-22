<template>
    <div class=" flex  gap-8">
        <div>
            <div class="card w-96 bg-base-100 shadow-xl border-4">
                <div class="card-body ">
                    <h2 class="card-title">Alle brugere</h2>
                    <li v-if="allUsers" v-for="user in allUsers"> {{ user }}</li>
                </div>
            </div>
        </div>
        <div>
            <div class="card w-96 bg-base-100 shadow-xl border-4">
                <div class="card-body">
                    <h2 class="card-title">En bruger</h2>
                    <div class="join">
                        <input type="text" class="input input-bordered join-item" v-model="userName">
                        <button @click="singleUser()" :disabled="!userName" class="btn join-item">Find</button>
                    </div>
                    <pre v-if="user"> Bruger: {{ user }}</pre>
                </div>
            </div>
        </div>
    </div>
</template>
  

<script setup lang="ts">

const { $client } = useNuxtApp();
const { userRouter } = $client
const allUsers = await userRouter.list.useQuery().data


const userName = ref<string>()

const user = ref<UserByName>()

async function singleUser() {
    if (userName.value) {
        const resp = await userRouter.byName.query({ name: userName.value })

        user.value = resp

    } else {
        return;
    }
}
</script>

<style scoped></style>
