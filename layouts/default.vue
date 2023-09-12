<template>
    <div class="drawer min-h-screen">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
            <!-- Navbar -->
            <div
                class="w-full navbar h-14 bg-base-200 backdrop-blur-md bg-opacity-70 shadow-xl border-b-4 border-base-300 sticky top-0 z-10">
                <div v-motion :initial="{ opacity: 0, x: -10 }" :visible="{ opacity: 1, x: 0 }" class="flex-none md:hidden">
                    <label for="my-drawer-3" class="btn btn-square btn-ghost text-2xl">
                        <i class="fa-solid fa-align-justify"></i>
                    </label>
                    <div class="text-4xl font-semibold pl-2 md:pl-4 text-primary font-bungee hover:text-primary-focus">
                        <NuxtLink to="/"> SkoleTjek </NuxtLink>
                    </div>
                </div>
                <div class="justify-between flex w-full ">
                    <div
                        class="text-4xl font-semibold pl-2 md:pl-4 text-primary font-bungee hidden md:block hover:text-primary-focus">
                        <NuxtLink to="/"> SkoleTjek </NuxtLink>
                    </div>
                    <div class="flex gap-2">
                        <div class="dropdown">
                            <label tabindex="0" class="btn btn-outline  btn-sm">Click</label>
                            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                        <NuxtLink class="hidden md:block" to="/about">
                            <button class="btn btn-outline  btn-sm ">
                                About
                            </button>
                        </NuxtLink>
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
            <ul class="menu p-4 w-80 min-h-full bg-base-200">
                <!-- Sidebar content here -->
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>

            </ul>

        </div>
    </div>
</template>

<script setup lang="ts">

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