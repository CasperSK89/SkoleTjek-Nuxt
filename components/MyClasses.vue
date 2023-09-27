<template>
    <div class="">
        <div @mouseenter="showDropdown = true" @mouseleave="showDropdown = false"
            class="bg-transparent text-md uppercase font-semibold flex items-center justify-center rounded-none w-36 border-x-primary border-x-2 btn-xs h-14 border-y-0 hover:bg-opacity-40 hover:bg-base-300 ">
            <div class="flex flex-col w-full text-center">
                <i class="fa-solid fa-school text-xl"></i>
                mine klasser
            </div>
        </div>
        <Transition name="fade">
            <div @mouseleave="showDropdown = false" @mouseenter="showDropdown = true" v-show="showDropdown"
                class="z-[-1] w-fit border-x-4 border-b-4 rounded-b-lg mx-auto h-fit left-[50%] right-[50%] border-t-primary border-t-2 -translate-x-[50%] top-[60px] fixed gap-4 flex flex-row bg-base-200 backdrop-blur-md bg-opacity-80 px-4 pt-4 justify-between ">

                <div v-for="c in classes" class="flex flex-col w-32 ">
                    <p
                        class="uppercase w-full text-center rounded-sm p-0.5 bg-primary-focus font-semibold bg-opacity-40 truncate">
                        {{ c.name }}</p>
                    <ul class="menu menu-xs rounded-box w-full px-0 ">
                        <li><a><i class="fa-solid fa-magnifying-glass"></i>Ugeskemaer</a></li>
                        <li><a><i class="fa-solid fa-bars-progress"></i>Elev statistik</a></li>
                        <li><a><i class="fa-solid fa-timeline"></i>Status</a></li>
                    </ul>
                </div>
                <ul class="menu menu-sm rounded-box w-40 ">
                    <li><a><i class="p-0.5 fa-solid fa-plus"></i>Opret hold</a></li>
                    <li><a><i class="fa-regular fa-pen-to-square"></i>Rediger hold</a></li>
                    <p class="font-bungee font-bold uppercase text-center pt-2 text-xl text-primary-content">Skoletjek</p>
                </ul>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
const showDropdown = ref(false)

const toggleDropdown = () => {
    // Add a small delay before showing the dropdown
    setTimeout(() => {
        showDropdown.value = false
    }, 500)
}

const classes = ref([{
    name: "5B"
}, {
    name: "6B"
}, {
    name: "4B"
}
])
</script>

<style ></style>