<template>
    <form>
        <div class="modal" :class="{ 'modal-open': modelValue }">
            <div class="modal-box rounded-lg relative max-w-full w-fit min-h-fit">
                <button type="button" @click="closeModal" class="btn btn-sm btn-outline btn-circle absolute right-2 top-2">
                    ✕
                </button>
                <h3 class="text-lg font-bold text-center uppercase">Opret hold</h3>
                <div class="text-center"><input type="text" v-model="searchText" placeholder="Søg på navn.." class="input input-bordered text-center" /></div>
                <div class="overflow-y-auto max-h-96 p-0 px-10 mx-auto justify-center flex">
                    <table class="table table-xs table-pin-rows w-60">
                        <thead>
                            <tr>
                                <th class="w-0"></th>
                                <th>Navn</th>
                                <th>Hold</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in filteredUsers" :key="user.id">
                                <td>
                                    <input type="checkbox" class="checkbox" v-model="selectedUsers" :value="user" />
                                </td>
                                <td>{{ user.name }}</td>
                                <td> 9A, 9B </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-action justify-center">
                    <button :disabled="disableBtn || selectedUsers.length === 0" @click="addUsers"
                        class="btn btn-primary">
                        <i class="fa-solid fa-plus"></i>
                        elever
                    </button>
                </div>
                <!-- <pre>{{ selectedUsers }}</pre> -->
            </div>
        </div>
    </form>
</template>
  
<script setup lang="ts">
const { modelValue } = defineProps({
    modelValue: Boolean
}); const emit = defineEmits(['update:modelValue']);

const closeModal = () => {
    emit('update:modelValue', false);
};

const { $client } = useNuxtApp();
const { usersInGroups, usersRouter } = $client
const succes = ref(false)
const disableBtn = ref(false)

const allUsers = ref<UsersList | null>(null)

await userList()

const searchText = ref('');
const selectedUsers = ref<UsersList[]>([]); // Replace 'User' with your actual user type

function filterUsersByName(users: UsersList, searchText: string) {
    if (!searchText) return users;

    const search = searchText.toLowerCase();
    return users.filter((user) => user.name.toLowerCase().includes(search));
}

const filteredUsers = computed(() => {
    return filterUsersByName(allUsers.value || [], searchText.value);
});

function addUsers() {
    // 'selectedUsers' now contains the selected users
    const usersToAdd = selectedUsers.value;

    // You can perform any desired actions with 'usersToAdd'
    // For example, you can add them to an array or send them to the server

    // Reset the selected users array
    selectedUsers.value = [];
}

async function userList() {
    const { data, error } = await usersRouter.list.useQuery()

    if (error.value) {
        console.log(error.value.message);
    } else {
        allUsers.value = data.value
    }
}


</script>
  