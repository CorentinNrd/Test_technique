<template>
  <div class="grid grid-cols-6 sm:flex sm:flex-col">
    <div class="flex flex-col items-center mt-10">
      <h1 class="text-lg underline">Vos informations</h1>
      <div class="mt-10">
        <span>{{ user.email }}</span>
      </div>
    </div>
    <div class="mt-10 col-end-7 col-span-4">
      <h1 class="text-lg underline sm:text-center">Vos essais clinique enregistrés</h1>
      <p v-if="status" class="text-red-600">{{ status }}</p>
      <p v-if="error" class="text-red-600">{{ error }}</p>
      <div class="grid grid-cols-2 gap-4 mr-5 mt-10 sm:flex sm:flex-col sm:justify-items-center sm:mr-3 sm:ml-3">
        <ul
          v-for="infos in info"
          v-bind:key="infos.id"
          class="mb-7 border"
        >
          <li class="ml-4 mt-4">ID : {{ infos.ID }}</li>
          <li class="ml-4 mt-4">Spécialité : {{ infos.specialite }}</li>
          <li class="ml-4 mt-4">Organe : {{ infos.organes }}</li>
          <li class="ml-4 mt-4">Situation : {{ infos.situation }}</li>
          <li class="ml-4 mt-4">Enregistré le : {{ infos.createdAt }}</li>
          <li class="ml-4 mr-4 mb-4 mt-4">
            <button
              class="
                cursor-pointer
                bg-red-500
                border
                font-bold
                py-2
                w-full
                rounded
                focus:outline-none focus:shadow-outline
                hover:bg-red-600 hover:text-white
              "
              @click="Delete(infos.ID, user.id)"
            >
              Supprimer
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    let info = ref(null);
    let user = JSON.parse(sessionStorage.getItem("data_user"));
    onMounted(() => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: user.id }),
      };
      fetch("http://localhost:8000/account", requestOptions)
        .then((res) => res.json())
        .then((data) => {
          info.value = data;
        });
    });
    return { info, user };
  },
  data() {
    return {
      status: null,
      error: null,
    };
  },
  methods: {
    Delete: function (id_essai, id_user) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ essai: id_essai, user: id_user }),
      };
      fetch("http://localhost:8000/clinical/delete", requestOptions)
        .then((res) => res.json())
        .then((data) => {
          if (data.OK) {
            this.status = data.OK;
            setTimeout(() => {
              this.status = "";
              window.location.reload(true);
            }, 2000);
          } else {
            this.error = data.error;
            setTimeout(() => {
              this.error = "";
            }, 2000);
          }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>