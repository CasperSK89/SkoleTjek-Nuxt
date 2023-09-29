<template>
    <div class="modal" :class="{ 'modal-open': modelValue }">
        <div class="modal-box relative max-w-full w-auto min-h-fit">
            <button type="button" @click="closeModal" class="btn btn-sm btn-outline btn-circle absolute right-2 top-2">
                ✕
            </button>
            <h3 class="text-lg font-bold text-center uppercase">Opret hold</h3>
            <div class="flex justify-center">

                <ul>
                    <li>Navn:</li>
                    <li>Årgang:</li>
                    <li>Aktiv fra:</li>
                </ul>

            </div>
            <div class="modal-action">

                <ul>
                    <li>Gem</li>
                    <li>Anuller</li>
                </ul>
            </div>
        </div>
    </div>
</template>
  
<script setup>
const { modelValue } = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const closeModal = () => {
    emit('update:modelValue', false);
};
</script>
  