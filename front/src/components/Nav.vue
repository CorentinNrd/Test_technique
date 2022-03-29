<template>
  <nav class="flex justify-between ml-5 mr-5 mt-4 mb-2 h-8">
    <ul class="flex gap-10 md:gap-5 sm:gap-5">
      <li class="w-[54px] h-[26px] rounded-full bg-blue-300 sm:hidden"></li>
      <li><router-link to="/">Accueil</router-link></li>
      <li><router-link to="/chercher">Rechercher</router-link></li>
    </ul>
    <ul class="flex gap-10 md:gap-5 sm:gap-5" v-if="user?.email">
      <p class="md:hidden sm:hidden">{{ user.email }}</p>
      <li>
        <router-link to="/compte">
          <svg width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.95 7.95 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"
            ></path>
          </svg>
        </router-link>
      </li>
      <li>
        <svg
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
          v-on:click="testFunction"
        >
          <path
            fill="currentColor"
            d="M5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5zm16 7l-4-4v3H9v2h8v3l4-4z"
          ></path>
        </svg>
      </li>
    </ul>
    <ul class="md:gap-5 sm:gap-5" v-else>
      <li>
        <router-link to="/connexion">
          <svg width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5l-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"
            ></path>
          </svg>
        </router-link>
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