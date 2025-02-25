import React from 'react'

interface InputIconProps {
  icon: React.ReactNode
  children: React.ReactNode
}

export function InputIcon({ icon, children }: InputIconProps) {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        {icon}
      </div>
      {children}
    </div>
  )
}

