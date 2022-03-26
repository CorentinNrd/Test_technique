<template>
  <div>
    <Nav />
    <tbody>
      <tr v-for="infos in info" v-bind:key="infos.id">
        <td>{{ infos.A }}</td>
        <td>{{ infos.B }}</td>
        <td>{{ infos.C }}</td>
        <td>{{ infos.D }}</td>
        <td><button>Enregister {{ infos.A }}</button></td>
      </tr>
    </tbody>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    let info = ref(null);
    onMounted(() => {
      fetch("http://localhost:8000/clinical")
        .then((res) => res.json())
        .then((data) => (info.value = data));
    });
    return { info };
  },
};
</script>