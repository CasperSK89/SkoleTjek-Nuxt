<template>
    <div class=" flex flex-wrap gap-8 m-auto">
        <div class="card w-fit h-fit  bg-base-100 shadow-xl border-4">
            <div class="card-body prose ">
                <h2 class="card-title">Alle brugere</h2>
                <pre v-for="user in allUsers"> {{ user }}</pre>
            </div>
        </div>
        <div>
            <div class="card w-fit h-fit  bg-base-100 shadow-xl border-4">
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
        <div class="card w-fit h-fit bg-base-100 shadow-xl border-4 ">
            <div class="card-body prose">
                <h2 class="card-title">Din info:</h2>
                <pre> {{ currentUser }}</pre>
            </div>
        </div>
    </div>
</template>
  

<script setup lang="ts">
const { data: currentUser } = useAuth()
const { $client } = useNuxtApp();
const { userRouter } = $client

const userName = ref<string>()
const user = ref<UserByName>()
const allUsers = ref<UsersList| null>(null)


definePageMeta({ auth: false })

await userList()

async function userList() {
    
    const {data, error} = await userRouter.list.useQuery()

    if (error.value) {
        console.log(error.value.message);
    } else {
        allUsers.value = data.value
    }
    
}
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
