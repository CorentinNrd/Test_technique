<template>
  <div class="flex justify-center mt-10">
    <form
      class="w-1/4 bg-white shadow rounded border px-8 pt-8 pb-8 mb-4 md:w-3/4 sm:w-3/4"
      @submit.prevent="createPost"
    >
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          class="
            appearance-none
            border
            rounded
            w-full
            py-2
            px-3
            text-gray-700
            leading-tight
            focus:outline-none focus:shadow-outline
          "
          id="username"
          type="email"
          placeholder="Email"
          v-model="post.email"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Mot de passe
        </label>
        <input
          class="
            appearance-none
            border
            rounded
            w-full
            py-2
            px-3
            text-gray-700
            mb-3
            leading-tight
            focus:outline-none focus:shadow-outline
          "
          id="password"
          type="password"
          placeholder="******************"
          v-model="post.password"
        />
      </div>
      <div class="flex justify-center">
        <button
          class="
            border
            bg-blue-300
            font-bold
            py-2
            px-4
            rounded
            focus:outline-none focus:shadow-outline
            hover:bg-blue-400 hover:text-white
          "
          type="submit"
        >
          Connexion
        </button>
      </div>
      <p class="text-red-600">{{ error }}</p>
      <p class="text-red-600">{{ errorInfo }}</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "login-component",
  data() {
    return {
      post: {},
      error: null,
      errorInfo: null,
    };
  },
  methods: {
    // ENVOIE DES DONNEES DU FORMULAIRE DE CONNEXION AFIN DE DEMARRER LA SESSION DU CLIENT
    async createPost() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: this.post }),
      };
      fetch("http://localhost:8000/login", requestOptions)
        .then((res) => res.json())
        .then(
          (data) => (
            (this.error = data.error),
            (this.errorInfo = data.error_info),
            this.errorInfo || this.error
              ? setTimeout(() => {
                this.error = ""
                this.errorInfo = ""
              }, 2000)
              : (window.location = "/"),
            (this.value = { id: data.user._id, email: data.user.email }),
            sessionStorage.setItem("data_user", JSON.stringify(this.value))
          )
        )
        .catch((err) => console.log(err));
    },
  },
};
</script>