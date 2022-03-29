<template>
  <nav class="flex justify-between ml-5 mr-5 mt-4 mb-2 h-8">
    <ul class="flex gap-20 md:gap-5 sm:gap-5">
      <li class="w-[54px] h-[26px] rounded-full bg-blue-300 sm:hidden"></li>
      <li><router-link to="/">Accueil</router-link></li>
      <li><router-link to="/chercher">Rechercher</router-link></li>
    </ul>
    <ul class="flex gap-20 md:gap-5 sm:gap-5" v-if="user?.email">
      <p class="md:hidden sm:hidden">{{ user.email }}</p>
      <li class="cursor-pointer hover:underline">
        <router-link to="/compte">Compte</router-link>
      </li>
      <li>
        <button class="hover:underline" v-on:click="testFunction">Déconnexion</button>
      </li>
    </ul>
    <ul class="flex gap-20 md:gap-5 sm:gap-5" v-else>
      <li class="cursor-pointer hover:underline">
        <router-link to="/connexion">Connexion</router-link>
      </li>
      <li class="cursor-pointer hover:underline">
        <router-link to="/inscription">Inscription</router-link>
      </li>
    </ul>
  </nav>
  <hr />
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
      sessionStorage.clear(), (window.location = "/connexion");
    },
  },
};
</script>

<style>
li a,
li button {
  cursor: pointer;
}
li a:hover {
  text-decoration: underline;
}
</style>