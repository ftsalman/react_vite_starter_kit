import { cn } from "../../../utils/utils";
import { inputboxVariants } from "./inputBoxVariants";

export const InputBox = ({
  className = "",
  size = "md",
  variant = "secondary",
  ...props
}) => (
  <input
    type="text"
    className={cn(inputboxVariants({ className, size, variant }))}
    {...props}
  />
);
