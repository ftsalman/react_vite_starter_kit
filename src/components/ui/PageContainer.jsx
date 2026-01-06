import React from 'react'
import { cn } from '../../utils/utils'

export const PageContainer = ({ className = "", children }) => {
  return (
     <div
      className={cn(
        "h-[calc(100dvh-60px)] p-4 flex flex-col gap-4",
        className
      )}
    >
      {children}
    </div>
  )
}
