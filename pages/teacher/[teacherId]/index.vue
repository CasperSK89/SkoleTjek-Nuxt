<template>
    <div>
      <!-- Use the modal component with v-model -->
      <TeacherNewGroupModal v-model="showEditModal"></TeacherNewGroupModal>
  
      <!-- Handle modal open/close in the parent component -->
      <button @click="showEditModal = !showEditModal" class="btn">Toggle Modal</button>
    </div>
  </template>
  
<script setup>
import { ref } from 'vue';

const showEditModal = ref(false);
</script>