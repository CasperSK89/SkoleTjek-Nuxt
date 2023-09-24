<template>
    <div class="card bg-base-100 border-4 mx-auto h-fit my-auto">
        <div class="card-body">
            <form @submit.prevent="login(username, password)">
                <div class="mb-4">
                    <label for="username" class="label-text label">Brugernavn:</label>
                    <input type="text" id="username" v-model="username" class="input input-bordered" required />
                </div>
                <div class="mb-4">
                    <label for="password" class="label-text label">Kodeord:</label>
                    <input type="password" id="password" v-model="password"  class="input input-bordered" required autocomplete="on" />
                </div>
                <button type="submit" class="w-full btn-success btn">
                    <i class="fa-solid fa-right-to-bracket"></i>
                    Login
                </button>
            </form>
        </div>
    </div>
</template>
  
<script setup lang="ts">
const { signIn } = useAuth()


definePageMeta({
    auth: {
        unauthenticatedOnly: true,
        navigateAuthenticatedTo: '/',
    }
})

const { $client } = useNuxtApp();
const { userRouter } = $client

const username = ref('')
const password = ref('')

const login = async (username: string, password: string) => {
    const response = await signIn('credentials', { redirect: false, username, password })
    if (response && response.error) {

        console.log(response.error);

        return
    }

    navigateTo({ path: '/' })
}
</script>
  
<style scoped></style>