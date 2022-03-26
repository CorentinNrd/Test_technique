<template>
  <nav class="flex justify-between ml-5 mr-5 mt-2">
    <ul class="flex gap-20">
      <li>Logo</li>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/chercher">Rechercher</router-link></li>
      <li><router-link to="/">Qui sommes-nous ?</router-link></li>
    </ul>
    <ul class="flex gap-20">
      <li><router-link to="/connexion">Connexion</router-link></li>
      <li><router-link to="/inscription">Inscription</router-link></li>
    </ul>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "nav-component",
};
</script>

<style>
li {
  cursor: pointer;
}
li:hover {
  text-decoration: underline;
}
</style>