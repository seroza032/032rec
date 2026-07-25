interface IconProps {
  name: string
  className?: string
}

export function Icon({ name, className = '' }: IconProps) {
  return (
    <span aria-hidden="true" className={`material-icons-round select-none leading-none ${className}`}>
      {name}
    </span>
  )
}
