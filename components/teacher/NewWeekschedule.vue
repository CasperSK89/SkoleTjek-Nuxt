<template>
    <div>
        <button @click="console.log('hej')" onclick="newWeekschedule.showModal()"
            :class="{ 'border-r ': props.side == 'right', 'border-l ': props.side == 'left' }"
            class=" w-28 bg-transparent text-md uppercase font-semibold flex items-center justify-center rounded-none border-x-primary btn-xs h-full border-y-0 hover:bg-opacity-40 hover:bg-base-300 ">
            <div class="flex flex-col w-full text-center">
                <i class="fa-solid fa-folder-plus text-xl"></i>
                Nyt ugeskema
            </div>
        </button>
        <dialog id="newWeekschedule" class="modal">
            <div class="modal-box w-fit">
                <form method="dialog">
                    <button class="btn btn-sm btn-outline btn-circle absolute right-2 top-2">✕</button>
                </form>
                <h3 class="text-lg font-bold text-center uppercase">Opret hold</h3>
                <div class="flex justify-center">
                    <div class="form-control w-full max-w-xs">
                        <label class="label label-text">
                            Navn:
                        </label>
                        <input type="text" placeholder="f. eks. 5A" required class="input input-bordered w-full max-w-xs" />
                        <label class="label label-text">
                            Fag:
                        </label>
                        <input type="number" placeholder="Skoleår" class="input input-bordered w-full max-w-xs" required
                            min="0" max="10" />
                        <label class="label label-text">
                            Hold:
                        </label>
                        <select class="select select-bordered w-full max-w-xs">
                            <option disabled selected>Hvem?</option>
                            <option v-for="group in groups">{{ group.name }}</option>
                        </select>
                    </div>
                </div>
            </div>
        </dialog>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    side: String,
})

const { groups } = storeToRefs(useAuthStore())

</script>

<style scoped></style>