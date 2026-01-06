import React from 'react'
import { cn } from '../../utils/utils'

export const CardContainer = ({className,children}) => {
  return (
    <div
      className={cn("p-4 items-center gap-3 rounded-xl  border border-gray-100/70 bg-white", className)}
    >
      {children}
    </div>
  )
}
