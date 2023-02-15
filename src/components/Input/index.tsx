import { InputContainer } from './styles'

interface InputProps {
  name: string
}

export function Input({ name }: InputProps) {
  return <InputContainer placeholder={name} />
}
