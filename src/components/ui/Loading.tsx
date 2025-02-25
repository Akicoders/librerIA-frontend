import {Book, Loader2 } from "lucide-react"

interface LoadingProps {
  size?: number
  className?: string
}

export function Loading({ size = 24, className = "" }: LoadingProps) {
  return (
    <div className="flex items-center justify-center ">
     <p>Cargando el mejor lugar de estudio para ti ❤📘
     </p>
      <Loader2 
        size={size}
        className={`animate-spin text-primary ${className}`}
      />
    </div>
  )
}
