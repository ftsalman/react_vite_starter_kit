import { cva } from "class-variance-authority";

export const inputboxVariants = cva(

     "rounded-lg outline-none text-sm text-gray-800 placeholder:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-100 transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        primary:
          "border border-gray-200 focus:border-brand-primary-400 focus:ring-[3px] ring-brand-primary-100",
        secondary:
          "border border-gray-200 focus:border-brand-secondary-400 focus:ring-[3px] ring-brand-secondary-100",
        error:
          "border border-red-400 focus:border-red-400 focus:ring-[3px] ring-red-100 placeholder:text-gray-400",
      },
      size: {
        sm: "h-9 p-2.5",
        md: "h-11 p-3",
        lg: "h-11 p-3",
        xl: "h-12 p-4",
      },
    },
    defaultVariants: {
      variant: "secondary",
      size: "md",
    },
  }
)