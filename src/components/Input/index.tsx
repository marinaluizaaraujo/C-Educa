import { StyledInput } from "./style"
import type { InputProps } from "./props"

export default function Input({ size, type, placeholder }: InputProps) {
  return (
    <StyledInput
      size={size}
      type={type}
      placeholder={placeholder}
    />
  )
}