<template>
    <div class="">
        <div @mouseenter="showDropdown = true" class="btn bg-transparent rounded-none w-36 border-x-primary btn-xs h-14">Mine
            Klasser
        </div>
        <Transition name="page">
            <div v-show="showDropdown" @mouseleave="showDropdown = false"
                class=" w-8/12 border-x-4 border-b-4 rounded-b-lg mx-auto h-24 left-[50%] right-[50%] border-t-primary border-t-2 -translate-x-[50%] top-[60px] bg-base-200 fixed backdrop-blur-md bg-opacity-80 p-4">
                Menu </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
const showDropdown = ref(false)
</script>

<style scoped></style>