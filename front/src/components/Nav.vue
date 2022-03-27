<template>
  <nav class="flex justify-between ml-5 mr-5 mt-2">
    <ul class="flex gap-20">
      <li>Logo</li>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/chercher">Rechercher</router-link></li>
      <li><router-link to="/">Qui sommes-nous ?</router-link></li>
    </ul>
    <ul class="flex gap-20" v-if="user?.email">
      <p>{{ user.email }}</p>
      <li class="cursor-pointer hover:underline">
        <router-link to="/">Account</router-link>
      </li>
      <li>
        <button v-on:click="testFunction">Logout</button>
      </li>
    </ul>
    <ul class="flex gap-20" v-else>
      <li class="cursor-pointer hover:underline">
        <router-link to="/connexion">Connexion</router-link>
      </li>
      <li class="cursor-pointer hover:underline">
        <router-link to="/inscription">Inscription</router-link>
      </li>
    </ul>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "nav-component",
  setup() {
    let user = JSON.parse(sessionStorage.getItem("data_user"));
    return { user };
  },
  methods: {
    testFunction() {
      sessionStorage.clear(),
      window.location = "/connexion"
    }
  },
};
</script>

<style>
li a {
  cursor: pointer;
}
li a:hover {
  text-decoration: underline;
}
</style>