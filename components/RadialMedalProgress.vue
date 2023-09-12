<template>
    <div class="mx-auto flex">
        <div class="radial-progress  border-4 border-base-200" :style="{ '--value': percentageCompleted }">
            <i v-if="props.weekschedule.hasMedals" :class="medalColor" class="fa-solid fa-medal text-4xl "></i>
            <div v-else>
                <p class="text-4xl font-semibold"> {{ props.completedTasksSum }}</p>
            </div>
        </div>
        <div v-if="props.weekschedule.hasMedals" class="flex flex-col text-center items-center my-auto">
            <p class="text-xs uppercase  i"> Løste opgaver:</p>
            <p class="text-2xl font-semibold"> {{ props.completedTasksSum }}</p>
        </div>

    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    completedTasksSum: { type: Number, required: true },
    weekschedule: { type: Object, required: true },
})
const percentageCompleted = computed(() => {
    return Math.round(props.completedTasksSum / props.weekschedule.taskSum * 100)
})

const medalColor = computed(() => ({
    'text-yellow-300': props.completedTasksSum >= props.weekschedule.gold,
    'text-orange-700': props.completedTasksSum >= props.weekschedule.bronze && props.completedTasksSum < props.weekschedule.silver,
    'text-gray-500': props.completedTasksSum >= props.weekschedule.silver && props.completedTasksSum < props.weekschedule.gold
}))

console.log(medalColor.value);
console.log(props.completedTasksSum);

</script>

<style scoped></style>