import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
   "text-sm font-medium rounded-lg flex cursor-pointer items-center justify-center gap-2 border border-transparent transiton-colors duration-300 disabled:cursor-not-allowed outline-0",
  {
    variants: {
      variant: {
        default:
          "text-white bg-brand-secondary-500 hover:opacity-90 focus:ring-[3px] focus:ring-brand-secondary-100 focus:border-brand-secondary-600 shadow-black disabled:bg-gray-200 disabled:text-gray-400",
        "brand-primary":
          "text-white bg-[#333333] hover:opacity-90 focus:ring-[3px] focus:ring-brand-primary-200 focus:border-brand-primary-600 disabled:bg-gray-200 disabled:text-white",
        "brand-secondary":
          "text-white bg-[#2D2D2D] hover:opacity-90 focus:ring-[3px] focus:ring-brand-secondary-100 focus:border-brand-secondary-600 shadow-black disabled:bg-gray-200 disabled:text-gray-400",
        secondary:
          "font-medium bg-transparent border border-gray-200 text-gray-800 hover:bg-brand-secondary-50 shadow-sm shadow-brand-secondary-50 focus:ring-[3px] focus:ring-brand-secondary-50 disabled:bg-gray-200 disabled:text-gray-400",
        tertiary:
          "bg-transparent text-gray-800 focus:ring-[3px] focus:ring-brand-secondary-100 focus:border-brand-secondary-600",
        danger:
          "bg-red-500 text-white focus:ring-[3px] focus:ring-red-200 focus:border-red-600",
        "danger-outlined":
          "border-red-500 text-red-500 border focus:shadow-red-200 focus:ring-[3px] focus:ring-red-200",
        success:
          "bg-green-500 text-white focus:ring-[3px] focus:ring-green-200 focus:border-green-600",
      },
      size: {
        default: "h-11 px-4 py-[10px]",
        xs: "h-[24px] px-4 py-2.5 text-sm",
        sm: "h-[32px] px-4 py-[6px] text-xs",
        md: "h-[40px] px-4 py-2.5 text-sm",
        lg: "h-[52px] px-5 py-[14px]",
        xl: "h-[56px] p-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

