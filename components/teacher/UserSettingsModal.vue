<template>
    <form @submit.prevent="submit">
        <div class="modal" :class="{ 'modal-open': modelValue }">
            <div class="modal-box rounded-lg relative max-w-full w-auto min-h-fit">
                <button type="button" @click="closeModal" class="btn btn-sm btn-outline btn-circle absolute right-2 top-2">
                    ✕
                </button>
                <h3 class="text-lg font-bold text-center uppercase">Opret hold</h3>
                <div class="flex justify-center">
                    <div class="form-control w-full max-w-xs">
                        <label class="label label-text">
                            Holdnavn:
                        </label>
                        <input type="text" placeholder="f. eks. 5A" v-model="groupName" required
                            class="input input-bordered w-full max-w-xs" />
                        <label class="label label-text">
                            Årgang:
                        </label>
                        <input type="number" placeholder="Skoleår" v-model="year"
                            class="input input-bordered w-full max-w-xs" required min="0" max="10" />
                        <label class="label label-text">
                            Aktiv fra:
                        </label>
                        <input type="date" placeholder="Type here" v-model="today" required
                            class="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div class="modal-action justify-center">
                    <button :disabled="disableBtn" class="btn btn-primary">
                        <i v-if="!succes" class="fa-solid fa-plus"></i>
                        <span v-else class="loading loading-spinner"></span>
                        Opret hold </button>
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
const { groupsByUser } = useAuthStore()


const { $client } = useNuxtApp();
const { groupsRouter, usersInGroups } = $client
const { currentUser } = useAuthStore()


const today = ref(new Date().toISOString().split('T')[0])
const groupName = ref('')
const year = ref(2)
const succes = ref(false)
const disableBtn = ref(false)

const selectedDateTime = computed(() => {
    const dateParts = today.value.split('-');
    return new Date(Number(dateParts[0]), Number(dateParts[1]) - 1, Number(dateParts[2]));
});

async function submit() {
    disableBtn.value = true

    succes.value = true
    try {
        const newGroup = await groupsRouter.newGroup.mutate({ name: groupName.value, year: year.value, activeFrom: selectedDateTime.value })
        await groupsByUser()
        navigateTo({ path: `/teacher/${newGroup.createGroup.id}/` })
    } catch (error) {
        console.log(error);
    }
    succes.value = true
    try {
        const newGroup = await groupsRouter.newGroup.mutate({ name: groupName.value, year: year.value, activeFrom: selectedDateTime.value })
        await groupsByUser()
        navigateTo({ path: `/teacher/${newGroup.createGroup.id}/` })
    } catch (error) {
        console.log(error);
    }

    closeModal()
}

</script>
  