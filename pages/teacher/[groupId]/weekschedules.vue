<template>
    <div class="prose">
        <h1>Ugeskemaer i {{ currentGroup?.name }}</h1>
    </div>
</template>

<script setup lang="ts">
const { groups } = useAuthStore()
const route = useRoute()
const currentGroup = ref(groups?.find((x) => x.id === route.params.groupId))

</script>

<style scoped></style>