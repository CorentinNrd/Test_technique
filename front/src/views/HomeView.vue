<template>
  <div>
    <div class="w-full h-[300px] bg-blue-300"></div>
    <div class="grid grid-cols-2 ml-5 md:flex md:flex-col md:justify-items-center md:ml-3 md:mr-3 sm:flex sm:flex-col sm:justify-items-center sm:ml-3 sm:mr-3">
      <div class="mt-10">
        <h1 class="text-lg mb-5 underline">Essais cliniques</h1>
        <div class="grid grid-cols-2 gap-3">
          <ul
            v-for="infos in info"
            v-bind:key="infos.id"
            class="border rounded mb-7"
          >
            <li class="ml-2 mt-2 mb-2">ID : {{ infos.A }}</li>
            <li class="ml-2 mt-2 mb-2">Spécialité : {{ infos.B }}</li>
            <li class="ml-2 mt-2 mb-2">Organe : {{ infos.C }}</li>
            <li class="ml-2 mt-2 mb-2">Situation : {{ infos.D }}</li>
          </ul>
        </div>
      </div>
      <!-- ____________________________________ -->
      <div class="flex flex-col mt-10 gap-7 ml-10 mr-5 mb-10 md:mr-0 md:ml-0 sm:mr-0 sm:ml-0">
        <aside class="w-full">
          <h1 class="text-lg mb-5 underline">Qui sommes nous ?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eros
            quam, pellentesque vitae ex vulputate, vestibulum rutrum erat.
            Praesent tincidunt lorem vitae lectus dignissim, vitae pretium ante
            vulputate. Nam nunc nisi, interdum vel blandit ac, aliquam id ex.
            Nulla nec blandit libero. Proin dictum massa imperdiet arcu dictum,
            placerat mattis tellus blandit. Donec ultricies ac ante non mattis.
            Sed ac ante rutrum, eleifend justo nec, accumsan magna. Integer at
            magna ac mi venenatis rhoncus.
          </p>
        </aside>
        <section class="w-full">
          <h1 class="text-lg mb-5 underline">Nos services</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eros
            quam, pellentesque vitae ex vulputate, vestibulum rutrum erat.
            Praesent tincidunt lorem vitae lectus dignissim, vitae pretium ante
            vulputate. Nam nunc nisi, interdum vel blandit ac, aliquam id ex.
            Nulla nec blandit libero. Proin dictum massa imperdiet arcu dictum,
            placerat mattis tellus blandit. Donec ultricies ac ante non mattis.
            Sed ac ante rutrum, eleifend justo nec, accumsan magna. Integer at
            magna ac mi venenatis rhoncus.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>


<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    // RECUPERATION DE TOUT LES ESSAIS CLINIQUES ET AFFICHAGE UNIQUEMENT 4
    let info = ref(null);
    let user = JSON.parse(sessionStorage.getItem("data_user"));
    onMounted(() => {
      fetch("http://localhost:8000/clinical")
        .then((res) => res.json())
        .then((data) => (info.value = data.slice(0, 4)));
    });
    return { info, user };
  },
};
</script>