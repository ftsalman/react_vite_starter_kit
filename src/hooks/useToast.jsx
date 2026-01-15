import { toast } from "react-toastify";
import { Toast } from "../components/alerts/Toast";

export const useToast = () => {
  const showToast = (variantConfig = {}, toastConfig = {}) => {
    toast(<Toast {...variantConfig} />, toastConfig);
  };

  return { showToast };
};
