<template>
  <div class="card bg-base-100 border-4 mx-auto h-fit my-auto">
    <div class="card-body">
      <h2 class="card-title">Ny bruger</h2>
      <form @submit.prevent="Register">
        <div class="mb-4">
          <label for="username" class="label-text label">Brugernavn:</label>
          <input type="text" id="username" v-model="userData.name" class="input input-bordered" required />
        </div>
        <div class="mb-4">
          <label for="email" class="label-text label">Email:</label>
          <input type="email" id="email" v-model="userData.email" class="input input-bordered" required />
        </div>
        <div class="mb-4">
          <label for="password" class="label">
            <span class="label-text">
              Kodeord:
            </span>
            <span v-if="repeatedPassword != userData.password" class=" text-error label-text-alt ">
              Dine koder er ikke ens
            </span>
          </label>
          <input type="password" id="password" v-model="userData.password" class="input input-bordered" required />
        </div>
        <div class="mb-4">
          <label for="password" class="label-text label">Gentag kodeord:</label>
          <input type="password" id="password" v-model="repeatedPassword" class="input input-bordered" required />
        </div>
        <button :disabled="repeatedPassword != userData.password" type="submit" class="w-full btn-success btn">
          <i class="fa-solid fa-plus"></i>
          Registrer
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $client } = useNuxtApp();
const { userRouter } = $client

const userData = ref<RegisterUser>({
  email: "",
  name: "",
  password: ""
})
const repeatedPassword = ref("")

async function Register() {

  const resp = await userRouter.register.mutate(userData.value)
  console.log(resp);
}
</script>

<style scoped></style>