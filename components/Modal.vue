<template>
    <div class="modal" :class="{ 'modal-open': modelValue }">
        <div class="modal-box relative max-w-full w-auto min-h-fit">
            <button type="button" @click="closeModal" class="btn btn-sm btn-outline btn-circle absolute right-2 top-2">
                ✕
            </button>
            <h3 class="text-lg font-bold text-center uppercase">Opret hold</h3>
            <div class="flex justify-center">

                <slot name="content">
                    Content
                </slot>
                <div class="modal-action">
                    <slot name="buttons">
                        Buttons
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
const { modelValue } = defineProps({
    modelValue: Boolean,
    title: String
});
const emit = defineEmits(['update:modelValue']);

const closeModal = () => {
    emit('update:modelValue', false);
};
</script>
  