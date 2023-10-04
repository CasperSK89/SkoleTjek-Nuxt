<template>
    <div class="prose max-w-full w-full">
        <div class="flex mx-auto justify-between items-center">
            <h1 class="mb-0">Rediger hold {{ currentGroup?.name }}</h1>
            <button @click="showAddToGroup = true" class="btn btn-primary btn-sm">
                <i class="fa-solid fa-plus"></i>
                eksisterende elever</button>
        </div>
        <div class="overflow-x-auto h-[calc(100%-10px)]">
            <table class="table table-pin-rows">
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
                        
                        <td>  {{ user.role }}</td>
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
                            <div class="flex justify-end gap-3">
                                <button class="btn btn-secondary btn-xs">Fjern 
                                <br/> fra hold</button>
                                <button class="btn btn-primary btn-xs">Indstillinger</button>
                            </div>
                        </td>
                    </tr>

                </tbody>
                <!-- foot -->
               

            </table>
        </div>

        <TeacherAddToGroupModal v-model="showAddToGroup" :group-id="groupId.toString()"></TeacherAddToGroupModal>
    </div>
</template>

<script setup lang="ts">
const { groups } = storeToRefs(useAuthStore())
const { groupId } = useRoute().params
const { $client } = useNuxtApp();
const { usersInGroupsRouter } = $client

const currentGroup = computed(() => groups.value?.find((x) => x.id === groupId));
const showAddToGroup = ref(false)

const usersInGroup = ref<UsersInGroup | null>(null)

await getUsers()
async function getUsers() {

    usersInGroup.value = await usersInGroupsRouter.usersInGroup.query({ groupId: groupId.toString() })
}


</script>

<style scoped></style>