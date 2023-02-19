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
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  justify-content: center;
}
</style>
