<template>
    <div class="border-x-2 border-primary h-full my-auto flex w-36">
        <div class="h-full pl-4 p-2"><i class="fa-regular fa-user text-xl"></i></div>
        <div class="flex flex-col w-full">
            <p class="uppercase text-xs font-semibold text-center truncate  "> {{ currentUser?.name }}</p>
            <div class="px-2 py-1">
                <Transition name="fade">
                    <button v-if="currentUser" @click="signOut()" class="btn btn-xs btn-error btn-outline w-full">
                        Log ud</button>
                </Transition>
                <Transition name="fade">
                    <NuxtLink class="hidden md:block" to="/auth/register">
                        <button v-if="!currentUser" class="btn btn-xs btn-secondary w-full"> Opret bruger</button>
                    </NuxtLink>
                </Transition>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { signOut, data } = useAuth()
const { currentUser } = useAuthStore()
</script>

<style scoped></style>