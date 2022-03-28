<template>
  <!-- eslint-disable-next-line vue/max-attributes-per-line -->
  <div class="flex justify-center mt-[10%]">
    <form
      class="w-1/4 bg-white shadow rounded border px-8 pt-8 pb-8 mb-4"
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
      <div>
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
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="confirmPassword"
        >
          Genre
        </label>
        <select
          name="gender"
          id="gender"
          class="
            form-select
            appearance-none
            block
            w-full
            py-2
            px-3
            text-gray-700
            bg-white
            border
            rounded
            transition
            ease-in-out
            mb-3
            focus:outline-none focus:shadow-outline
          "
          v-model="post.gender"
        >
          <option value="girl" class="text-green">Femme</option>
          <option value="boy">Homme</option>
          <option value="other">Autre</option>
        </select>
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
          Inscription
        </button>
      </div>
      <p class="text-red-600">{{ error }}</p>
      <p class="text-red-600">{{ errorInfo }}</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "register-components",
  data() {
    return {
      post: {},
      error: null,
      errorInfo: null,
    };
  },
  methods: {
    async createPost() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: this.post }),
      };
      fetch("http://localhost:8000/register", requestOptions)
        .then((res) => res.json())
        .then((data) => {
          (this.error = data.error),
            (this.errorInfo = data.error_info),
            this.errorInfo || this.error
              ? setTimeout(() => {
                  this.error = "";
                  this.errorInfo = "";
                }, 2000)
              : this.$router.push("/connexion");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>