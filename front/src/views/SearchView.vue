<template>
  <div
    class="
      flex
      justify-between
      mt-10
      md:flex-col md:items-center
      sm:flex-col sm:items-center
    "
  >
    <form
      class="
        flex flex-col
        gap-7
        border
        ml-5
        mr-5
        w-1/4
        md:w-3/4 md:ml-0 md:mr-0
        sm:w-3/4 sm:ml-0 sm:mr-0
      "
      @submit.prevent="createPost"
    >
      <section id="situation" class="flex ml-3 mt-3">
        <div>
          <h1 class="text-1xl underline mb-5">Situation :</h1>
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

      <section id="specialite" class="flex ml-3">
        <div>
          <h1 class="text-1xl underline mb-5">Spécialité :</h1>
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

      <section
        id="organes"
        class="flex ml-3"
        v-if="post.specialite === 'Gynécologie'"
      >
        <div>
          <h1 class="text-1xl underline mb-5">Organes :</h1>
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
      <section
        id="organes"
        class="flex ml-3"
        v-else-if="post.specialite === 'Thoracique'"
      >
        <div>
          <h1 class="text-1xl underline mb-5">Organes :</h1>
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
        </div>
      </section>

      <section id="organes" class="flex ml-3" v-else>
        <div>
          <h1 class="text-1xl underline mb-5">Organes :</h1>
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
        </div>
      </section>

      <div class="ml-3 mb-3 mr-3">
        <input
          class="
            cursor-pointer
            bg-blue-300
            border
            font-bold
            py-2
            w-full
            rounded
            focus:outline-none focus:shadow-outline
            hover:bg-blue-400 hover:text-white
          "
          type="submit"
          value="Chercher"
        />
      </div>
    </form>
    <div id="result" class="w-full">
      <h1 class="text-lg underline text-center md:mt-10 sm:mt-10">Résultats</h1>
      <p class="text-red-600 mt-10 text-center">{{ errorSave }}</p>
      <p v-if="error" class="mt-10 text-center">{{ error }}</p>
      <p v-if="save" class="text-green-600 mt-10 text-center">{{ save }}</p>
      <div
        class="
          grid grid-cols-2
          mt-10
          justify-items-center
          md:flex md:flex-col md:items-center
          sm:flex sm:flex-col sm:items-center
        "
      >
        <ul
          v-for="results in result"
          v-bind:key="results.id"
          class="text-left mb-7 border w-3/4"
        >
          <li class="mt-3 ml-3">ID : {{ results.A }}</li>
          <li class="mt-3 ml-3">Spécialité : {{ results.B }}</li>
          <li class="mt-3 ml-3">Organes : {{ results.C }}</li>
          <li class="mt-3 ml-3">Situation : {{ results.D }}</li>
          <li v-if="user?.email" class="mt-3 ml-3 mb-3 mr-3">
            <button
              @click="saveClinical(results, user.id)"
              class="
                cursor-pointer
                bg-blue-300
                border
                font-bold
                py-2
                w-full
                rounded
                focus:outline-none focus:shadow-outline
                hover:bg-blue-400 hover:text-white
              "
            >
              Enregister {{ results.A }}
            </button>
          </li>
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
      essai: {},
      error: null,
      errorSave: null,
      result: null,
      save: null,
      user: JSON.parse(sessionStorage.getItem("data_user")),
    };
  },
  methods: {
    saveClinical: function (res, id_user) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ essai: res, user: id_user }),
      };
      fetch("http://localhost:8000/clinical/save", requestOptions)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.OK);
          if (data.OK) {
            this.save = data.OK
            if(this.save != "") {
              setTimeout(() => {
                this.save = "";
              }, 2000);
            }
          } else {
            this.errorSave = data.error;
            if (this.errorSave != "") {
              setTimeout(() => {
                this.errorSave = "";
              }, 2000);
            }
          }
        })
        .catch((err) => console.log(err));
    },
    async createPost() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ search: this.post }),
      };
      fetch("http://localhost:8000/clinical/search", requestOptions)
        .then((res) => res.json())
        .then((data) => {
          data.length == 0
            ? (this.error = "aucun résultat")
            : (this.error = ""),
            (this.result = data);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>