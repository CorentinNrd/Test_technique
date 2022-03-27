<template>
  <div class="grid grid-cols-2 mt-[10%]">
    <form class="flex flex-col gap-7 ml-[20%]" @submit.prevent="createPost">
      <section id="situation" class="flex">
        <div>
          <h1 class="text-1xl underline mb-5">Situation</h1>
          <div class="form-check">
            <input
              id="Métastatique"
              type="radio"
              v-model="post.situation"
              value="Métastatique"
              class="
                form-check-input
                appearance-none
                rounded-full
                h-4
                w-4
                border border-gray-300
                bg-white
                checked:bg-blue-600 checked:border-blue-600
                focus:outline-none
                transition
                duration-200
                mt-1
                align-top
                bg-no-repeat bg-center bg-contain
                float-left
                mr-2
                cursor-pointer
              "
            />
            <label
              for="Métastatique"
              class="form-check-label inline-block text-gray-800"
              >Métastatique</label
            >
          </div>
          <div class="form-check">
            <input
              id="Localisé"
              type="radio"
              v-model="post.situation"
              value="Localisé"
              class="
                form-check-input
                appearance-none
                rounded-full
                h-4
                w-4
                border border-gray-300
                bg-white
                checked:bg-blue-600 checked:border-blue-600
                focus:outline-none
                transition
                duration-200
                mt-1
                align-top
                bg-no-repeat bg-center bg-contain
                float-left
                mr-2
                cursor-pointer
              "
            />
            <label
              for="Localisé"
              class="form-check-label inline-block text-gray-800"
              >Localisé</label
            >
          </div>
        </div>
      </section>

      <section id="specialite" class="flex">
        <div>
          <h1 class="text-1xl underline mb-5">Spécialité</h1>
          <div class="form-check">
            <input
              id="Gynécologie"
              type="radio"
              v-model="post.specialite"
              value="Gynécologie"
              class="
                form-check-input
                appearance-none
                rounded-full
                h-4
                w-4
                border border-gray-300
                bg-white
                checked:bg-blue-600 checked:border-blue-600
                focus:outline-none
                transition
                duration-200
                mt-1
                align-top
                bg-no-repeat bg-center bg-contain
                float-left
                mr-2
                cursor-pointer
              "
            />
            <label
              for="Gynécologie"
              class="form-check-label inline-block text-gray-800"
              >Gynécologie</label
            >
          </div>
          <div class="form-check">
            <input
              id="Thoracique"
              type="radio"
              v-model="post.specialite"
              value="Thoracique"
              class="
                form-check-input
                appearance-none
                rounded-full
                h-4
                w-4
                border border-gray-300
                bg-white
                checked:bg-blue-600 checked:border-blue-600
                focus:outline-none
                transition
                duration-200
                mt-1
                align-top
                bg-no-repeat bg-center bg-contain
                float-left
                mr-2
                cursor-pointer
              "
            />
            <label
              for="Thoracique"
              class="form-check-label inline-block text-gray-800"
              >Thoracique</label
            >
          </div>
        </div>
      </section>

      <section id="organes" class="flex">
        <div>
          <h1 class="text-1xl underline mb-5">Organes</h1>
          <div class="form-check">
            <input
              id="Poumon"
              type="radio"
              v-model="post.organes"
              value="Poumon"
              class="
                form-check-input
                appearance-none
                rounded-full
                h-4
                w-4
                border border-gray-300
                bg-white
                checked:bg-blue-600 checked:border-blue-600
                focus:outline-none
                transition
                duration-200
                mt-1
                align-top
                bg-no-repeat bg-center bg-contain
                float-left
                mr-2
                cursor-pointer
              "
            />
            <label
              for="Poumon"
              class="form-check-label inline-block text-gray-800"
              >Poumon</label
            >
          </div>
          <div class="form-check">
            <input
              id="Thymus"
              type="radio"
              v-model="post.organes"
              value="Thymus"
              class="
                form-check-input
                appearance-none
                rounded-full
                h-4
                w-4
                border border-gray-300
                bg-white
                checked:bg-blue-600 checked:border-blue-600
                focus:outline-none
                transition
                duration-200
                mt-1
                align-top
                bg-no-repeat bg-center bg-contain
                float-left
                mr-2
                cursor-pointer
              "
            />
            <label
              for="Thymus"
              class="form-check-label inline-block text-gray-800"
              >Thymus</label
            >
          </div>
          <div class="form-check">
            <input
              id="Plèvre"
              type="radio"
              v-model="post.organes"
              value="Plèvre"
              class="
                form-check-input
                appearance-none
                rounded-full
                h-4
                w-4
                border border-gray-300
                bg-white
                checked:bg-blue-600 checked:border-blue-600
                focus:outline-none
                transition
                duration-200
                mt-1
                align-top
                bg-no-repeat bg-center bg-contain
                float-left
                mr-2
                cursor-pointer
              "
            />
            <label
              for="Plèvre"
              class="form-check-label inline-block text-gray-800"
              >Plèvre</label
            >
          </div>
          <div class="form-check">
            <input
              id="Ovaire"
              type="radio"
              v-model="post.organes"
              value="Ovaire"
              class="
                form-check-input
                appearance-none
                rounded-full
                h-4
                w-4
                border border-gray-300
                bg-white
                checked:bg-blue-600 checked:border-blue-600
                focus:outline-none
                transition
                duration-200
                mt-1
                align-top
                bg-no-repeat bg-center bg-contain
                float-left
                mr-2
                cursor-pointer
              "
            />
            <label
              for="Ovaire"
              class="form-check-label inline-block text-gray-800"
              >Ovaire</label
            >
          </div>
          <div class="form-check">
            <input
              id="Sein"
              type="radio"
              v-model="post.organes"
              value="Sein"
              class="
                form-check-input
                appearance-none
                rounded-full
                h-4
                w-4
                border border-gray-300
                bg-white
                checked:bg-blue-600 checked:border-blue-600
                focus:outline-none
                transition
                duration-200
                mt-1
                align-top
                bg-no-repeat bg-center bg-contain
                float-left
                mr-2
                cursor-pointer
              "
            />
            <label
              for="Sein"
              class="form-check-label inline-block text-gray-800"
              >Sein</label
            >
          </div>
        </div>
      </section>

      <div>
        <input
          class="
            cursor-pointer
            border
            font-bold
            py-2
            px-4
            rounded
            focus:outline-none focus:shadow-outline
            hover:bg-blue-400 hover:text-white
          "
          type="submit"
          value="Chercher"
        />
      </div>
    </form>
    <div id="result">
      <h1>Résultats</h1>
      <div class="grid grid-cols-2 mt-10">
        <p v-if="error">{{ error }}</p>
        <ul v-for="results in result" v-bind:key="results.id" class="mb-7">
          <li>ID : {{ results.A }}</li>
          <li>Spécialité : {{ results.B }}</li>
          <li>Organes : {{ results.C }}</li>
          <li>Situation : {{ results.D }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "search-view",
  data() {
    return {
      post: {},
      error: null,
      errorInfo: null,
      result: null,
    };
  },
  methods: {
    async createPost() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ search: this.post }),
      };
      fetch("http://localhost:8000/clinical/search", requestOptions)
        .then((res) => res.json())
        .then((data) => {
            data.length == 0 ?
            (this.error = "aucun résultat")
            :
            (this.error = ""),
            (this.result = data)
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>