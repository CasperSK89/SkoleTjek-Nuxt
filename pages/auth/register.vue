<template>
  <div class="card bg-base-100 border-4 mx-auto h-fit">
    <div class="card-body">
      <h2 class="card-title">Ny bruger</h2>
      <form @submit.prevent="Register">
        <div class="mb-4">
          <label for="username" class="label-text label">Username</label>
          <input type="text" id="username" v-model="userData.name" class="input input-bordered" required />
        </div>
        <div class="mb-4">
          <label for="email" class="label-text label">Email</label>
          <input type="email" id="email" v-model="userData.email" class="input input-bordered" required />
        </div>
        <div class="mb-4">
          <label for="password" class="label-text label">Password</label>
          <input type="password" id="password" v-model="userData.password" class="input input-bordered" required />
        </div>
        <button type="submit" class="w-full btn-success btn">
          Register
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

async function Register() {
  
  const resp = await userRouter.register.mutate(userData.value)
  console.log(resp);
}
</script>

<style scoped></style>