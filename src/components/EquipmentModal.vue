<template>
  <VueFinalModal
    class="equipment-modal"
    content-class="equipment-modal__content"
    overlayTransition="vfm-fade"
    contentTransition="vfm-fade"
  >
    <form class="equipment-modal__form" @submit.prevent tabindex="-1">
      <AppInput label="Enter the equipment number" v-model="equipmentNumber" autofocus />
      <AppButton @click="handleSubmit"
        >{{ type === "add" ? "Add" : "Return" }} Equipment</AppButton
      >
      <AppButton type="passive" @click="closeModal">Go back</AppButton>
    </form>
  </VueFinalModal>
</template>

<script setup>
import { ref } from "vue";
import { VueFinalModal } from "vue-final-modal";
import AppButton from "./AppButton.vue";
import AppInput from "./AppInput.vue";
import { returnEquipment, addEquipment } from "../services";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  type: { type: String, required: true },
  address: { type: String, required: true },
});

const emits = defineEmits(["close"]);

const equipmentNumber = ref("");

const closeModal = () => {
  emits("close");
};

const handleSubmit = async () => {
  const actions = {
    add: () => addEquipment(equipmentNumber.value, props.address),
    return: () => returnEquipment(equipmentNumber.value),
  };

  actions[props.type]()
    .then(() => {
      closeModal();
      router.push({ name: "homepage" });
    })
    .catch(() => {})
    .finally(() => {});
};
</script>

<style lang="scss" scoped>
.equipment-modal {
  &__content {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background: #fff;
    border-radius: 0.5rem;
  }

  &__form {
    border-radius: 5px;
    background-color: #0e0e0e;
    padding: 21px 41px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 263px;
  }

  :global(.equipment-modal) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
