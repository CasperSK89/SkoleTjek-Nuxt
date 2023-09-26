<template>
    <NuxtLink :href="props.path" active-class="s" class="bg-transparent text-md uppercase font-semibold flex items-center justify-center rounded-none w-36 border-x-primary border-x-2 btn-xs h-14 border-y-0 hover:bg-opacity-40 hover:bg-base-300 ">
        {{ props.name }}
    </NuxtLink>
</template>

<script lang="ts" setup>

const props= defineProps({
    path: String,
    name: String
})

</script>

<style scoped></style>