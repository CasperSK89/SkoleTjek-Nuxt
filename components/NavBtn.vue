<template>
    <NuxtLink :href="props.path"
    :class="{'border-r ': props.side == 'right', 'border-l ': props.side == 'left'}" 
    class=" w-28 bg-transparent text-md uppercase font-semibold flex items-center justify-center rounded-none border-x-primary btn-xs h-full border-y-0 hover:bg-opacity-40 hover:bg-base-300 ">
        <div class="flex flex-col w-full text-center">
            <i :class="props.icon" class="text-xl"></i>
            {{ props.name }}
        </div>
        
    </NuxtLink>
</template>

<script lang="ts" setup>

const props = defineProps({
    path: String,
    name: String,
    side: String,
    icon: String
})

defineNuxtLink({
    componentName: "MyCustomLink",
    activeClass: "bg-gray-200 font-bold",
    exactActiveClass: "bg-green-200 font-medium",
});

</script>

<style scoped>
.router-link-active {
    @apply bg-base-300;
    @apply bg-opacity-40;
    @apply text-primary;
}
</style>