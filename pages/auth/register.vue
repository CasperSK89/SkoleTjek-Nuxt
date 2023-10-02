<template>
  <div class="card bg-base-100 border-4 mx-auto h-fit my-auto" :class="{ 'border-success': succes }">
    <div class="card-body">
      <h2 class="card-title">Ny bruger</h2>
      <form @submit.prevent="Register">
        <div class="mb-4">
          <label for="username" class=" label">
            <span class="label-text">Brugernavn:</span>
            <span class="label-text-alt h-0 pb-3" @mouseover="showTip = true" @mouseleave="showTip = false"><span
                class="label-text-alt" v-if="showTip">minimum 6 tegn.</span><span v-if="!showTip"
                class="label-text-alt">(?) </span></span>
          </label>
          <input type="text" id="username" v-model="userData.name" class="input input-bordered" required />
          <label for="username" class=" label absolute py-0 right-14" v-if="showErr">
            <span class="label-text-alt text-error"> Brugernavn eller email er i brug.</span>
          </label>
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
          <input type="password" id="password" v-model="userData.password" class="input input-bordered"
            autocomplete="false" required />
        </div>
        <div class="mb-4">
          <label for="repeatedPassword" class="label-text label">Gentag kodeord:</label>
          <input type="password" id="repeatedPassword" v-model="repeatedPassword" class="input input-bordered"
            autocomplete="false" required />
        </div>
        <button :disabled="repeatedPassword != userData.password || disableBtn" type="submit"
          class="w-full btn-success btn">
          <i v-if="!succes" class="fa-solid fa-plus"></i>
          <span v-else class="loading loading-spinner"></span>
          Registrer
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $client } = useNuxtApp();
const { usersRouter } = $client
definePageMeta({ auth: false })

const succes = ref(false)
const disableBtn = ref(false)
const showTip = ref(false)
const showErr = ref(false)
const userData = ref<RegisterUser>({
  email: "",
  name: "",
  password: ""
})
const repeatedPassword = ref("")

async function Register() {
  disableBtn.value = true

  try {

    const resp = await usersRouter.register.mutate(userData.value)

    if (resp.message === "User created") {

      succes.value = true
      setTimeout(navigate, 1000)
      return
    }
    disableBtn.value = false

  } catch (error) {

    console.log(error);
    showErr.value = true
    disableBtn.value = false
  }

}

function navigate() {
  navigateTo({ path: '/auth/login' })
}
</script>

<style scoped></style>