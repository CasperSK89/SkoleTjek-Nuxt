<template>
  <div class="prose">
<h1>Dine hold </h1>
    hejsa {{ $route.params.groupId }}
    {{ resp[0].group }}

    <button class="btn" @click="showAddModal = true">Tilføj elever</button>
  </div>
</template>
  
<script setup>
const { $client } = useNuxtApp();
const { usersInGroups, usersRouter } = $client

const route = useRoute()
const id = route.params
const showAddModal = ref(false)

const resp = await usersInGroups.groupsByUser.query()

console.log(id);
</script>