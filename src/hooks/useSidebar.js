import { useWindowSize } from "./useWindowSize";
import { SCREEN_SIZES } from "../utils/utils";
import {
  toggleSiderbar,
  toggleSiderbarCollapsed,
  closeSidebar,
} from "../services/redux/reducers/siderbarReducer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useSidebar = () => {
  const sidebarStates = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width <= SCREEN_SIZES.md) {
      dispatch(toggleSiderbar(true));
    }
  }, [dispatch, windowSize.width]);

  return {
    onCollapse: () => dispatch(toggleSiderbarCollapsed()),
    onToggle: () => dispatch(toggleSiderbar()),
    closeSidebar: () => dispatch(closeSidebar()),
    isExpanded: sidebarStates?.isSiderbarCollapsed,
    isOpen: sidebarStates?.isSiderbarOpen,
  };
};
