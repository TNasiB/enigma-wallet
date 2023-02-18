<template>
  <div class="qr-reader">
    <div class="qr-reader__title"><img src="../assets/qr-icon.svg" />Scan QR</div>
    <div class="qr-reader__inner">
      <div class="qr-reader__inner-border" v-for="_ in 4" />
      <QrStream @decode="onDecode" />
    </div>
    <AppButton class="qr-reader__back-btn" @click="goBack">Go back</AppButton>
  </div>
</template>

<script setup>
import { QrStream } from "vue3-qr-reader";
import AppButton from "../components/AppButton.vue";
import { useRouter } from "vue-router";
import { getProfile } from "../services";

const router = useRouter();

const onDecode = (address) => {
  if (address.length === 0) return;

  router.push({ name: "user-profile", params: { address } });
};

const goBack = () => {
  router.back();
};
</script>

<style scoped lang="scss">
.qr-reader {
  display: flex;
  flex-direction: column;
  padding: 0 83px;
  gap: 60px;

  &__title {
    color: #fff;
    font-size: 24px;
    text-align: center;
    font-weight: 500;
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
  }

  &__inner {
    position: relative;
    width: 100%;
    aspect-ratio: 1/1;
  }

  &__inner-border {
    width: 45px;
    height: 45px;
    position: absolute;

    &:nth-child(1) {
      border-left: 3px solid #d9d9d9;
      border-top: 3px solid #d9d9d9;
      top: -23px;
      left: -23px;
    }
    &:nth-child(2) {
      border-right: 3px solid #d9d9d9;
      border-top: 3px solid #d9d9d9;
      top: -23px;
      right: -23px;
    }
    &:nth-child(3) {
      border-bottom: 3px solid #d9d9d9;
      border-right: 3px solid #d9d9d9;
      right: -23px;
      bottom: -23px;
    }
    &:nth-child(4) {
      border-left: 3px solid #d9d9d9;
      border-bottom: 3px solid #d9d9d9;
      left: -23px;
      bottom: -23px;
    }
  }
}
</style>
