<template>
  <div class="profile-page__loading" v-if="loading">Loading</div>
  <div class="profile-page" v-else>
    <span class="profile-page__title">User Profile</span>
    <div class="profile-page__result">
      <p class="profile-page__name">
        <span class="profile-page__subtitle">Name:</span>
        <span class="profile-page__name-value profile-page__value">{{
          userInfo.name ?? "None"
        }}</span>
      </p>
      <p class="profile-page__name">
        <span class="profile-page__subtitle">Order No:</span>
        <span class="profile-page__name-value profile-page__value">{{
          userInfo.orderNumber ?? "None"
        }}</span>
      </p>
      <p class="profile-page__name">
        <span class="profile-page__subtitle">Wallet Address:</span>
        <span class="profile-page__name-value profile-page__value">{{
          getShortedString(userInfo.address ?? address)
        }}</span>
      </p>
    </div>
    <img class="profile-page__status-img" :src="definedIcon" />
    <AppButton class="profile-page__btn" @click="goBack">Go back</AppButton>
    <AppButton class="profile-page__btn" type="passive" @click="openEquipment"
      >Equipment</AppButton
    >
  </div>
</template>

<script setup>
import { onMounted, ref, reactive, computed } from "vue";
import AppButton from "../components/AppButton.vue";
import { useRouter } from "vue-router";
import { getProfile } from "../services";
import { getShortedString } from "../utils/short-string";
import { openEquipmentModal } from "../composables/equipment-modal";
import declineIcon from "../assets/decline-icon.svg";
import acceptIcon from "../assets/accept-icon.svg";

const props = defineProps({
  address: { type: String, required: true },
});

const router = useRouter();

const notAllowed = ref(false);
const success = ref(false);
const userInfo = reactive({});
const loading = ref(false);

onMounted(() => {
  loading.value = true;
  getProfile(props.address)
    .then(({ data }) => {
      Object.assign(userInfo, data);
      success.value = true;
      loading.value = false;
    })
    .catch((e) => {
      notAllowed.value = true;
      loading.value = false;
    });
});

const goBack = () => {
  router.back();
};

const { open } = openEquipmentModal("add", props.address);
const openEquipment = () => {
  open();
};

const definedIcon = computed(() => (success.value ? acceptIcon : declineIcon));
</script>

<style lang="scss" scoped>
.profile-page {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  padding: 0 20px;
  align-items: center;

  &__title {
    font-weight: 500;
    color: #fff;
    font-size: 24px;
    text-align: center;
  }

  &__result {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 390px;
    width: 100%;
    align-items: center;
  }

  &__status-img {
    width: 180px;
    height: 180px;
  }

  &__btn {
    width: 263px;
  }

  &__name {
    display: flex;
    gap: 2px;
    font-size: 16px;
    align-items: center;
  }

  &__subtitle {
    color: #b3b3b3;
  }

  &__name-value {
    color: #fff;
  }
}
</style>
