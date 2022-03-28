<template>
  <div class="grid grid-cols-2">
    <div class="flex flex-col items-center mt-10">
      <h1>Vos informations</h1>
      <div class="mt-10">
        <span>{{ user.email }}</span>
      </div>
    </div>
    <div class="flex flex-col items-center mt-10">
      <h1>Vos essais clinique enregistré</h1>
      <p v-if="status" class="text-red-600">{{ status }}</p>
      <p v-if="error" class="text-red-600">{{ error }}</p>
      <ul v-for="infos in info" v-bind:key="infos.id" class="mb-7 mt-10">
        <li>ID : {{ infos.ID }}</li>
        <li>Spécialité : {{ infos.sepcialite }}</li>
        <li>Organe : {{ infos.organes }}</li>
        <li>Situation : {{ infos.situation }}</li>
        <li>Enregistré le : {{ infos.createdAt }}</li>
        <li>
          <button
            class="
              cursor-pointer
              border
              font-bold
              py-2
              px-4
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
              window.location.reload(true)
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