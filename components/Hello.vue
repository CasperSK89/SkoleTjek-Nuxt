<template>
    <div class="border-x-2 border-primary h-full my-auto flex w-36">
        <div class="h-full pl-4 p-2"><i class="fa-regular fa-user text-xl"></i></div>
        <div class="flex flex-col w-full">
            <p class="uppercase text-xs font-semibold text-center truncate  "> Hej {{ currentSession?.user?.name }}</p>
            <div class="px-2 py-1">
                <Transition name="fade">
                    <button v-if="currentSession" @click="signOut()" class="btn btn-xs btn-error btn-outline w-full">
                        Log ud</button>
                </Transition>
                <Transition name="fade">
                    <NuxtLink class="hidden md:block" to="/auth/login">
                        <button v-if="!currentSession" class="btn btn-xs btn-secondary w-full"> Log
                            ind</button>
                    </NuxtLink>
                </Transition>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { signOut, data } = useAuth()
const currentSession = (data.value as UserSession)
</script>

<style scoped></style>