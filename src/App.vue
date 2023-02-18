<template>
  <div class="wallet">
    <ModalsContainer />
    <AppLogo />
    <router-view />
    <notifications />
  </div>
</template>

<script setup>
import { ModalsContainer } from "vue-final-modal";
import AppLogo from "./components/AppLogo.vue";
</script>

<style scoped lang="scss">
.wallet {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
