import { StyledInput } from "./style"
import type { InputProps } from "./props"

export default function Input({ size, ...rest }: InputProps) {
  return (
    <StyledInput
      size={size}
      {...rest}
    />
  )
}