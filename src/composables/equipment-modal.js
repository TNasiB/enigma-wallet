import { useModal } from "vue-final-modal";
import EquipmentModal from "../components/EquipmentModal.vue";

export const openEquipmentModal = (type = "add", address = "") => {
  const { open, close } = useModal({
    component: EquipmentModal,
    focusTrap: true,
    attrs: {
      clickToClose: true,
      escToClose: true,
      type,
      address,
      focusTrap: true,
      onClose() {
        close();
      },
    },
  });

  return { open, close };
};
