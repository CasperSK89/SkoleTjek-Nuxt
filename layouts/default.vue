<template>
    <div class="drawer min-h-screen">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
            <!-- Navbar -->
            <div
                class="w-full navbar h-14 bg-base-200 backdrop-blur-md bg-opacity-70 shadow-xl border-b-4 border-base-300 sticky top-0 z-10">
                <div class="flex-none">
                    <Transition name="fade">

                        <label v-if="!largerThanMd" for="my-drawer-3" class="btn btn-square btn-ghost text-2xl">
                            <i class="fa-solid fa-align-justify"></i>
                        </label>
                    </Transition>

                </div>
                <div class="justify-between flex w-full px-3">
                    <div class="text-4xl font-semibold  text-primary font-bungee hover:text-primary-focus">
                        <NuxtLink to="/"> SkoleTjek </NuxtLink>
                    </div>
                    <div class="flex gap-2">
                        <div class="dropdown dropdown-bottom dropdown-end ">
                            <label tabindex="0" class="btn btn-outline  btn-sm">Mine Klasser</label>
                            <ul tabindex="0"
                                class="dropdown-content z-[1] translate-y-[13.5px] menu p-2  bg-base-200 rounded-b-lg w-52 border-base-300 border-b-4 border-x-4 bg-opacity-80  shadow-lg backdrop-blur-md">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                        <NuxtLink class="hidden md:block" to="/about">
                            <button class="btn btn-outline  btn-sm ">
                                About
                            </button>
                        </NuxtLink>
                        <Transition name="fade">
                            <button v-if="currentUser" @click="signOut()" class="btn btn-sm btn-error">
                                Log ud</button>
                        </Transition>
                        <Transition name="fade">

                            <NuxtLink class="hidden md:block" to="/auth/login">
                                <button v-if="!currentUser" class="btn btn-sm btn-secondary"> Log
                                    ind</button>
                            </NuxtLink>
                        </Transition>
                    </div>
                </div>
            </div>
            <!-- Page content here -->
            <div class="md:p-8 p-4 overflow-y-auto flex h-full">
                <Suspense>

                    <NuxtPage />
                    <template #fallback>
                        Loading...
                    </template>
                </Suspense>
            </div>

            <footer
                class="footer footer-center bg-base-200 border-t-4 border-base-300 sticky bottom-0 h-14 backdrop-blur-md bg-opacity-70">
                <aside>
                    <p>Copyright © 2023 - All right reserved SkoleTjek</p>
                </aside>
            </footer>
        </div>
        <div class="drawer-side">
            <label for="my-drawer-3" class="drawer-overlay"></label>
            <ul class="menu p-4 pt-20 w-80 min-h-full bg-base-200">
                <!-- Sidebar content here -->
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>

            </ul>

        </div>
    </div>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)
const { signOut, data: currentUser } = useAuth()

const largerThanMd = breakpoints.greaterOrEqual('md') // only larger than sm
</script>

<style>
body {
    overflow-y: scroll;
    @apply bg-base-100;
    background-image:
        linear-gradient(#eee .12em, transparent .12em);
    background-size: 100% 1.5em;
}
</style>