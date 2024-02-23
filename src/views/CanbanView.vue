<!-- eslint-disable vue/no-v-for-template-key -->
<template>
  <div class="wrapper">
    <div class="items">
      <div class="item">
        <h2>List 1</h2>
        <div>
          <template v-if="loading">
            <Loading :loading="loading" />
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
                    @card-clicked="visibleUserInfo(element.email)"
                    v-for="element in list1"
                    :key="element.name"
                  />
                </draggable>
              </ul>
            </div>
          </template>
        </div>

        <raw-displayer class="col-3" :value="list1" title="List 1" />
      </div>
      <div class="item">
        <h2>List 2</h2>
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
                @card-clicked="visibleUserInfo(element.email)"
                v-for="element in list2"
                :key="element.name"
              />
            </draggable>
          </ul>
        </div>

        <raw-displayer class="col-3" :value="list2" title="List 2" />
      </div>

      <div class="item">
        <h2>List 3</h2>
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
                @card-clicked="visibleUserInfo(element.email)"
                v-for="element in list3"
                :key="element.name"
              />
            </draggable>
          </ul>
        </div>

        <raw-displayer class="col-3" :value="list3" title="List 3" />
      </div>
    </div>
    <Modal
      :is-visible="userInfoIsVisible"
      :age="userInfo.age"
      :gender="userInfo.gender"
      :country="userInfo.country"
      @onClick="closeModal"
    />
  </div>
</template>
<script>
import draggable from "vuedraggable";
import RawDisplayer from "@/common/components/RawDisplayer.vue";
import CanbanCard from "@/common/components/CanbanCard.vue";
import Loading from "@/common/components/Loading.vue";
import Modal from "@/common/components/Modal.vue";
import { fetchUser } from "../api/modules/user/requests/fetchUser";

export default {
  components: {
    draggable,
    RawDisplayer,
    CanbanCard,
    Loading,
    Modal,
  },
  data() {
    return {
      error: null,
      loading: false,
      userInfoIsVisible: false,
      list1: [],
      list2: [],
      list3: [],
      userInfo: {
        age: "",
        gender: "",
        country: "",
      },
    };
  },
  created() {
    this.loadProfile();
  },
  methods: {
    visibleUserInfo(payload) {
      if (!payload) return;

      this.userInfo = {
        age: "",
        gender: "",
        country: "",
      };

      this.findUserByEmail(payload);

      this.userInfoIsVisible = true;
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
    findUserByEmail(email) {
      const array = [...this.list1, ...this.list2, ...this.list3];

      // eslint-disable-next-line no-shadow
      const user = array.find((user) => user.email === email);

      if (user) {
        this.userInfo = {
          age: user.age,
          gender: user.gender,
          country: user.country,
        };
        console.log(this.userInfo);
      } else {
        console.log("Пользователь с указанным email не найден.");
      }
    },
    closeModal() {
      this.userInfoIsVisible = false;
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.list-group {
  height: 300px;
  overflow: auto;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}
</style>
