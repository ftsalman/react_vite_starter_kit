import React from 'react'
import { cn } from '../../../utils/utils'
import { buttonVariants } from './buttonVariants'

export const Button = ({
      size,
  variant,
  className,
  children,
  onClick,
  isLoading = false,
  ref,
  ...otherProps
}) => {
  return (
     <button
    ref={ref}
    className={cn(buttonVariants({ size, variant, className }))}
    onClick={(e) => onClick?.(e)}
    type="button"
    disabled={isLoading}
    {...otherProps}
    
  >
    {isLoading ? "Loading..." : children}
  </button>
  )
}
