import { useModal } from "vue-final-modal";
import EquipmentModal from "../components/EquipmentModal.vue";

export const openEquipmentModal = (type = "add", address = "") => {
  const { open, close } = useModal({
    component: EquipmentModal,
    attrs: {
      clickToClose: true,
      escToClose: true,
      type,
      address,
      onClose() {
        close();
      },
    },
  });

  return { open, close };
};
