<template>
  <div class="login">
    <Signin />
    <router-link
      class="
        flex
        justify-center
        cursor-pointer
        hover:text-gray-600 hover:underline
      "
      to="/inscription"
      >Vous n'avez pas encore de compte ?</router-link
    >
  </div>
</template>

<script>
import Signin from "../components/Signin.vue";

export default {
    components: {
        Signin
    }
}
</script>