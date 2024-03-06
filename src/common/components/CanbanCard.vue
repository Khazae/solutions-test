<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <li class="card_item py-3 sm:py-4" @click="handleClick">
    <div class="flex items-center">
      <div class="flex-shrink-0">
        <img class="w-8 h-8 rounded-full" :src="image" alt="" />
      </div>
      <div class="flex-1 min-w-0 ms-4">
        <p class="text-sm font-medium text-gray-900 truncate dark:text-black">{{ fullName }}</p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-700">{{ email }}</p>
      </div>
    </div>
  </li>
</template>

<script>
const props = {
  fullName: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  age: {
    type: String,
    default: "",
  },
  email: {
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
};
export default {
  props,
  methods: {
    handleClick() {
      this.$emit("card-clicked");
    },
  },
};
</script>

<style scoped>
.card_item {
  cursor: pointer;
  transition: opacity 0.3s;
}

.card_item:hover {
  opacity: 50%;
}
</style>
