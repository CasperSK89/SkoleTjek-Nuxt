<template>
        <div class="flex mx-auto ">
            <div v-motion :initial="{ opacity: 0, x: -50 }" :visible="{ opacity: 1, x: 0 }" class="sticky" >
                <WeekscheduleMeta></WeekscheduleMeta>
            </div>
            <div class="flex flex-wrap gap-8 pl-8 justify-center opacity-100 mx-auto">
                <StudentTask></StudentTask>
                <StudentTask></StudentTask>
                <StudentTask></StudentTask>
                <StudentTask></StudentTask>
                <StudentTask></StudentTask>
                <StudentTask></StudentTask>
                <StudentTask></StudentTask>
                <StudentTask></StudentTask>
                <StudentTask></StudentTask>
                <StudentTask></StudentTask>
                <StudentTask></StudentTask>
                <StudentTask></StudentTask>
                <StudentTask></StudentTask>
                <StudentTask></StudentTask>
                <StudentTask></StudentTask>
            </div>
        </div>
</template>
  

<script setup lang="ts">

</script>

<style scoped></style>