<template>
    <div class="prose max-w-full w-full">
        <div class="flex mx-auto justify-between items-center">
            <h1 class="mb-0">Rediger hold {{ currentGroup?.name }}</h1>
            <button @click="showAddToGroup = true" class="btn btn-primary btn-sm">
                <i class="fa-solid fa-plus"></i>
                eksisterende elever</button>
        </div>
        <div class="overflow-x-auto">
            <table class="table table-pin-rows z-0">
                <!-- head -->
                <thead class="uppercase ">
                    <tr>
                        <th>Rolle</th>
                        <th>Name</th>
                        <th>Fritaget</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <!-- row 1 -->
                    <tr v-for="user in usersInGroup">

                        <td> {{ user.role }}</td>
                        <td>
                            <div class="flex items-center space-x-3">

                                <div>
                                    <div class="font-bold"> {{ user.name }}</div>
                                    <div class="text-sm opacity-50">Aktiv fra: {{ new
                                        Date(user.activeFrom).toLocaleDateString() }}</div>
                                </div>
                            </div>
                        </td>
                        <td>

                            <div class="flex gap-3 flex-wrap">
                                <span class="badge badge-warning badge-sm uppercase font-semibold "><i
                                        class="pr-1 fa-solid fa-triangle-exclamation"></i> Skal</span>
                                <span class="badge badge-info badge-sm uppercase font-semibold "><i
                                        class="pr-1 fa-solid fa-triangle-exclamation"></i> Lektier</span>
                            </div>
                        </td>
                        <td>
                            <div class="flex justify-end  join">
                                <button @click="showRemove = true" class=" join-item btn btn-error btn-xs">Fjern
                                    <br /> </button>
                                <button class="join-item  btn btn-neutral btn-xs">Indstillinger</button>
                            </div>
                        </td>
                    </tr>
                    
                </tbody>
                <!-- foot -->
                
                
            </table>
        </div>
        <DeleteModal v-model="showRemove" :delete-function="removeUser">
        Vil du fjerne
        </DeleteModal>
        <TeacherAddToGroupModal v-model="showAddToGroup" :refresh-list="getUsers()" :group-id="groupId.toString()"></TeacherAddToGroupModal>
    </div>
</template>

<script setup lang="ts">
const { groups } = storeToRefs(useAuthStore())
const { groupId } = useRoute().params
const { $client } = useNuxtApp();
const { usersInGroupsRouter } = $client

const currentGroup = computed(() => groups.value?.find((x) => x.id === groupId));
const showAddToGroup = ref(false)
const showRemove = ref(false)

const usersInGroup = ref<UsersInGroup | null>(null)

await getUsers()

async function getUsers() {
    try {

        usersInGroup.value = await usersInGroupsRouter.usersInGroup.query({ groupId: groupId.toString() })

    } catch (error) {
        console.log(error);

    }
}
async function removeUser(userId: string) {
    try {

        const resp = await usersInGroupsRouter.removeUser.mutate({ groupId: groupId.toString(), userId: userId })
        await getUsers()
    } catch (error) {
        console.log(error);

    }
}


</script>

<style scoped></style>