<template>
    <div class="drawer min-h-screen ">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
            <!-- Navbar -->
            <header class=" z-10 navbar h-14 border-b border-base-300 sticky top-0">
                <div class="backdrop-hack w-full">
                    <Transition name="fade">
                        <label v-if="!largerThanMd" for="my-drawer" class="btn btn-square btn-ghost text-2xl">
                            <i class="fa-solid fa-align-justify"></i>
                        </label>
                    </Transition>
                    <div class="grid grid-cols-3 w-full items-center px-4">
                        <div class="col-span-1">
                            <div
                                class="md:text-[2.5rem] text-2xl font-extrabold font-lilita hover:text-primary-focus">
                                <NuxtLink to="/"> <span class="text-primary ">Skole</span><span class="tex">Tjek</span> </NuxtLink>
                            </div>
                        </div>
                        <div class="col-span-1 justify-center  h-14">
                            <div v-if="currentUser" class="md:inline-grid hidden grid-flow-col auto-cols-min justify-center  h-full w-full">
                                <TeacherNewWeekschedule v-if="currentUser.role > 1" side='left'
                                   >
                                </TeacherNewWeekschedule>
                                <TeacherMenuDropdown v-if="currentUser.role > 1"></TeacherMenuDropdown>
                                <NavBtn name="Bibliotek" path='/teacher/library' side='right' icon="fa-solid fa-book">
                                </NavBtn><NavBtn name="Skoleadmin" path='/admin/school-admin' side='right' icon="fa-solid fa-lock">
                                </NavBtn>
                            </div>
                        </div>

                        <div class="col-span-1 flex justify-end">
                            <Hello :is-logged-in="currentUser != null" :user-name="currentUser?.name"></Hello>
                        </div>
                    </div>

                </div>

            </header>

            <div class="md:p-8 p-4 max-w-7xl mx-auto w-full border-x shadow-inner overflow-y-auto flex h-full bg-base-100">
                <Suspense>

                    <NuxtPage />
                    <template #fallback>
                        Loading...
                    </template>
                </Suspense>
            </div>

            <footer
                class="footer footer-center bg-base-200 border-t border-base-300 sticky bottom-0 h-10 backdrop-blur-md bg-opacity-70">
                <aside>
                    <p>Copyright © 2023 - All right reserved SkoleTjek</p>
                </aside>
            </footer>

        </div>
        <div class="drawer-side">
            <label for="my-drawer-3" class="drawer-overlay"></label>
            <ul class="menu p-4 pt-20 w-80 min-h-full bg-base-200 ">
                <!-- Sidebar content here -->
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>

            </ul>

        </div>
    </div>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
const currentUser = ref(useAuthStore().currentUser)
const breakpoints = useBreakpoints(breakpointsTailwind)
const largerThanMd = breakpoints.greaterOrEqual('md') // only larger than sm
</script>

<style >
body {
    overflow-y: visible;
@apply bg-zinc-50
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