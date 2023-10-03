<template>
    <form @submit.prevent="submit">
        <div class="modal" :class="{ 'modal-open': modelValue }">
            <div class="modal-box rounded-lg relative max-w-full w-auto min-h-fit">
                <button type="button" @click="closeModal" class="btn btn-sm btn-outline btn-circle absolute right-2 top-2">
                    ✕
                </button>
                <h3 class="text-lg font-bold text-center uppercase">Opret hold</h3>
                <div class="grid-cols-2 grid">
                    <div class=""> </div>
                </div>
            </div>
        </div>
    </form>
</template>
  
<script setup>
const { modelValue } = defineProps({
    modelValue: Boolean
}); const emit = defineEmits(['update:modelValue']);

const closeModal = () => {
    emit('update:modelValue', false);
};

const { $client } = useNuxtApp();
const { usersInGroups, usersRouter } = $client

const allUsers = ref < UsersList | null > (null)


await userList()

async function userList() {

    const { data, error } = await usersRouter.list.useQuery()

    if (error.value) {
        console.log(error.value.message);
    } else {
        allUsers.valueOf = data.value
    }

}

</script>
  