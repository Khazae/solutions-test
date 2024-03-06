<template>
  <div class="wrapper">
    <div class="items">
      <div class="item">
        <div>
          <template v-if="loading">
            <div class="list-group">
              <Loading :loading="loading" />
            </div>
          </template>
          <template v-if="!loading && list1.length">
            <div class="flow-root">
              <ul class="divide-y divide-gray-200 dark:divide-gray-700">
                <draggable class="list-group" group="user" :list="list1" @change="log">
                  <canban-card
                    :full-name="element.full_name"
                    :image="element.image"
                    :age="element.age"
                    :email="element.email"
                    :gender="element.gender"
                    :country="element.country"
                    @card-clicked="goToUserAbout(element)"
                    v-for="element in list1"
                    :key="element.email"
                  />
                </draggable>
              </ul>
            </div>
          </template>
        </div>
      </div>
      <div class="item">
        <div class="flow-root">
          <ul class="divide-y divide-gray-200 dark:divide-gray-700">
            <draggable class="list-group" group="user" :list="list2" @change="log">
              <canban-card
                :full-name="element.full_name"
                :image="element.image"
                :age="element.age"
                :email="element.email"
                :gender="element.gender"
                :country="element.country"
                @card-clicked="goToUserAbout(element)"
                v-for="element in list2"
                :key="element.email"
              />
            </draggable>
          </ul>
        </div>
      </div>

      <div class="item">
        <div class="flow-root">
          <ul class="divide-y divide-gray-200 dark:divide-gray-700">
            <draggable class="list-group" group="user" :list="list3" @change="log">
              <canban-card
                :full-name="element.full_name"
                :image="element.image"
                :age="element.age"
                :email="element.email"
                :gender="element.gender"
                :country="element.country"
                @card-clicked="goToUserAbout(element)"
                v-for="element in list3"
                :key="element.email"
              />
            </draggable>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import CanbanCard from "@/common/components/CanbanCard.vue";
import Loading from "@/common/components/Loading.vue";

import { fetchUser } from "../api/modules/user/requests/fetchUser";

export default {
  components: {
    draggable,
    CanbanCard,
    Loading,
  },
  data() {
    return {
      error: null,
      loading: false,
      list1: [],
      list2: [],
      list3: [],
    };
  },
  created() {
    this.loadProfile();
  },
  methods: {
    goToUserAbout(payload) {
      if (!payload) return;

      this.$store.dispatch("setUserInfo", payload);

      this.$router.push(`/user-about/${payload.id}`);
    },
    async loadProfile() {
      this.loading = true;
      try {
        const response = await fetchUser();
        this.list1.push(response);
      } catch (err) {
        this.error = err;
      } finally {
        this.loading = false;
      }
    },

    log(evt) {
      window.console.log(evt);
    },
  },
  watch: {
    list1(value) {
      if (!value.length) {
        this.loadProfile();
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  padding: 100px;
}

.items {
  display: flex;
  gap: 50px;
}

.item {
  width: 30%;
  display: flex;
  flex-direction: column;
}

.list-group {
  height: 70vh;
  border: 1px black solid;
  padding: 20px;
  border-radius: 10px;
  overflow: auto;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}
</style>
