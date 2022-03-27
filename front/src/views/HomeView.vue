<template>
  <div>
    <Nav />
    <div class="grid grid-cols-3 justify-items-center mt-10">
      <ul v-for="infos in info" v-bind:key="infos.id" class="mb-7">
        <li>ID : {{ infos.A }}</li>
        <li>Spécialité : {{ infos.B }}</li>
        <li>Organe : {{ infos.C }}</li>
        <li>Situation : {{ infos.D }}</li>
        <li v-if="user?.email">
          <button>Enregister {{ infos.A }}</button>
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
      fetch("http://localhost:8000/clinical")
        .then((res) => res.json())
        .then((data) => (info.value = data));
    });
    return { info, user };
  },
};
</script>