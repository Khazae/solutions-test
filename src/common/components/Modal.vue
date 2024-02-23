<!-- eslint-disable max-len -->
<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div v-if="isVisible">
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <div class="mt-2">
                    <p class="text-sm text-gray-700">Age: {{ age }}</p>
                    <p class="text-sm text-gray-700">Gender: {{ gender }}</p>
                    <p class="text-sm text-gray-700">Country: {{ country }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                @click="handleClick"
                type="button"
                class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const props = {
  age: {
    type: String,
    default: "",
  },
  gender: {
    type: String,
    default: "",
  },
  country: {
    type: String,
    default: "",
  },
  isVisible: {
    type: Boolean,
    default: false,
  },
};
export default {
  props,
  name: "modalView",
  methods: {
    handleClick() {
      this.$emit("onClick");
    },
  },
};
</script>

<style scoped>
.hidden {
  display: none;
}
</style>
