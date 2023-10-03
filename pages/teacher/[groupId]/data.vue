<template>
    <div class="prose max-w-full w-full">
        <h1>Elev statistik for {{ groups?.find((x) => x.groupId === $route.params.groupId)?.group.name }} </h1>
        <pre class="max-w-6xl w-full">
             {{ groups?.find((x) => x.groupId === $route.params.groupId)?.group.name }}
             {{ $route.params.groupId }}
        </pre>
    </div>
</template>

<script setup lang="ts">
const { groups } = storeToRefs(useAuthStore())

const currentGroup = ref()


</script>

<style scoped></style>