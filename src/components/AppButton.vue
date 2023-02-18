<template>
  <button
    v-bind="attrs"
    class="app-button"
    :class="{ 'app-button--passive': type === 'passive' }"
  >
    <slot />
  </button>
</template>

<script setup inherit-attrs="true">
import { useAttrs } from "vue";

const attrs = useAttrs();

const props = defineProps({
  type: {
    type: String,
    default: "active",
    validator: (propValue) => {
      return ["active", "passive"].includes(propValue);
    },
  },
});
</script>

<style lang="scss" scoped>
.app-button {
  background-color: #b58212;
  cursor: pointer;
  border-radius: 5px;
  padding: 14px 20px;
  color: #fff;
  font-weight: 600;
  border: none;

  &--passive {
    background-color: #0e0e0e;
    border: 2px solid #b58212;
    color: #b58212;
  }
}
</style>
