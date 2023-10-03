<template>
    <div >
        <div @mouseenter="showDropdown = true" @mouseleave="showDropdown = false"
            class=" bg-transparent text-md uppercase font-semibold flex items-center justify-center rounded-none  border-x-primary border-x-2 btn-xs h-full border-y-0 hover:bg-opacity-40 hover:bg-base-300 ">
            <div class="flex flex-col w-full text-center">
                <i class="fa-solid fa-people-group text-xl"></i>
                Mine hold
            </div>
        </div>
        <Transition name="fade">
            <div @mouseleave="showDropdown = false" @mouseenter="showDropdown = true" v-show="showDropdown"
                class="shadow-xl container w-fit border-x border-b rounded-b-lg mx-auto h-fit left-[50%] right-[50%] border-t-primary border-t-2 -translate-x-[50%] top-[63px] fixed gap-4 flex flex-row bg-base-200 bg-opacity-80 px-4 pt-4 justify-between backdrop-blur-md ">

                <div v-for="c in groups" class="flex flex-col w-32 ">
                    <p
                        class="uppercase w-full text-center rounded-sm p-0.5 bg-primary-focus font-semibold bg-opacity-40 truncate">
                        {{ c.group.name }}</p>
                    <ul class="menu menu-xs rounded-box w-full px-0 ">
                        <li><NuxtLink :href="`/teacher/${c.groupId}/weekschedules`"><i class="fa-solid fa-magnifying-glass"></i>Ugeskemaer</NuxtLink></li>
                        <li><NuxtLink :href="`/teacher/${c.groupId}/data`"><i class="fa-solid fa-bars-progress"></i>Elev statistik</NuxtLink></li>
                        <li><NuxtLink :href="`/teacher/${c.groupId}/edit`"><i class="fa-regular fa-pen-to-square"></i>Rediger</NuxtLink></li>
                    </ul>
                </div>
                <ul class="menu menu-sm rounded-box w-40 ">
                    <li><a @click="showNewGroup = true"><i class="p-0.5 fa-solid fa-plus"></i>Opret hold</a></li>
                    
                    <p class="font-lilita font-bold  text-center pt-2 text-xl"><span class="text-primary ">Skole</span><span class="text-primary-content">Tjek</span> </p>
                </ul>
            </div>
        </Transition>
        <TeacherNewGroupModal v-model="showNewGroup"></TeacherNewGroupModal>

    </div>
</template>

<script setup lang="ts">

const { currentUser } = useAuthStore()
const { groups } = storeToRefs(useAuthStore())

const showDropdown = ref(false)
const showNewGroup = ref(false)
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