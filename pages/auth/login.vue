<template>
    <div class="card bg-base-100 border-4 mx-auto h-fit my-auto" :class="{ 'border-success': succes }">
        <div class="card-body">
            <form @submit.prevent="login(username, password)">
                <div class="mb-4">
                    <label for="username" class="label-text label">Brugernavn:</label>
                    <input type="text" id="username" v-model="username" class="input input-bordered" required />
                    <label for="username" class=" label absolute py-1 left-10" v-if="showErr">
                        <span class="label-text-alt text-error"> Brugernavn eller kodeord er forkert.</span>
                    </label>
                </div>
                <div class="mb-4">
                    <label for="password" class="label-text label">Kodeord:</label>
                    <input type="password" id="password" v-model="password" class="input input-bordered" required
                        autocomplete="on" />
                </div>
                <button type="submit" class="w-full btn-success btn" :disabled="succes">
                    <i v-if="!succes" class="fa-solid fa-right-to-bracket"></i>
                    <span v-else class="loading loading-spinner"></span>
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

const { authorize, groupsByUser } = useAuthStore()
const succes = ref(false)
const showErr = ref(false)
const username = ref('')
const password = ref('')

const login = async (username: string, password: string) => {
    const response = await signIn('credentials', { redirect: false, username, password })
    if (response && response.error) {
        showErr.value = true
        return
    }
    succes.value = true
    await authorize()
    await groupsByUser()
    navigate()
}

function navigate() {
    navigateTo({ path: '/' })
}
</script>
  
<style scoped></style>