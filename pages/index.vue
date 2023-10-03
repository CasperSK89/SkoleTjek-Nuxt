<template>
    <div class=" flex flex-wrap gap-8 m-auto">
        <div class="card w-fit h-fit  bg-slate-100 border">
            <div class="card-body prose ">
                <h2 class="card-title">Alle brugere</h2>
                <pre v-for="user in allUsers"> {{ user }}</pre>
            </div>
        </div>
        <div>
            <div class="card w-fit h-fit  bg-base-100 border">
                <div class="card-body prose">
                    <h2 class="card-title">En bruger</h2>
                    <div class="join">
                        <input type="text" class="input input-bordered join-item" v-model="userName">
                        <button @click="singleUser()" :disabled="!userName" class="btn join-item">Find</button>
                    </div>
                    <pre v-if="user"> Bruger: {{ user }}</pre>
                </div>
            </div>
        </div>
        <div class="card w-fit h-fit bg-base-100 border">
            <div class="card-body prose">
                <h2 class="card-title">Din info:</h2>
                <pre> {{ currentUser }}</pre>
            </div>
        </div>
    </div>
</template>
  

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';

const { $client } = useNuxtApp();
const { usersRouter } = $client
const { currentUser } = useAuthStore()

const userName = ref<string>()
const user = ref<UserByName>()
const allUsers = ref<UsersList | null>(null)



await userList()

async function userList() {

    const { data, error } = await usersRouter.list.useQuery()

    if (error.value) {
        console.log(error.value.message);
    } else {
        allUsers.value = data.value
    }

}
async function singleUser() {

    if (userName.value) {
        const resp = await usersRouter.byName.query({ name: userName.value })

        user.value = resp

    } else {
        return;
    }
}
</script>

<style scoped></style>
