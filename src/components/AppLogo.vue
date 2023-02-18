<template>
  <div class="logo" :class="{ 'logo--hided': hideLogo }">
    <img class="logo__img" src="../assets/logo.png" />
    <h1 class="logo__title">Event manager</h1>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const hideLogo = computed(() => {
  if (route.name === "auth") return false;
  return true;
});
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  position: absolute;
  margin-bottom: 47px;
  top: 160px;
  width: 183px;
  transition: 1.3s;

  &__img {
    width: 100%;
  }

  &__title {
    font-size: 17px;
    color: #a09ea0;
    font-weight: 500;
    transition: 1.3s;
  }

  &--hided {
    width: 101px;
    top: 46px;
  }

  &--hided &__title {
    font-size: 9.43px;
  }
}
</style>
