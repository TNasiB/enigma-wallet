<template>
  <form class="auth-page" @submit.prevent="handleSubmit">
    <AppInput label="Login" v-model="form.login" />
    <AppInput label="Password" type="password" v-model="form.password" />
    <AppButton class="auth-page__submit-btn" @click="handleSubmit">Continue</AppButton>
    <span v-if="error">Error</span>
  </form>
</template>

<script setup>
import { reactive, ref } from "vue";
import AppInput from "../components/AppInput.vue";
import AppButton from "../components/AppButton.vue";
import { useRouter } from "vue-router";
import { login } from "../services";
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();
const router = useRouter();

const form = reactive({
  login: "",
  password: "",
});
const error = ref(false);

const handleSubmit = async () => {
  const preparedToken = btoa(`${form.login}:${form.password}`);

  cookies.set("access-token", `Basic ${preparedToken}`);

  login()
    .then(() => {
      router.push({ name: "homepage" });
    })
    .catch(({ response }) => {
      const status = response.status;
      if (status === 401) {
        form.login = "";
        form.password = "";
        error.value = true;
      }
      cookies.remove("access-token");
    });
};
</script>

<style lang="scss" scoped>
.auth-page {
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 263px;

  &__submit-btn {
    width: 100%;
  }
}
</style>
