<template>
  <div class="prose">
<h1>Dine hold </h1>
    hejsa {{ $route.params.groupId }}
  </div>
</template>
  
<script setup>

const route = useRoute()
const id = route.params

console.log(id);
</script>