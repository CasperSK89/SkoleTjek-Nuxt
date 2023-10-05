<template>
        <div class="modal" :class="{ 'modal-open': modelValue }">
            <div class="modal-box rounded-lg relative  w-fit min-h-fit">
                <button type="button" @click="closeModal()" class="btn btn-sm btn-outline btn-circle absolute right-2 top-2">
                    ✕
                </button>
                <div class="flex flex-col  text-center">
                    <slot></slot>
                    <p>Er du sikker?</p>
                </div>
                <div class="modal-action justify-center">

                    <button @click="remove()" class="btn btn-success">Ja</button>
                    <button @click="closeModal()"  class="btn btn-neutral">Nej</button>
                </div>
            </div>
        </div>
</template>

<script setup lang="ts">
const props = defineProps({
    modelValue: Boolean,
    deleteFunction: Promise<void>
});

const emit = defineEmits(['update:modelValue']);

const closeModal = () => {
    emit('update:modelValue', false);
};

function remove(){

    props.deleteFunction
    closeModal()
}
</script>
  