<template>
    <form>
        <div class="modal" :class="{ 'modal-open': modelValue }">
            <div class="modal-box rounded-lg relative max-w-full w-fit min-h-fit h-[640px]">
                <button type="button" @click="closeModal" class="btn btn-sm btn-outline btn-circle absolute right-2 top-2">
                    ✕
                </button>
                <h3 class="text-lg font-bold text-center uppercase">Oprettede elever</h3>
                <div class="text-center"><input type="text" v-model="searchText" placeholder="Søg på navn eller hold.." class="input input-bordered text-center text-sm" /></div>
                <div class="h-96">
                    <div class="overflow-y-auto max-h-96  p-0 px-10 mx-auto justify-center flex">
                        <table class="table table-xs table-pin-rows w-60 ">
                            <thead>
                                <tr>
                                    <th class="w-0"></th>
                                    <th>Rolle</th>
                                    <th>Navn</th>
                                    <th>Hold</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="user in filteredUsers" :key="user.id">
                                    <td>
                                        <input type="checkbox" class="checkbox" v-model="selectedUsers" :value="user.id" />
                                    </td>
                                    <td>{{ user.role }}</td>
                                    <td>{{ user.name }}</td>
                                    <td> <span v-for="x in user.groups"> {{ x.group.name }}, &ThickSpace;</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="modal-action justify-center">
                    <button :disabled="disableBtn" @click="addUsers"
                        class="btn btn-primary">
                        <i class="fa-solid fa-plus"></i>
                        elever
                    </button>
                </div>
            </div>
        </div>
    </form>
</template>
  
<script setup lang="ts">
const props = defineProps({
    modelValue: Boolean,
    groupId: {type: String, required: true}
}); 


const emit = defineEmits(['update:modelValue']);

const closeModal = () => {
    emit('update:modelValue', false);
};

const { $client } = useNuxtApp();
const { usersInGroupsRouter, usersRouter } = $client
const succes = ref(false)
const disableBtn = ref(false)

const allUsers = ref<StudentList | null>(null)

await userList()

const searchText = ref('');
const selectedUsers = ref<string[]>([]); // Replace 'User' with your actual user type

function filterUsersByName(users: StudentList, searchText: string) {
    if (!searchText) return users;

    const search = searchText.toLowerCase();
    return users.filter((user) => {
        const matchesName = user.name.toLowerCase().includes(search);
        const matchesGroup = user.groups.some((group) =>
            group.group.name.toLowerCase().includes(search)
        );
        return matchesName || matchesGroup;
    });
}

const filteredUsers = computed(() => {
    return filterUsersByName(allUsers.value || [], searchText.value);
});

const usersToAdd = computed(() => {
  return selectedUsers.value.map(id => ({
    userId: id,
    groupId: props.groupId,
  }));
});

function addUsers() {
    try {
        const resp = usersInGroupsRouter.addUsers.mutate(usersToAdd.value)

    } catch (error) {
        console.log();
        
    }
    selectedUsers.value = []
    closeModal()
}

async function userList() {
    const { data, error } = await usersRouter.studentList.useQuery({groupId: props.groupId})

    if (error.value) {
        console.log(error.value.message);
    } else {
        allUsers.value = data.value
    }
}


</script>
  