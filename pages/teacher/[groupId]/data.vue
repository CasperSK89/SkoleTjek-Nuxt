<template>
    <div class="prose max-w-full w-full">
        <h1>Elev statistik for {{ currentGroup?.name }} </h1>
        <pre class="max-w-6xl w-full">
             {{ groups?.find((x) => x.id === $route.params.groupId)?.name }}
             {{ $route.params.groupId }}
        </pre>

    </div>
</template>

<script setup lang="ts">
const { groups } = useAuthStore()
const route = useRoute()
const currentGroup = ref(groups?.find((x) => x.id === route.params.groupId))



</script>

<style scoped></style>