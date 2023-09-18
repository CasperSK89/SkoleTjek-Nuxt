<template>
    <div  class="card w-60 bg-base-100 shadowy h-[calc(100vh-11.5rem)]  ">
            <div class="card-body">
                <h2 class="card-title mx-auto pb-2">Ugeskema</h2>
                <RadialMedalProgress :weekschedule="weekschedule" :completed-tasks-sum="taskSum"></RadialMedalProgress>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
</template>

<script setup lang="ts">
const taskSum = ref(3)
const weekschedule = ref({
    bronze: 3,
    silver: 4,
    gold: 5,
    hasMedals: true,
    taskSum: 5,
})
</script>

<style scoped>

</style>