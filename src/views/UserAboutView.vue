<template>
  <div class="user_about_wrapper">
    <div class="user_about_content">
      <div class="user_about_actions">
        <button class="back_button" type="button" @click="navigateBack">Назад</button>
      </div>
      <div class="user_about_row">
        <img :src="userInfo.image" class="user_about_image" :alt="userInfo.full_name" />
        <div class="user_about_content_text">
          <h2 class="user_about_name">{{ userInfo.full_name }}</h2>
          <p>
            <span>Gender: </span>
            {{ userInfo.gender }}
          </p>
          <p>
            <span>Email:</span>
            {{ userInfo.email }}
          </p>
          <p>
            <span>Location: </span>
            {{ userInfo.country }}
          </p>
          <p>
            <span>Phone: </span>
            {{ userInfo.phone }}
          </p>
          <p><span>Age:</span> {{ userInfo.age }}</p>
          <p><span>Registered Since:</span> {{ registeredDate }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { goBack } from "@/common/utils/goBack";
import { formattedDate } from "@/common/utils/formattedDate";

export default {
  data() {
    return {};
  },
  methods: {
    navigateBack() {
      goBack(this.$router);
    },
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
    registeredDate() {
      return formattedDate(this.$store.state.userInfo.registered);
    },
  },
};
</script>

<style scoped>
.user_about_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.user_about_content {
  width: 100%;
  max-width: 1000px;
  padding: 20px;
  border-radius: 10px;
  -webkit-box-shadow: 8px 11px 34px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 11px 34px 0px rgba(66, 68, 90, 1);
  box-shadow: 8px 11px 34px 0px rgba(66, 68, 90, 1);
}

.user_about_row {
  display: flex;
  align-items: center;
  gap: 50px;
}
.user_about_image {
  width: 128px;
  height: 128px;
}

.user_about_name {
  font-size: 39px;
  font-weight: 500;
}

.user_about_content_text p {
  font-size: 18px;
  margin-bottom: 8px;
}

.user_about_content_text p span {
  font-weight: 700;
}

.back_button {
  width: 100px;
  height: 40px;
  border: 1px solid #000;
  border-radius: 10px;
  transition: opacity 0.3s;
}

.back_button:hover {
  opacity: 50%;
}
</style>
