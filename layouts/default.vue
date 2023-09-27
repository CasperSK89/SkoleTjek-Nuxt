<template>
    <div class="drawer min-h-screen select-none">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
            <!-- Navbar -->
            <header class=" z-10 navbar h-14  shadow-xl border-b-4 border-base-300 sticky top-0">
                <div class="backdrop-hack w-full ">
                    <Transition name="fade">
                        <label v-if="!largerThanMd" for="my-drawer" class="btn btn-square btn-ghost text-2xl">
                            <i class="fa-solid fa-align-justify"></i>
                        </label>
                    </Transition>
                    <div class="flex flex-row justify-between w-full items-center">
                        <div class="w-56 shrink-0">
                            <div class="text-4xl font-semibold  text-primary font-bungee hover:text-primary-focus">
                                <NuxtLink to="/"> SkoleTjek </NuxtLink>
                            </div>
                        </div>
                        <div class="inline-grid grid-flow-col auto-cols-fr">
                            <NavBtn name="Nyt ugeskema" path='/teacher/weekschedules/edit/[id]' side='left'
                                icon="fa-solid fa-folder-plus">
                            </NavBtn>
                            <MyClasses></MyClasses>
                            <NavBtn name="Bibliotek" path='/teacher/library' side='right' icon="fa-solid fa-book"></NavBtn>
                        </div>
                        <div class="w-56 shrink-0">
                            <Hello></Hello>
                        </div>
                    </div>
                </div>

            </header>

            <div class="md:p-8 p-4 overflow-y-auto flex h-full ">
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
const largerThanMd = breakpoints.greaterOrEqual('md') // only larger than sm
</script>

<style >
body {
    overflow-y: visible;
    background: url(../assets/css/asphalt-texture.jpg) repeat center center fixed;
    background-size: 45%;
}

.backdrop-hack::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    @apply bg-base-200 backdrop-blur-md bg-opacity-80;
    z-index: -1;
}
</style>