<template>
  <div class="homepage">
    <AppButton class="homepage__btn" @click="doScan"
      ><img src="../assets/qr-icon.svg" />Scan QR</AppButton
    >
    <AppButton class="homepage__btn" type="passive" @click="returnEq"
      >Return eq.</AppButton
    >
  </div>
</template>

<script setup>
import AppButton from "../components/AppButton.vue";
import { useRouter } from "vue-router";
import { openEquipmentModal } from "../composables/equipment-modal";

const router = useRouter();
const doScan = () => {
  router.push({ name: "qr-reader" });
};

const { open } = openEquipmentModal("return");
const returnEq = () => {
  open();
};
</script>

<style lang="scss" scoped>
.homepage {
  display: flex;
  flex-direction: column;
  gap: 40px;

  &__btn {
    width: 263px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 24px;
  }
}
</style>
