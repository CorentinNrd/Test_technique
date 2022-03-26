<template>
  <div class="login">
    <Signup />
    <router-link
      class="
        flex
        justify-center
        cursor-pointer
        hover:text-gray-600 hover:underline
      "
      to="/connexion"
      >Vous avez déjà un compte ?</router-link
    >
  </div>
</template>

<script>
import Signup from "../components/Signup.vue";

export default {
    components: {
        Signup
    }
}
</script>