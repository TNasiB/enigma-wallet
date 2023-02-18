<template>
  <div class="w-input">
    <span class="w-input__label">{{ label }}</span>
    <input
      type="text"
      class="w-input__input"
      :value="modelValue"
      v-bind="attrs"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup inherit-attrs="true">
import { useAttrs } from "vue";

const props = defineProps({
  label: { type: [String, null], default: null },
  modelValue: { type: String, required: true },
});

const attrs = useAttrs();

defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
.w-input {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__input {
    background-color: #1d1d1d;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    border-radius: 5px;
    padding: 11px 10px;
    border: 1px solid transparent;
    transition: 0.3s;
  }

  &__input:focus {
    border: 1px solis #c4c4c4;
  }

  &__input:hover {
    border: 1px solid #6b6a6a;
  }

  &__label {
    color: #b3b3b3;
  }
}
</style>
